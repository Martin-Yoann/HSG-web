'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, type ComponentProps } from 'react';
import { allowSpeculativeLoading } from '@/lib/loading';

// Long pages should not download every linked route as links enter the viewport.
export default function IntentLink({ onMouseEnter, onMouseLeave, onFocus, onTouchStart, ...props }: ComponentProps<typeof Link>) {
  const router = useRouter();
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const warmed = useRef(0);
  const cancel = () => clearTimeout(timer.current);
  useEffect(() => { warmed.current = 0; return () => clearTimeout(timer.current); }, [props.href]);
  const warm = () => {
    cancel();
    if (Date.now() - warmed.current > 30000 && allowSpeculativeLoading() && typeof props.href === 'string' && props.href.startsWith('/') && !props.href.startsWith('//')) {
      warmed.current = Date.now();
      router.prefetch(props.href);
    }
  };
  return <Link {...props} prefetch={false}
    onMouseEnter={event => { onMouseEnter?.(event); if (!event.defaultPrevented) timer.current = setTimeout(warm, 120); }}
    onMouseLeave={event => { cancel(); onMouseLeave?.(event); }}
    onFocus={event => { onFocus?.(event); if (!event.defaultPrevented) warm(); }}
    onTouchStart={event => { onTouchStart?.(event); if (!event.defaultPrevented) warm(); }}
  />;
}
