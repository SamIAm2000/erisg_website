#!/usr/bin/env node
/**
 * Fetch Cargo __PRELOADED_STATE__ from a page HTML string.
 */
export function parsePreloadedState(html) {
  const marker = 'window.__PRELOADED_STATE__=';
  const start = html.indexOf(marker);
  if (start < 0) throw new Error('No __PRELOADED_STATE__');
  let i = start + marker.length;
  let depth = 0;
  let inStr = false;
  let esc = false;
  let quote = '';
  const jsonStart = i;
  for (; i < html.length; i++) {
    const c = html[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === quote) inStr = false;
      continue;
    }
    if (c === '"' || c === "'") {
      inStr = true;
      quote = c;
      continue;
    }
    if (c === '{') depth++;
    if (c === '}') {
      depth--;
      if (depth === 0) {
        return JSON.parse(html.slice(jsonStart, i + 1));
      }
    }
  }
  throw new Error('Unclosed JSON');
}
