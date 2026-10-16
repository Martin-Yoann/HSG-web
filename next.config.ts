import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [480, 640, 750, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 160, 256, 320, 384],
    minimumCacheTTL: 14400,
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:path+/index.html', destination: '/:path+/', permanent: true },
    ];
  },
};

export default nextConfig;
