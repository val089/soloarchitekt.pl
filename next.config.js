/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    // formats: ['image/avif', 'image/webp', 'image/png'],
  },
};

module.exports = nextConfig;
