# Stage 5 PATCH — Summary

**Status:** COMPLETE (approved scope only)
**Date:** 2026-08-27
**Test / re-audit / release:** not run

## Changed production files

1. `data/symbols/batch-o.ts` — P0
2. `data/symbols/batch-as.ts` — P2
3. `data/symbols/batch-g.ts` — P2 (`mutfak`)

## P0 removals (batch-o only)

- `sinava_gec_kalmak` template tuple removed
- `okula_gec_kalmak` template tuple removed
→ lookup now returns batch-as specific records (verified)

## P2 relation changes

- `mutfak` → `yemek_yapmak`, `mutfakta_yemek_yapmak`
- `okulda_olmak` → `mezun_olmak`, `sinavdan_kalmak`
- `okula_gec_kalmak` → `okulda_olmak`, `sinava_girmek`
- `sinava_gec_kalmak` → `sinavdan_kalmak`, `sinav_sonucunu_gormek`
- `sinifta_tek_basina_kalmak` → `sinifta_olmak`, `okulda_olmak`

## Unexpected changes

None within patch scope. Dataset count 1676→1674 (expected: 2 duplicate entries removed).

## Next gated stages

TEST → RE-AUDIT → RELEASE (not started)
