'use client';

import Link from '@/components/IntentLink';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition, type ComponentProps, type MouseEvent } from 'react';
import { publicPath, type Locale } from '@/lib/locale';
import { afterPageLoadIdle, allowSpeculativeLoading } from '@/lib/loading';

const normalize = (value: string) => value === '/' ? '/' : value.replace(/\/$/, '') + '/';

export function NavLink(props: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const href = typeof props.href === 'string' ? props.href : '';
  const active = publicPath(pathname) === normalize(href);
  return <Link {...props} aria-current={active ? 'page' : undefined} />;
}

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const chinese = normalize(publicPath(pathname).replace(/^\/en(?=\/|$)/, '') || '/');
  const english = chinese === '/' ? '/en/' : '/en' + chinese;

  useEffect(() => {
    return afterPageLoadIdle(() => {
      if (allowSpeculativeLoading()) router.prefetch(locale === 'zh' ? english : chinese);
    });
  }, [chinese, english, locale, router]);

  useEffect(() => {
    if (!isPending) {
      setPendingLocale(null);
      delete document.documentElement.dataset.languageSwitch;
    }
  }, [isPending, locale]);

  function switchLanguage(event: MouseEvent<HTMLAnchorElement>, target: Locale, href: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (target === locale || isPending) return;
    setHasInteracted(true);
    setPendingLocale(target);
    document.documentElement.dataset.languageSwitch = '';
    const main = document.querySelector<HTMLElement>('main');
    if (main) main.dataset.navigation = 'language';
    startTransition(() => router.push(href + window.location.search + window.location.hash, { scroll: false }));
  }

  return (
    <div className="langswitch" data-locale={pendingLocale || locale} data-animated={hasInteracted || undefined} role="group" aria-label={locale === 'en' ? 'Language' : '语言'} aria-busy={isPending}>
      <span className="langswitch__pill" aria-hidden="true" />
      <Link href={chinese} scroll={false} prefetch lang="zh-CN" hrefLang="zh-CN" onClick={event => switchLanguage(event, 'zh', chinese)} className={(pendingLocale || locale) === 'zh' ? 'is-on' : undefined} aria-current={locale === 'zh' ? 'true' : undefined}>中文</Link>
      <Link href={english} scroll={false} prefetch lang="en" hrefLang="en" onClick={event => switchLanguage(event, 'en', english)} className={(pendingLocale || locale) === 'en' ? 'is-on' : undefined} aria-current={locale === 'en' ? 'true' : undefined}>English</Link>
    </div>
  );
}
