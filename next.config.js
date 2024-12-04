/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/documentation-app',
  assetPrefix: '/documentation-app',
};

module.exports = nextConfig;
