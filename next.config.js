/** @type {import('next').NextConfig} */
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
  webpack: (config) => {
    config.resolve.alias['pancake'] = path.join(__dirname, './packages/pancake-toolkit/packages/pancake-uikit/src');
    return config;
  },
}

module.exports = nextConfig
