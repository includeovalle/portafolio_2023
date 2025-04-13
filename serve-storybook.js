// serve-storybook.js
import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.STORYPORT) || '8080';
const baseDir = path.join(__dirname, 'storybook-static');

const server = http.createServer((req, res) => {
  // --- Limit headers to avoid basic header flooding ---
  const MAX_HEADERS = 30;
  if (Object.keys(req.headers).length > MAX_HEADERS) {
    res.writeHead(400);
    return res.end('Too many headers');
  }

  let reqPath = decodeURIComponent(req.url || '/').split('?')[0];

  // --- Normalize and sanitize path ---
  try {
    reqPath = path.posix.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  } catch {
    res.writeHead(400);
    return res.end('Invalid path');
  }

  if (reqPath === '/') reqPath = '/index.html';

  const filePath = path.join(baseDir, reqPath);

  // --- Ensure no path escape ---
  if (!filePath.startsWith(baseDir)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  // --- Limit size of files (e.g., deny files over 5MB) ---
  if (existsSync(filePath)) {
    const stats = statSync(filePath);
    if (stats.size > 5 * 1024 * 1024) {
      res.writeHead(413);
      return res.end('File too large');
    }

    if (stats.isFile()) {
      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      return createReadStream(filePath).pipe(res);
    }
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`✅ Storybook running on http://localhost:${PORT}`);
});

// --- Content-Type helper ---
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
  }[ext] || 'application/octet-stream';
}
