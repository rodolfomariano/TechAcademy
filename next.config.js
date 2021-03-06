/** @type {import('next').NextConfig} */

const withReactSvg = require('next-react-svg')
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'firebasestorage.googleapis.com'],
  }
}

module.exports = nextConfig

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets'),
  webpack(config, options) {
    return config
  }
})