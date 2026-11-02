'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { NavLink } from './Navigation';

export function ServicesNavigation({ href, title, toggleLabel, children }: {
  href: string; title: string; toggleLabel: string; children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const desktop = window.matchMedia('(min-width: 1181px)');
    desktop.addEventListener('change', () => setOpen(false), { signal });
    document.addEventListener('pointerdown', event => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    }, { signal });
    return () => controller.abort();
  }, []);

  return <div ref={root} className="nav__item has-menu" data-open={open}
    onPointerEnter={event => { if (event.pointerType === 'mouse') setOpen(true); }}
    onPointerLeave={() => { if (!root.current?.contains(document.activeElement)) setOpen(false); }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
    onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
        toggle.current?.focus();
      }
    }}>
    <NavLink href={href}>{title}</NavLink>
    <button ref={toggle} type="button" className="services-toggle" aria-label={toggleLabel}
      aria-expanded={open} aria-controls="services-navigation" onClick={() => setOpen(value => !value)}>
      <span className="caret" aria-hidden="true" />
    </button>
    <div id="services-navigation" className="menu" inert={!open}><div className="menu__grid">{children}</div></div>
  </div>;
}
