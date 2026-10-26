'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { logicalPath } from '@/lib/locale';
import { afterPageLoadIdle, allowSpeculativeLoading } from '@/lib/loading';

// Reinitialize page interactions after client navigation and release every listener.
export function SiteEffects() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    const isLanguageSwitch = document.documentElement.hasAttribute('data-language-switch')
      || (previousPath.current !== null && pathname !== previousPath.current && logicalPath(pathname) === logicalPath(previousPath.current));
    const main = document.querySelector<HTMLElement>('main');
    if (main) {
      if (isLanguageSwitch) main.dataset.navigation = 'language';
      else delete main.dataset.navigation;
    }
    previousPath.current = pathname;
    delete document.documentElement.dataset.languageSwitch;
    const cleanup: (() => void)[] = [];
    const controller = new AbortController();
    const { signal } = controller;
    document.documentElement.classList.add('js');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduce = motionPreference.matches;
    const bar = document.querySelector<HTMLElement>('[data-topbar]');
    const hero = document.querySelector('.hero, .page-hero');
    const menu = document.querySelector<HTMLButtonElement>('.menu-btn');
    let frame = 0;

    document.body.classList.toggle('no-hero', !hero);
    bar?.classList.remove('is-open');
    menu?.setAttribute('aria-expanded', 'false');
    if (menu) menu.setAttribute('aria-label', menu.dataset.openLabel || 'Menu');
    const updateBar = () => {
      frame = 0;
      bar?.classList.toggle('is-solid', !hero || window.scrollY > 48);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateBar); };
    window.addEventListener('scroll', onScroll, { passive: true, signal });
    updateBar();
    cleanup.push(() => cancelAnimationFrame(frame));
    // A sticky panel taller than the viewport must scroll with its page.
    const asides = document.querySelectorAll<HTMLElement>('.aside');
    const fitAsides = () => asides.forEach(aside => {
      aside.toggleAttribute('data-too-tall', aside.offsetHeight + 110 > window.innerHeight);
    });
    fitAsides();
    window.addEventListener('resize', fitAsides, { signal });
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(fitAsides);
      asides.forEach(aside => observer.observe(aside));
      cleanup.push(() => observer.disconnect());
    }
    const updateVisibility = () => document.documentElement.toggleAttribute('data-page-hidden', document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility, { signal });
    const tracks = document.querySelectorAll<HTMLElement>('.strip__track');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        entry.target.toggleAttribute('data-paused', !entry.isIntersecting);
      }));
      tracks.forEach(track => observer.observe(track));
      cleanup.push(() => observer.disconnect());
    }
    const closeMenu = () => {
      bar?.classList.remove('is-open');
      menu?.setAttribute('aria-expanded', 'false');
      if (menu) menu.setAttribute('aria-label', menu.dataset.openLabel || 'Menu');
    };
    menu?.addEventListener('click', () => {
      const open = bar?.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(Boolean(open)));
      menu.setAttribute('aria-label', (open ? menu.dataset.closeLabel : menu.dataset.openLabel) || 'Menu');
    }, { signal });
    bar?.addEventListener('click', event => {
      if ((event.target as Element).closest('a')) closeMenu();
    }, { signal });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && bar?.classList.contains('is-open')) {
        closeMenu();
        menu?.focus();
      }
    }, { signal });

    const elements = document.querySelectorAll<HTMLElement>(
      '.rv, .svc__main > section, .aside, .faq details, .boundary, .section > .wrap > .title, .section > .wrap > .lead',
    );
    const animations = new Set<Animation>();
    const revealImmediately = () => elements.forEach(element => {
      delete element.dataset.reveal;
      element.classList.add('in', 'done');
    });
    if (reduce || !('IntersectionObserver' in window)) {
      revealImmediately();
    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const pending = element.dataset.reveal === 'pending';
          delete element.dataset.reveal;
          element.classList.add('in');
          if (pending && !motionPreference.matches) {
            const stagger = Math.min(Math.max(Number(element.style.getPropertyValue('--i')) || 0, 0), 3) * 55;
            const animation = element.animate(
              [{ opacity: 0, translate: '0 18px' }, { opacity: 1, translate: '0 0' }],
              { duration: 500, delay: stagger, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'backwards' },
            );
            animations.add(animation);
            void animation.finished.then(() => {
              animations.delete(animation);
              element.classList.add('done');
            }).catch(() => {});
          } else element.classList.add('done');
          observer.unobserve(element);
        });
      }, { rootMargin: '0px 0px -32px 0px', threshold: 0 });
      elements.forEach(element => {
        // Keep already visible content readable; only stage content below the fold.
        if (element.getBoundingClientRect().top >= window.innerHeight) element.dataset.reveal = 'pending';
        observer.observe(element);
      });
      cleanup.push(() => observer.disconnect());
    }
    cleanup.push(() => {
      animations.forEach(animation => animation.cancel());
      elements.forEach(element => { delete element.dataset.reveal; });
    });
    motionPreference.addEventListener('change', event => {
      if (event.matches) {
        animations.forEach(animation => animation.cancel());
        animations.clear();
        revealImmediately();
        document.querySelector<HTMLVideoElement>('.hero__video')?.pause();
      }
    }, { signal });

    const video = document.querySelector<HTMLVideoElement>('.hero__video');
    if (video && !reduce && window.innerWidth >= 760 && allowSpeculativeLoading() && video.dataset.src) {
      let visible = video.getBoundingClientRect().bottom > 0;
      let ready = false;
      const play = () => {
        if (ready && visible && !document.hidden && !motionPreference.matches && allowSpeculativeLoading()) {
          if (video.getAttribute('src') !== video.dataset.src) video.src = video.dataset.src!;
          void video.play().catch(() => {});
        } else video.pause();
      };
      video.addEventListener('playing', () => video.classList.add('is-ready'), { once: true, signal });
      cleanup.push(afterPageLoadIdle(() => {
        const poster = document.querySelector<HTMLImageElement>('.hero__poster');
        const decoded = poster ? poster.decode().catch(() => {}) : Promise.resolve();
        void decoded.then(() => {
          if (signal.aborted) return;
          ready = true;
          play();
        });
      }));
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
          visible = entries[0]?.isIntersecting ?? false;
          play();
        }, { threshold: 0.05 });
        observer.observe(video);
        cleanup.push(() => observer.disconnect());
      }
      document.addEventListener('visibilitychange', play, { signal });
      cleanup.push(() => video.pause());
    }

    const contentVideos = document.querySelectorAll<HTMLVideoElement>('video[data-poster]');
    const loadPoster = (target: HTMLVideoElement) => {
      if (!target.poster && target.dataset.poster) target.poster = target.dataset.poster;
    };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          loadPoster(entry.target as HTMLVideoElement);
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '300px' });
      contentVideos.forEach(target => observer.observe(target));
      cleanup.push(() => observer.disconnect());
    } else contentVideos.forEach(loadPoster);

    return () => {
      controller.abort();
      cleanup.forEach(dispose => dispose());
      document.body.classList.remove('no-hero');
    };
  }, [pathname]);

  return null;
}
