/** @type {import('next').NextConfig} */
const nextConfig = {
 async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/es?theme=blue',
        permanent: true,
      },
      ]
      }
}

module.exports = nextConfig
