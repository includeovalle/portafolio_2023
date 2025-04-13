// pm2.config.js
module.exports ={
  apps: [
    {
      name: "storybook-server",
      script: "./serve-storybook.js",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: process.env.STORYPORT,
      }
    }
  ]
};


