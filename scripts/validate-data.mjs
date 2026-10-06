#!/usr/bin/env node
/**
 * Validates data/games.json — no dependencies. Run by CI on every push/PR.
 * Usage: node scripts/validate-data.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const errors = [];
const ok = (msg) => console.log(`  ✓ ${msg}`);

let games;
try {
  games = JSON.parse(readFileSync(join(here, '..', 'data', 'games.json'), 'utf8'));
} catch (e) {
  console.error(`✗ data/games.json is not valid JSON: ${e.message}`);
  process.exit(1);
}

if (!Array.isArray(games) || games.length === 0) {
  console.error('✗ data/games.json must be a non-empty array');
  process.exit(1);
}
ok(`${games.length} games`);

const VERDICTS = new Set(['moddable', 'experimental', 'not_recommended']);
const slugs = new Set();

for (const [i, g] of games.entries()) {
  const at = `games[${i}]`;
  const str = (field, max = 120) => {
    if (typeof g[field] !== 'string' || !g[field].trim())
      errors.push(`${at}.${field} missing or empty`);
    else if (g[field].length > max)
      errors.push(`${at}.${field} longer than ${max} chars`);
  };
  str('game');
  str('route', 200);
  if (typeof g.slug !== 'string' || !/^[a-z0-9-]+$/.test(g.slug))
    errors.push(`${at}.slug must be kebab-case, got "${g.slug}"`);
  if (slugs.has(g.slug)) errors.push(`${at}.slug duplicate: ${g.slug}`);
  slugs.add(g.slug);
  if (!VERDICTS.has(g.verdict))
    errors.push(`${at}.verdict must be one of ${[...VERDICTS].join('|')}, got "${g.verdict}"`);
  if (!g.engine || typeof g.engine.name !== 'string' || !g.engine.name)
    errors.push(`${at}.engine.name missing`);
  if (
    !Array.isArray(g.reasons) ||
    g.reasons.length < 1 ||
    g.reasons.length > 3 ||
    g.reasons.some((r) => typeof r !== 'string' || !r.trim())
  )
    errors.push(`${at}.reasons must be 1–3 non-empty strings`);
  if (g.verdict === 'not_recommended' && !/anti-?cheat|online|live|multiplayer|ban|service|DRM|rico(chet)|vanguard|enforcement|unfair|prohibit|protection|unauthorized|third-party/i.test(g.reasons.join(' ')))
    errors.push(`${at} not_recommended without an anti-cheat/online reason — if unsure, classify up to experimental and say why`);
  if (g.more && !/^https:\/\/canyoumod\.com\/games\/[a-z0-9-]+$/.test(g.more))
    errors.push(`${at}.more must look like https://canyoumod.com/games/<slug>`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
ok('all slugs unique, kebab-case');
ok('all verdicts valid, not_recommended entries carry a safety reason');
ok('all entries link back to canyoumod.com');
console.log('data/games.json is valid.');
