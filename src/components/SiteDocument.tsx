'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Header } from './Header';
import { SiteEffects } from './SiteEffects';
import { publicPath } from '@/lib/locale';

// This shared document is also rendered on the server for every static page.
// Reading the route here preserves correct initial HTML language and live updates.
export function SiteDocument({ children, chineseFooter, englishFooter }: {
  children: ReactNode;
  chineseFooter: ReactNode;
  englishFooter: ReactNode;
}) {
  const pathname = publicPath(usePathname());
  const locale = /^\/en(?:\/|$)/.test(pathname) ? 'en' : 'zh';
  return <html lang={locale === 'en' ? 'en' : 'zh-CN'}><body>
    <a className="sr-only" href="#main">{locale === 'en' ? 'Skip to content' : '跳到正文'}</a>
    <Header locale={locale} />
    {children}
    {locale === 'en' ? englishFooter : chineseFooter}
    <SiteEffects />
  </body></html>;
}
