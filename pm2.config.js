// pm2.config.js
export default {
  apps: [
    {
      name: "storybook-server",
      script: "./serve-storybook.js",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
      }
    }
  ]
};

