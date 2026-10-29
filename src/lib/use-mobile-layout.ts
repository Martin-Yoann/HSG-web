'use client';

import { useSyncExternalStore } from 'react';

let query: MediaQueryList | undefined;
const listeners = new Set<() => void>();
const getQuery = () => query ??= window.matchMedia('(max-width: 760px)');
const notify = () => listeners.forEach(listener => listener());
function subscribe(listener: () => void) {
  if (!listeners.size) getQuery().addEventListener('change', notify);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (!listeners.size) getQuery().removeEventListener('change', notify);
  };
}
const snapshot = () => getQuery().matches;
const serverSnapshot = () => false;

export function useMobileLayout() {
  return useSyncExternalStore(subscribe, snapshot, serverSnapshot);
}
