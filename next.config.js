/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}
