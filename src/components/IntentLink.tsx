'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ComponentProps } from 'react';
import { allowSpeculativeLoading } from '@/lib/loading';

// Long pages should not download every linked route as links enter the viewport.
export default function IntentLink({ onMouseEnter, onFocus, onTouchStart, ...props }: ComponentProps<typeof Link>) {
  const router = useRouter();
  const warm = () => {
    if (allowSpeculativeLoading() && typeof props.href === 'string' && props.href.startsWith('/') && !props.href.startsWith('//')) {
      router.prefetch(props.href);
    }
  };
  return <Link {...props} prefetch={false}
    onMouseEnter={event => { onMouseEnter?.(event); if (!event.defaultPrevented) warm(); }}
    onFocus={event => { onFocus?.(event); if (!event.defaultPrevented) warm(); }}
    onTouchStart={event => { onTouchStart?.(event); if (!event.defaultPrevented) warm(); }}
  />;
}
