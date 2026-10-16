import type { Metadata, Viewport } from 'next';

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
export const siteMetadata: Metadata = {
  metadataBase: new URL(configuredUrl),
  icons: { icon: '/assets/img/favicon.svg' },
};

export const viewport: Viewport = { themeColor: '#011D64' };
