'use client';

import { useEffect, useId, useState, type ReactNode } from 'react';

export function FooterGroup({ title, children }: { title: string; children: ReactNode }) {
  const [mobile, setMobile] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)');
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <div className="footer__group" data-expanded={expanded}>
      <h4 className="footer__heading">
        <span className="footer__desktop-title">{title}</span>
        <button type="button" className="footer__toggle" aria-expanded={expanded} aria-controls={panelId} onClick={() => setExpanded(value => !value)}>
          {title}<span className="footer__chevron" aria-hidden="true" />
        </button>
      </h4>
      <div id={panelId} className="footer__links" hidden={mobile && !expanded}>{children}</div>
    </div>
  );
}
