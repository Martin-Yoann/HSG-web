import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep root discovery and file tracing inside this checkout on Windows drives.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [480, 640, 750, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 160, 256, 320, 384],
    minimumCacheTTL: 14400,
  },
  async redirects() {
    return [
      // Keep historical Shopify links working while this domain serves HSG.
      // v2.27: /contact/ belongs to the new website; legacy /pages/contact stays on Shopify.
      { source: '/company', destination: 'https://www.happyglobalus.com/pages/companyprofile', permanent: true },
      { source: '/gummies', destination: 'https://www.happyglobalus.com/pages/candy-master', permanent: true },
      { source: '/news', destination: 'https://www.happyglobalus.com/blogs/news', permanent: true },
      { source: '/search', destination: 'https://www.happyglobalus.com/search', permanent: true },
      { source: '/cart', destination: 'https://www.happyglobalus.com/cart', permanent: true },
      { source: '/collections', destination: 'https://www.happyglobalus.com/collections', permanent: true },
      { source: '/pages/gummies', destination: 'https://www.happyglobalus.com/pages/candy-master', permanent: true },
      { source: '/pages/contact-1', destination: 'https://www.happyglobalus.com/pages/contact', permanent: true },
      { source: '/pages/:path+', destination: 'https://www.happyglobalus.com/pages/:path+', permanent: true },
      { source: '/blogs/:path+', destination: 'https://www.happyglobalus.com/blogs/:path+', permanent: true },
      { source: '/collections/:path+', destination: 'https://www.happyglobalus.com/collections/:path+', permanent: true },
      { source: '/products/:path+', destination: 'https://www.happyglobalus.com/products/:path+', permanent: true },
      { source: '/policies/:path+', destination: 'https://www.happyglobalus.com/policies/:path+', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:path+/index.html', destination: '/:path+/', permanent: true },
    ];
  },
};

export default nextConfig;
