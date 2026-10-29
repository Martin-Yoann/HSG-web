'use client';

import { useId, useState, type ReactNode } from 'react';
import { useMobileLayout } from '@/lib/use-mobile-layout';
import { AnimatedPanel } from './AnimatedPanel';

export function FooterGroup({ title, children }: { title: string; children: ReactNode }) {
  const mobile = useMobileLayout();
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <div className="footer__group" data-expanded={expanded}>
      <h4 className="footer__heading">
        <span className="footer__desktop-title">{title}</span>
        <button type="button" className="footer__toggle" aria-expanded={expanded} aria-controls={panelId} onClick={() => setExpanded(value => !value)}>
          {title}<span className="footer__chevron" aria-hidden="true" />
        </button>
      </h4>
      <AnimatedPanel id={panelId} open={!mobile || expanded} contentClassName="footer__links">{children}</AnimatedPanel>
    </div>
  );
}
