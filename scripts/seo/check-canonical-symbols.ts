import assert from "node:assert/strict";
import redirects from "../../lib/symbols/redirects.json";
import { getAllPublishedSymbols, getAllPublishedSymbolSlugs, getPublishedSymbolBySlug, getRelatedPublishedSymbols } from "../../lib/symbols/repository";
import sitemap from "../../app/sitemap";
const symbols = getAllPublishedSymbols();
const slugs = getAllPublishedSymbolSlugs();
const urls = new Set(sitemap().map(item => item.url));
assert.equal(new Set(slugs).size, slugs.length);
for (const [alias, target] of Object.entries(redirects)) {
  assert(!Object.hasOwn(redirects, target), `Redirect chain: ${alias}`);
  assert(!slugs.includes(alias), `Alias in published index: ${alias}`);
  assert(!urls.has(`https://www.in-us.app/ruyalar/semboller/${alias}`));
  assert.equal(getPublishedSymbolBySlug(alias)?.slug, target);
  assert(slugs.includes(target), `Missing destination: ${target}`);
}
for (const symbol of symbols) {
  assert(slugs.includes(symbol.slug));
  assert(urls.has(`https://www.in-us.app/ruyalar/semboller/${symbol.slug}`));
  const related = getRelatedPublishedSymbols(symbol);
  assert.equal(new Set(related.map(item => item.slug)).size, related.length);
  for (const item of related) {
    assert(!Object.hasOwn(redirects, item.slug));
    assert.notEqual(item.slug, symbol.slug);
  }
}
assert.equal(getPublishedSymbolBySlug("../test"), null);
console.log(`${symbols.length} canonical symbols, ${Object.keys(redirects).length} redirects: checks passed`);
