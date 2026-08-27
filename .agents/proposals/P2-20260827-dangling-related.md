# Proposal P2-20260827-dangling-related

| Field | Value |
|-------|-------|
| **proposal id** | `P2-20260827-dangling-related` |
| **date** | 2026-08-27 |
| **stage** | PROPOSE only |
| **priority** | P2 |
| **status** | DRAFT — awaiting Reviewer (not run in this stage) |
| **production modified** | no |
| **depends_on** | `P0-20260827-slug-collisions` should land first or in the same release train (AS related lists become live after P0) |

---

## Target symbols

- `mutfak`
- `okulda_olmak`
- `okula_gec_kalmak` (batch-as copy)
- `sinava_gec_kalmak` (batch-as copy)
- `sinifta_tek_basina_kalmak`

## Target files

- `data/symbols/batch-g.ts` — `mutfak`
- `data/symbols/batch-as.ts` — `okulda_olmak`, `okula_gec_kalmak`, `sinava_gec_kalmak`, `sinifta_tek_basina_kalmak`

---

## Problem description

Manual `relatedSlugs` include targets that do not exist in the dataset.
`getRelatedDreamSymbols` maps with `getDreamSymbolBySlug` and **filters undefined**, then fills from the auto-relation engine. UI often still shows four related cards, but:

1. Manual editorial intent is lost / wrong.
2. Auto-fill may promote weakly related symbols into slots meant for close neighbors.
3. After P0 keep-AS, `okula_gec_kalmak` / `sinava_gec_kalmak` live pages will show these broken manual lists (today O live copies have `relatedSlugs: []`).

This is **relation integrity**, not article rewrite.

---

## Evidence (current values)

| slug | current `relatedSlugs` | dangling | valid | notes |
|------|------------------------|----------|-------|-------|
| `mutfak` | `yemek`, `Yemek` | both | none | case-duplicate of missing slug; no `yemek` symbol |
| `okulda_olmak` | `okuldan_mezun_olmak`, `sinavda_basarisiz_olmak` | both | none | near-neighbors exist under other slugs |
| `okula_gec_kalmak` (O live) | `[]` | — | — | template |
| `okula_gec_kalmak` (AS) | `okulda_olmak`, `sinifta_sinava_girmek` | `sinifta_sinava_girmek` | `okulda_olmak` | becomes live after P0 |
| `sinava_gec_kalmak` (O live) | `[]` | — | — | template |
| `sinava_gec_kalmak` (AS) | `sinavda_basarisiz_olmak`, `sinav_sorusunu_bilememek` | both | none | becomes live after P0 |
| `sinifta_tek_basina_kalmak` | `sinifta_sinava_girmek`, `okulda_olmak` | `sinifta_sinava_girmek` | `okulda_olmak` | |

### Candidate existing slugs (verified present)

| Missing | Reasonable remaps (exist today) |
|---------|----------------------------------|
| `yemek` / `Yemek` | `yemek_yapmak`, `mutfakta_yemek_yapmak`, `yemek_yemek` |
| `okuldan_mezun_olmak` | `mezun_olmak`, `okuldan_atilmak` |
| `sinavda_basarisiz_olmak` | `sinavdan_kalmak`, `basarisiz_olmak` |
| `sinifta_sinava_girmek` | `sinava_girmek`, `sinifta_olmak`, `sinava_hazirlanmak` |
| `sinav_sorusunu_bilememek` | `sinav_sonucunu_gormek`, `sinavdan_kalmak` |

---

## Proposed changes (remap only — no article text)

### 1. `mutfak`

| | |
|--|--|
| **field** | `relatedSlugs` |
| **current_value** | `["yemek", "Yemek"]` |
| **proposed_value** | `["yemek_yapmak", "mutfakta_yemek_yapmak"]` |
| **rationale** | Both targets missing; kitchen↔cooking is the editorial intent |
| **confidence** | high |
| **source_requirement** | none |
| **file** | `batch-g.ts` |

### 2. `okulda_olmak`

| | |
|--|--|
| **field** | `relatedSlugs` |
| **current_value** | `["okuldan_mezun_olmak", "sinavda_basarisiz_olmak"]` |
| **proposed_value** | `["mezun_olmak", "sinavdan_kalmak"]` |
| **rationale** | Closest existing graduation / exam-failure neighbors; avoid inventing new symbol pages |
| **confidence** | medium-high |
| **source_requirement** | none |
| **file** | `batch-as.ts` |
| **alt** | `["mezun_olmak", "basarisiz_olmak"]` if Reviewer prefers broader failure theme |

### 3. `okula_gec_kalmak` (AS)

| | |
|--|--|
| **field** | `relatedSlugs` |
| **current_value** | `["okulda_olmak", "sinifta_sinava_girmek"]` |
| **proposed_value** | `["okulda_olmak", "sinava_girmek"]` |
| **rationale** | Keep valid `okulda_olmak`; replace missing classroom-exam slug with existing `sinava_girmek` |
| **confidence** | high |
| **source_requirement** | none |
| **file** | `batch-as.ts` |
| **alt** | `["okulda_olmak", "sinava_hazirlanmak"]` |

### 4. `sinava_gec_kalmak` (AS)

| | |
|--|--|
| **field** | `relatedSlugs` |
| **current_value** | `["sinavda_basarisiz_olmak", "sinav_sorusunu_bilememek"]` |
| **proposed_value** | `["sinavdan_kalmak", "sinav_sonucunu_gormek"]` |
| **rationale** | Preserve exam-anxiety neighborhood using real slugs |
| **confidence** | medium-high |
| **source_requirement** | none |
| **file** | `batch-as.ts` |
| **alt** | `["sinavdan_kalmak", "basarisiz_olmak"]` |

### 5. `sinifta_tek_basina_kalmak`

| | |
|--|--|
| **field** | `relatedSlugs` |
| **current_value** | `["sinifta_sinava_girmek", "okulda_olmak"]` |
| **proposed_value** | `["sinifta_olmak", "okulda_olmak"]` |
| **rationale** | Keep valid school peer; replace missing with closest classroom presence slug |
| **confidence** | high |
| **source_requirement** | none |
| **file** | `batch-as.ts` |
| **alt** | `["sinava_girmek", "okulda_olmak"]` |

---

## Alternative (even smaller)

Set any of the above `relatedSlugs` to `[]` and rely entirely on auto-relations.
**Preferred:** explicit remaps above — preserves editorial clustering for school/exam/kitchen themes.

---

## Source requirements

None. Relation edits only.

---

## Expected quality improvement

- Manual related chips resolve to real pages.
- After P0, late-to-school/exam pages no longer waste relation slots on dead slugs.
- Auto-engine still supplements up to limit=4.

---

## Risk assessment

| Risk | Level | Mitigation |
|------|-------|------------|
| Wrong neighbor semantically | Low–Med | Alts listed; Reviewer picks |
| Creating new missing symbols instead of remapping | Rejected | Out of scope |
| Patching before P0 | Med | Order: P0 then P2, or same PR with P0 first in diff |
| Clearing all manual relations | Low UX | Prefer remap |

---

## Out of scope

- Creating new symbol pages for missing slugs
- Changing auto-relation algorithm
- Article body rewrites
- P1 title/slug work

---

## Reviewer gate

Requires `APPROVED` before Code Agent. Reviewer should confirm remap choices vs empty-array alternative.
