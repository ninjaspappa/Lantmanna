#!/usr/bin/env node
/**
 * Agent 0 — SEO meta scraper for lantmanna.nu
 * Fetches 13 pages, extracts SEO metadata, writes JSON to docs/existing-meta.json.
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const URLS = [
  'https://lantmanna.nu/',
  'https://lantmanna.nu/om-oss/',
  'https://lantmanna.nu/arbetsklader/',
  'https://lantmanna.nu/biodling/',
  'https://lantmanna.nu/fiske/',
  'https://lantmanna.nu/foder/',
  'https://lantmanna.nu/fagelmat/',
  'https://lantmanna.nu/farg-kemtekniskt/',
  'https://lantmanna.nu/gasol-industrigas/',
  'https://lantmanna.nu/gardsrundan/',
  'https://lantmanna.nu/sallskapsdjur/',
  'https://lantmanna.nu/tradgard/',
  'https://lantmanna.nu/va/',
];

const OUT_FILE = path.resolve(__dirname, '..', 'docs', 'existing-meta.json');

function urlToKey(url) {
  const u = new URL(url);
  let p = u.pathname;
  if (p === '/' || p === '') return '/';
  // strip trailing slash
  if (p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

function extractMeta($) {
  const pick = (sel, attr = 'content') => {
    const el = $(sel).first();
    if (!el || el.length === 0) return null;
    const v = el.attr(attr);
    return v ? v.trim() : null;
  };
  const title = ($('title').first().text() || '').trim() || null;
  return {
    title,
    description: pick('meta[name="description"]'),
    ogTitle: pick('meta[property="og:title"]'),
    ogDescription: pick('meta[property="og:description"]'),
    ogImage: pick('meta[property="og:image"]'),
    keywords: pick('meta[name="keywords"]'),
  };
}

async function fetchOne(url) {
  const key = urlToKey(url);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; LantmannaSEOBot/1.0; +https://lantmanna.nu)',
        Accept: 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
    });
    if (!res.ok) {
      return [key, { url, error: `HTTP ${res.status}` }];
    }
    const html = await res.text();
    const $ = cheerio.load(html);
    const meta = extractMeta($);
    return [key, { url, ...meta }];
  } catch (err) {
    return [key, { url, error: err.message || String(err) }];
  }
}

async function main() {
  console.log(`Scraping ${URLS.length} URLs...`);
  const results = await Promise.all(URLS.map(fetchOne));

  const output = {};
  for (const [key, val] of results) output[key] = val;

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2) + '\n', 'utf8');

  const entries = Object.entries(output);
  const withTitle = entries.filter(([, v]) => v.title);
  const errors = entries.filter(([, v]) => v.error);

  console.log(`\nWrote ${OUT_FILE}`);
  console.log(`Total entries: ${entries.length}`);
  console.log(`With title:    ${withTitle.length}`);
  console.log(`Errors:        ${errors.length}`);
  if (errors.length) {
    console.log('\nFailed:');
    for (const [k, v] of errors) console.log(`  ${k} -> ${v.error}`);
  }

  if (entries.length !== 13) {
    console.error(`\nWARNING: expected 13 entries, got ${entries.length}`);
    process.exitCode = 1;
  }
  const missingTitle = entries.filter(([, v]) => !v.title && !v.error);
  if (missingTitle.length) {
    console.error(`\nWARNING: entries missing title:`);
    for (const [k] of missingTitle) console.error(`  ${k}`);
  }
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
