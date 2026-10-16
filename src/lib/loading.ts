// Optional downloads must not compete with navigation on constrained networks.
export function allowSpeculativeLoading() {
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  return !connection?.saveData && !['slow-2g', '2g', '3g'].includes(connection?.effectiveType || '');
}

export function afterPageLoadIdle(task: () => void) {
  let idle: number | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const schedule = () => {
    if ('requestIdleCallback' in window) idle = window.requestIdleCallback(task, { timeout: 2500 });
    else timer = setTimeout(task, 200);
  };
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
  return () => {
    window.removeEventListener('load', schedule);
    if (idle !== undefined) window.cancelIdleCallback(idle);
    if (timer !== undefined) clearTimeout(timer);
  };
}
