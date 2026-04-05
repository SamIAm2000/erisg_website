#!/usr/bin/env node
/**
 * Pulls project page HTML from erisgao.com, downloads media to public/media/projects/{slug}/,
 * and writes src/data/projectPages.json for the React app.
 * Run: node scripts/sync-cargo-project-pages.mjs
 */
import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicMedia = path.join(root, 'public', 'media', 'projects');
const outJson = path.join(root, 'src', 'data', 'projectPages.json');

const SLUGS = [
  'touching-grass-in-vr',
  'when-you-stare-into-the-computer',
  'pew-a-brain-controlled-robot-shooting-game',
  'radar-horizon-tracing-in-3d',
  'pigeon-pal',
  'digital-love-letters-installation',
  'cici-an-ai-advisor-for-columbia-cs',
  'electric-meat',
  'interactive-confetti-floor',
  'a-device-for-mark-making',
  'the-poem-of-life',
  'cabbage-vessels',
];

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return get(res.headers.location).then(resolve).catch(reject);
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      })
      .on('error', reject);
  });
}

function parsePreloadedState(html) {
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
      if (depth === 0) return JSON.parse(html.slice(jsonStart, i + 1));
    }
  }
  throw new Error('Unclosed state JSON');
}

function safeFilePart(name) {
  return String(name)
    .replace(/[\/\\?*:|"<>]/g, '_')
    .replace(/\s+/g, '_')
    .slice(0, 120);
}

function freightOriginalUrl(hash, name) {
  return `https://freight.cargo.site/t/original/i/${hash}/${encodeURIComponent(name)}`;
}

async function downloadTo(dest, url) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const buf = await get(url);
  const head = buf.slice(0, 64).toString('utf8').trimStart();
  if (head.startsWith('<') || head.startsWith('{')) {
    console.warn('  skip (not binary):', url.slice(0, 80));
    return false;
  }
  fs.writeFileSync(dest, buf);
  return true;
}

function mediaItemToHtml(hash, attrs, mediaByHash, slug, relPaths) {
  const m = mediaByHash.get(hash);
  if (!m) {
    console.warn('  missing media hash', hash);
    return '<!-- missing media -->';
  }

  const gridSpan = /\bgrid-span="2"/.test(attrs) ? ' eris-grid-span-2' : '';

  if (m.is_url && m.url) {
    if (m.url_type === 'youtube' || /youtube\.com\/embed/.test(m.url)) {
      const src = m.url.replace(/"/g, '&quot;');
      return `<div class="eris-embed${gridSpan}"><iframe src="${src}" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>`;
    }
    return `<div class="eris-embed${gridSpan}"><iframe src="${m.url.replace(/"/g, '&quot;')}" title="Embed" loading="lazy"></iframe></div>`;
  }

  if (m.is_video) {
    const file = `${hash}_${safeFilePart(m.name)}`;
    const base = `{{PUBLIC_URL}}/media/projects/${slug}/${file}`;
    relPaths.push({ hash, name: m.name, file });
    return `<div class="eris-media${gridSpan}"><video controls playsinline preload="metadata" src="${base}"></video></div>`;
  }

  if (m.is_image || (m.mime_type && m.mime_type.startsWith('image/'))) {
    const file = `${hash}_${safeFilePart(m.name)}`;
    const base = `{{PUBLIC_URL}}/media/projects/${slug}/${file}`;
    relPaths.push({ hash, name: m.name, file });
    const alt = '';
    return `<div class="eris-media${gridSpan}"><img src="${base}" alt="${alt}" loading="lazy" /></div>`;
  }

  console.warn('  unknown media type', m.name, m.mime_type);
  return '';
}

function convertContent(content, mediaByHash, slug, relPaths) {
  let html = content;
  html = html.replace(/<span class="caption"><\/span>/g, '');
  html = html.replace(/<column-set[^>]*>/g, '<div class="eris-column-set">');
  html = html.replace(/<\/column-set>/g, '</div>');
  html = html.replace(/<column-unit[^>]*>/g, '<div class="eris-column-unit">');
  html = html.replace(/<\/column-unit>/g, '</div>');
  html = html.replace(/<gallery-grid[^>]*>/g, '<div class="eris-gallery-grid">');
  html = html.replace(/<\/gallery-grid>/g, '</div>');
  html = html.replace(/<gallery-columnized[^>]*>/g, '<div class="eris-gallery-grid">');
  html = html.replace(/<\/gallery-columnized>/g, '</div>');

  html = html.replace(/<media-item\b([\s\S]*?)(?:\/>|><\/media-item>)/gi, (_, attrs) => {
    const hm = attrs.match(/\bhash="([^"]+)"/i);
    if (!hm) return '';
    return mediaItemToHtml(hm[1], attrs, mediaByHash, slug, relPaths);
  });

  return html;
}

const pages = {};

for (const slug of SLUGS) {
  console.log('Project:', slug);
  const htmlBuf = await get(`https://erisgao.com/${slug}`);
  const html = htmlBuf.toString('utf8');
  const state = parsePreloadedState(html);
  const page = Object.values(state.pages.byId).find((x) => x.purl === slug);
  if (!page) {
    console.error('  no page');
    continue;
  }

  const mediaByHash = new Map();
  for (const m of page.media || []) {
    mediaByHash.set(m.hash, m);
  }

  const relPaths = [];
  const bodyHtml = convertContent(page.content || '', mediaByHash, slug, relPaths);

  const dir = path.join(publicMedia, slug);
  fs.mkdirSync(dir, { recursive: true });

  const seen = new Set();
  for (const { hash, name, file } of relPaths) {
    const key = `${hash}|${name}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const dest = path.join(dir, file);
    const url = freightOriginalUrl(hash, name);
    process.stdout.write(`  dl ${file} … `);
    const ok = await downloadTo(dest, url);
    console.log(ok ? 'ok' : 'fail');
  }

  pages[slug] = {
    title: page.title,
    bodyHtml,
  };
}

fs.mkdirSync(path.dirname(outJson), { recursive: true });
fs.writeFileSync(outJson, JSON.stringify(pages, null, 0), 'utf8');
console.log('Wrote', outJson);
