'use client';

import { Children, isValidElement, useEffect, useRef, useState, type ReactNode } from 'react';

export function ServiceCarousel({ children, locale }: { children: ReactNode; locale: 'zh' | 'en' }) {
  const track = useRef<HTMLDivElement>(null);
  const count = Children.toArray(children).filter(isValidElement).length;
  const [active, setActive] = useState(0);
  const pending = useRef<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const en = locale === 'en';

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (pending.current !== null || !element.children.length) return;
      const cards = Array.from(element.children) as HTMLElement[];
      const first = cards[0].offsetLeft;
      const distances = cards.map(card => Math.abs(card.offsetLeft - first - element.scrollLeft));
      setActive(distances.indexOf(Math.min(...distances)));
    };
    const scroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => { pending.current = null; update(); }, 160);
    };
    const interrupt = () => { pending.current = null; };
    element.addEventListener('scroll', scroll, { passive: true });
    element.addEventListener('pointerdown', interrupt, { passive: true });
    element.addEventListener('wheel', interrupt, { passive: true });
    const observer = new ResizeObserver(() => { pending.current = null; update(); });
    observer.observe(element);
    return () => {
      element.removeEventListener('scroll', scroll);
      element.removeEventListener('pointerdown', interrupt);
      element.removeEventListener('wheel', interrupt);
      observer.disconnect(); cancelAnimationFrame(frame); clearTimeout(timer.current);
    };
  }, []);

  const go = (index: number) => {
    const element = track.current;
    if (!element) return;
    const target = Math.max(0, Math.min(count - 1, index));
    const cards = Array.from(element.children) as HTMLElement[];
    pending.current = target;
    setActive(target);
    element.scrollTo({ left: cards[target].offsetLeft - cards[0].offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  return <div className="service-carousel" role="region" aria-label={en ? 'Service lines' : '服务板块'}>
    <div className="sgrid" ref={track}>{children}</div>
    <div className="service-carousel__controls">
      <button type="button" className="service-carousel__arrow" disabled={active === 0} onClick={() => go((pending.current ?? active) - 1)} aria-label={en ? 'Previous service' : '上一项服务'}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
      </button>
      <div className="service-carousel__dots" role="group" aria-label={en ? 'Choose a service' : '选择服务'}>
        {Array.from({ length: count }, (_, index) => <button type="button" key={index} aria-current={active === index ? 'true' : undefined}
          aria-label={en ? `Go to service ${index + 1} of ${count}` : `转到第 ${index + 1} 项服务，共 ${count} 项`} onClick={() => go(index)} />)}
      </div>
      <button type="button" className="service-carousel__arrow" disabled={active === count - 1} onClick={() => go((pending.current ?? active) + 1)} aria-label={en ? 'Next service' : '下一项服务'}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
      </button>
    </div>
  </div>;
}
