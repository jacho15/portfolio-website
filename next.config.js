/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  // basePath: '/portfolio-website',
  // assetPrefix: '/portfolio-website/',
  trailingSlash: true,
}

module.exports = nextConfig 