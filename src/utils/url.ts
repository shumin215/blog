const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** base 경로를 포함한 내부 URL 반환 */
export function url(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
