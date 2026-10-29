'use client';

import { useEffect, useState, type ReactNode } from 'react';

export function AnimatedPanel({ id, open, contentClassName, children }: {
  id: string; open: boolean; contentClassName?: string; children: ReactNode;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  return <div id={id} className="disclosure-panel" data-open={open} data-ready={ready} aria-hidden={!open} inert={!open}>
    <div className="disclosure-panel__clip"><div className={contentClassName}>{children}</div></div>
  </div>;
}
