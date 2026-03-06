/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['firebase', '@firebase'],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
