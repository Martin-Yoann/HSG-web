import type { ReactNode } from 'react';
import { SiteDocument } from '@/components/SiteDocument';
import { FooterZh } from '@/components/FooterZh';
import { FooterEn } from '@/components/FooterEn';
import { siteMetadata } from '@/lib/site';
import '@/styles/site.css';

export const metadata = siteMetadata;
export { viewport } from '@/lib/site';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <SiteDocument chineseFooter={<FooterZh />} englishFooter={<FooterEn />}>
    {children}
  </SiteDocument>;
}
