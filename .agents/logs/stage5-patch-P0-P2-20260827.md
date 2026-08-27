# Stage 5 PATCH log — P0 + P2 only

- workflow id: stage5-patch-P0-P2-20260827
- date: 2026-08-27T14:08:00.000Z
- proposals applied:
  - `P0-20260827-slug-collisions` (APPROVED)
  - `P2-20260827-dangling-related` (APPROVED)
- proposals NOT applied:
  - P1 full canonicalization
  - PILOT content / measurement writes to production
  - redirects, source monoculture, commonVariations bulk fill

## Backups

- `.agents/logs/backups/batch-o.before-P0-P2-20260827.ts`
- `.agents/logs/backups/batch-as.before-P0-P2-20260827.ts`
- `.agents/logs/backups/batch-g.before-P0-P2-20260827.ts`

## Production files changed

1. `data/symbols/batch-o.ts`
2. `data/symbols/batch-as.ts`
3. `data/symbols/batch-g.ts`

## P0 — removed from batch-o `symbols` array

| Removed tuple | Effect |
|---------------|--------|
| `["sinava_gec_kalmak", "Sınava Geç Kalmak"]` | Generic `rich()` duplicate removed |
| `["okula_gec_kalmak", "Okula Geç Kalmak"]` | Generic `rich()` duplicate removed |

batch-as authored records **kept**. No other batch-o content changed. AS bodies not rewritten.

### Post-P0 runtime check

- `dreamSymbols.length` = **1674**
- unique slugs = **1674**
- `getDreamSymbolBySlug("okula_gec_kalmak")` → AS-specific (not atmosphere template)
- `getDreamSymbolBySlug("sinava_gec_kalmak")` → AS-specific
- neither slug remains in `batchO`

## P2 — relatedSlugs remaps

| slug | file | before | after |
|------|------|--------|-------|
| `mutfak` | `batch-g.ts` | `["yemek","Yemek"]` (working tree; HEAD was `["ev","yemek"]`) | `["yemek_yapmak","mutfakta_yemek_yapmak"]` |
| `okulda_olmak` | `batch-as.ts` | `["okuldan_mezun_olmak","sinavda_basarisiz_olmak"]` | `["mezun_olmak","sinavdan_kalmak"]` |
| `okula_gec_kalmak` | `batch-as.ts` | `["okulda_olmak","sinifta_sinava_girmek"]` | `["okulda_olmak","sinava_girmek"]` |
| `sinava_gec_kalmak` | `batch-as.ts` | `["sinavda_basarisiz_olmak","sinav_sorusunu_bilememek"]` | `["sinavdan_kalmak","sinav_sonucunu_gormek"]` |
| `sinifta_tek_basina_kalmak` | `batch-as.ts` | `["sinifta_sinava_girmek","okulda_olmak"]` | `["sinifta_olmak","okulda_olmak"]` |

All after-targets verified present in dataset; `relatedAllExist=true` at runtime.

## Explicitly unchanged

- No P1 slug retires / redirects
- No pilot content rewrites
- No batch-o `rich()` factory rewrite
- No other symbols’ bodies

## Stop gate

PATCH complete for approved scope. **STOP** — no TEST / RE-AUDIT / RELEASE in this step.
