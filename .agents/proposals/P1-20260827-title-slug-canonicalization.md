# Proposal P1-20260827-title-slug-canonicalization

| Field | Value |
|-------|-------|
| **proposal id** | `P1-20260827-title-slug-canonicalization` |
| **date** | 2026-08-27 |
| **stage** | PROPOSE only |
| **priority** | P1 |
| **status** | DRAFT — awaiting Reviewer (not run in this stage) |
| **production modified** | no |

---

## Target symbols

13 title-sharing slug pairs (listed below).

## Target files (by pair)

| Pair | Likely files |
|------|----------------|
| `agac` / `ağaç` | `batch-b.ts` / `batch-j.ts` |
| `kapi` / `kapı` | `batch-c.ts` / `batch-j.ts` |
| `gunes` / `güneş` | `batch-d.ts` / `batch-j.ts` |
| `yildiz` / `yıldız` | `batch-d.ts` / `batch-j.ts` |
| `bahce` / `bahçe` | `batch-d.ts` / `batch-j.ts` |
| `kopru` / `köprü` | `batch-d.ts` / `batch-j.ts` |
| `gokkusagi` / `gökkuşağı` | `batch-f.ts` / `batch-j.ts` |
| `simsek` / `şimşek` | `batch-f.ts` / `batch-j.ts` |
| `kasirga` / `kasırga` | `batch-f.ts` / `batch-j.ts` |
| `mercan` / `mercana` | `batch-m.ts` / `batch-j.ts` |
| `magara_girişi` / `mağara_girişi` | both involve `batch-j.ts` (+ counterpart) |
| `kavsak` / `kavşak` | `batch-o.ts` (`kavsak`) / `batch-j.ts` (`kavşak`) |
| `lunapark_treni` / `lunapark_tren` | **both** `batch-l.ts` |

Exact line edits confirmed at PATCH after Reviewer approval.

---

## Problem description

Thirteen display titles map to two live URL slugs each. Users and crawlers can reach two pages with the same H1. Content is usually **distinct** (not identical), except `lunapark_treni` / `lunapark_tren` which are **byte-identical** aside from slug.

This is an SEO/canonical and symbol-identity problem, **not** a 1415-wide content rewrite.

---

## Canonical policy (dataset)

1. Prefer **ASCII slug** as canonical URL (matches majority of catalog; safer routing).
2. Prefer **richer psych/jung/variations** body when choosing which record to keep as content base.
3. Retire non-canonical slug via remove + optional redirect (redirect implementation is app-level; data proposal = remove or stop exporting retired slug).
4. Update any `relatedSlugs` that point at the retired slug → canonical.
5. Do **not** invent new article prose in this proposal.

---

## Implementation order

### Phase A — first apply (exact duplicate)

**`lunapark_treni` / `lunapark_tren`**

| | |
|--|--|
| title | Lunapark Treni |
| evidence | short/psych/jung/positiveAssociations **identical**; major-fields jaccard **1.000**; both in `batch-l.ts` tuples |
| inbound relatedSlugs | none found |
| **canonical** | `lunapark_treni` (clearer morphology: *-treni*) |
| **retire** | `lunapark_tren` |
| **patch** | Delete `["lunapark_tren","Lunapark Treni"]` from `batch-l.ts` only |
| **redirect** | Optional: `/ruyalar/semboller/lunapark_tren` → `lunapark_treni` |
| **risk** | Very low — zero unique content loss |
| **rationale** | Pure duplicate identity; smallest win; validates canonicalization workflow |

### Phase B — ASCII vs diacritic (11 pairs)

For each pair below: keep ASCII as URL canonical; keep ASCII body as default content base (ASCII scores higher on psych+jung+variations in every measured diacritic pair except where noted). Diacritic page removed or redirected. **No full rewrite** — if diacritic has a unique useful phrase, PATCH may copy that single phrase into canonical (optional micro-merge, Reviewer-gated).

---

## Pair-by-pair registry

### 1. Ağaç — `agac` / `ağaç`

| | `agac` | `ağaç` |
|--|--------|--------|
| title | Ağaç | Ağaç |
| files | `batch-b.ts` | `batch-j.ts` |
| psych/jung words | 25 / 24 | 10 / 14 |
| variations | 6 | 4 |
| short jaccard | 0.188 | |
| inbound related | `cicek` → `agac` | none |
| **canonical** | **`agac`** | retire `ağaç` |
| **rationale** | Richer psych/jung; already referenced as `agac` |
| **related/redirect impact** | Keep inbound to `agac`; redirect `ağaç` → `agac` |

### 2. Kapı — `kapi` / `kapı`

| | `kapi` | `kapı` |
|--|--------|--------|
| files | `batch-c.ts` | `batch-j.ts` |
| psych/jung | 30 / 14 | 13 / 13 |
| variations | 6 | 4 |
| inbound | `ev`,`ayna`,`merdiven`,`telefon` → `kapi` | none |
| **canonical** | **`kapi`** | retire `kapı` |
| **rationale** | Richer; 4 inbound refs already use ASCII |

### 3. Güneş — `gunes` / `güneş`

| | `gunes` | `güneş` |
|--|---------|---------|
| files | `batch-d.ts` | `batch-j.ts` |
| psych/jung | 35 / 33 | 12 / 15 |
| **canonical** | **`gunes`** | retire `güneş` |
| **rationale** | Materially richer ASCII body |

### 4. Yıldız — `yildiz` / `yıldız`

| | `yildiz` | `yıldız` |
|--|----------|----------|
| files | `batch-d.ts` | `batch-j.ts` |
| psych/jung | 35 / 33 | 12 / 14 |
| **canonical** | **`yildiz`** | retire `yıldız` |

