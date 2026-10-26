import type { Metadata, Viewport } from 'next';

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://happyglobalinc.com';
export const siteMetadata: Metadata = {
  metadataBase: new URL(configuredUrl),
  icons: { icon: '/assets/img/favicon.svg' },
};

export const viewport: Viewport = { themeColor: '#011D64' };
