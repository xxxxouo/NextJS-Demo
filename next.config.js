/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  // 重定向
  async redirects() {
    return [
      {
        source:'/', // 原路径
        destination:'/home', // 目标路径
        permanent:true // true 表示永久重定向 false 临时重定向(浏览器不会缓存重定向网站维护可以用临时)
      }
    ]
  },
  env:{
    APP_ENV:process.env.APP_ENV
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './src');
    config.resolve.alias['pancake'] = path.resolve(__dirname, './packages/pancake-uikit-wagmi/packages/pancake-uikit/src');
    return config;
  },
}

module.exports = nextConfig