### 5. Bahçe — `bahce` / `bahçe`

| | `bahce` | `bahçe` |
|--|---------|---------|
| files | `batch-d.ts` | `batch-j.ts` |
| psych/jung | 35 / 33 | 12 / 14 |
| **canonical** | **`bahce`** | retire `bahçe` |

### 6. Köprü — `kopru` / `köprü`

| | `kopru` | `köprü` |
|--|---------|---------|
| files | `batch-d.ts` | `batch-j.ts` |
| psych/jung | 35 / 33 | 14 / 12 |
| **canonical** | **`kopru`** | retire `köprü` |

### 7. Gökkuşağı — `gokkusagi` / `gökkuşağı`

| | `gokkusagi` | `gökkuşağı` |
|--|-------------|-------------|
| files | `batch-f.ts` | `batch-j.ts` |
| psych/jung | 32 / 23 | 14 / 16 |
| **canonical** | **`gokkusagi`** | retire `gökkuşağı` |

### 8. Şimşek — `simsek` / `şimşek`

| | `simsek` | `şimşek` |
|--|----------|----------|
| files | `batch-f.ts` | `batch-j.ts` |
| psych/jung | 33 / 23 | 11 / 16 |
| **canonical** | **`simsek`** | retire `şimşek` |

### 9. Kasırga — `kasirga` / `kasırga`

| | `kasirga` | `kasırga` |
|--|-----------|-----------|
| files | `batch-f.ts` | `batch-j.ts` |
| psych/jung | 34 / 23 | 13 / 14 |
| **canonical** | **`kasirga`** | retire `kasırga` |

### 10. Mercan — `mercan` / `mercana`

| | `mercan` | `mercana` |
|--|----------|-----------|
| files | `batch-m.ts` (template tuple) | `batch-j.ts` (authored) |
| psych/jung | 13 / 13 | 13 / 15 |
| richness score | 48 | **63** |
| **canonical slug** | **`mercan`** (correct orthography) | retire `mercana` (typo-like) |
| **content base** | Prefer merging **useful unique lines from `mercana`** into `mercan` if Reviewer agrees — `mercana` is slightly richer; slug `mercana` is wrong |
| **rationale** | URL should be `mercan`; do not keep typo slug live |
| **risk** | Medium — content merge needed so retiring richer `mercana` does not lose value |

### 11. Mağara Girişi — `magara_girişi` / `mağara_girişi`

| | `magara_girişi` | `mağara_girişi` |
|--|----------------|----------------|
| psych/jung | 17 / 15 | 14 / 14 |
| richness | **68** | 51 |
| **canonical** | Prefer normalize to fully ASCII **`magara_girisi`** if PATCH introduces rename; else keep less-diacritic `magara_girişi` as interim canonical | retire `mağara_girişi` |
| **rationale** | Avoid two near-identical Unicode URLs; prefer ASCII path |
| **note** | Creating `magara_girisi` is a rename (extra redirect). Minimal patch = retire `mağara_girişi` only, keep `magara_girişi`. Full ASCII rename = optional follow-up. |

**Proposed minimal decision:** canonical = `magara_girişi`; retire = `mağara_girişi`. Optional follow-up proposal for `magara_girisi`.

### 12. Kavşak — `kavsak` / `kavşak`

| | `kavsak` | `kavşak` |
|--|----------|----------|
| files | `batch-o.ts` (template) | `batch-j.ts` |
| psych/jung | 22 / 17 | 15 / 13 |
| **canonical** | **`kavsak`** | retire `kavşak` |
| **rationale** | ASCII; slightly richer psych/jung |
| **caveat** | `kavsak` currently comes from batch-o `rich()` template — content quality is systemic-weak. Canonicalization fixes URL identity only; content improvement is **not** claimed here (may later enter a pilot). |

### 13. Lunapark Treni — `lunapark_treni` / `lunapark_tren`

See Phase A. **First to apply.**

---

## Proposed changes (summary)

For each pair after Reviewer approval:

1. Delete or stop exporting the **retire** slug’s record.
2. Ensure **canonical** record remains.
3. Rewrite any `relatedSlugs` entries that pointed at retire → canonical (currently: mainly relevant if any point at diacritic forms; inbound today mostly already ASCII).
4. Optional Next.js redirect map for retired → canonical (app change; separate Code Agent task if approved).
5. For `mercan`/`mercana`: content micro-merge before deleting `mercana`.

**Not proposed:** rewriting all 13 articles; treating diacritic pages as “bad content” solely due to length.

---

## Source requirements

None for structural canonicalization. Micro-merge for `mercan` must not invent citations.

---

## Expected quality improvement

- One URL per title for 13 collisions.
- Catalog unique-title pressure reduced (1661 → closer to unique).
- Exact duplicate lunapark page removed with zero content loss.
- Inbound relations to `agac` / `kapi` remain stable.

---

## Risk assessment

| Risk | Level | Mitigation |
|------|-------|------------|
| Soft-404 for bookmarked diacritic URLs | Medium | Add redirects in same release if possible |
| Losing unique diacritic phrasing | Low–Med | Optional phrase merge under Reviewer |
| `mercana` richer than `mercan` | Medium | Explicit micro-merge step |
| `kavsak` remains template-weak | Accepted | Identity fix ≠ content fix; document |
| Scope creep into full rewrites | High if unmanaged | This proposal forbids article rewrites |

---

## Out of scope

- P0 slug collisions inside batch-o/as
- P2 dangling related remaps
- Template pilot content experiments
- Mass rewrite of batch-j diacritic bodies

---

## Reviewer gate

Requires Reviewer `APPROVED` (or phased APPROVED for Phase A only) before patch.
