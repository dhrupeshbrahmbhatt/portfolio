// Mirrors basePath in next.config.ts. Plain <a href> and <img src> do not get the
// prefix automatically, so public assets go through asset().
export const BASE_PATH = '/portfolio';
export const SITE_URL = 'https://dhrupeshbrahmbhatt.github.io/portfolio';

export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
