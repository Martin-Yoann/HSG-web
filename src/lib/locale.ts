export type Locale = 'zh' | 'en';

export function publicPath(pathname: string) {
  const value = pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
  return value === '/' ? '/' : value.replace(/\/$/, '') + '/';
}

export function logicalPath(pathname: string) {
  return publicPath(pathname).replace(/^\/en(?=\/|$)/, '') || '/';
}
