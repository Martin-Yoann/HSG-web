'use client';

import { useId, useState, type CSSProperties, type ReactNode } from 'react';
import { useMobileLayout } from '@/lib/use-mobile-layout';
import { AnimatedPanel } from './AnimatedPanel';

export function AudiencePoint({ title, index, children }: { title: string; index: number; children: ReactNode }) {
  const mobile = useMobileLayout();
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return <div className="rv audience-point" style={{ '--i': index } as CSSProperties} data-expanded={expanded}>
    <h3 className="audience-point__title">{mobile
      ? <button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(value => !value)}>
        {title}<i className="audience-point__icon" aria-hidden="true" />
      </button>
      : title}</h3>
    <AnimatedPanel id={id} open={!mobile || expanded} contentClassName="audience-point__body">{children}</AnimatedPanel>
  </div>;
}
