# INUS PRIORITIZATION REPORT — Stage 2 only

**Generated:** 2026-08-27T13:55:00.000Z
**Orchestrator:** Stage 2 — PRIORITIZATION
**Inputs:** `.agents/reports/AUDIT-SUMMARY.md`, `structural-audit.json`, `symbol-audit.json` (v4 reference)
**Production files modified:** none

---

## Gate

- Stage 1 AUDIT: complete
- Stage 2 PRIORITIZATION: **this document**
- Stage 3+ (PROPOSE / REVIEW / PATCH / TEST / RE-AUDIT / RELEASE): **not started — STOP after this report**

---

## Classification rules applied

| Class | Meaning | Handling |
|-------|---------|----------|
| **Symbol-specific** | Affects one slug or a small closed set | Small reversible patch / targeted proposal |
| **Dataset-wide / systemic** | Shared template, factory, or schema pattern across hundreds | Root-cause → 10–20 pilot → measure → expand |
| **Auditor inflation** | v4 Jaccard/P1 labels (~1415) | **Not** treated as 1415 independent rewrite tasks |

**Rejected as automatic content defects:** high template similarity alone, short Jungian/psychology word counts alone, missing `commonVariations` alone, shared 2-source fingerprint alone.

---

## Priority order (execution queue for later stages)

1. **P0 — Exact slug collisions** (production lookup / static params)
2. **P1 — Title/slug canonicalization** (SEO + duplicate pages)
3. **P2 — Dangling `relatedSlugs`** (broken manual relations)
4. **Systemic P1 — Template cluster pilot** (10–20 symbols only; not full rewrite)

Deferred (dataset-wide, after pilot proves pattern): `commonVariations` gaps, source monoculture, empty batch-q/s imports, cultural field length metrics.

---

## WORKSTREAM 1 — P0 slug collisions

### Root cause

`dreamSymbolEntries` concatenates batches. Both `batch-o.ts` and `batch-as.ts` export the same slug.
`getDreamSymbolBySlug` uses `Array.find` → **first** match wins.
`generateStaticParams` maps **every** entry → duplicate `{ slug }` params for the same URL.

### Production lookup behavior (verified)

| Slug | Index (first / live) | Index (hidden) | Live content character |
|------|---------------------:|---------------:|------------------------|
| `sinava_gec_kalmak` | **607** (batch-o) | 1579 (batch-as) | Generic template (“rüyanın atmosferi, yaşanan duygu…”) |
| `okula_gec_kalmak` | **610** (batch-o) | 1578 (batch-as) | Generic template (same pattern) |

Content Jaccard (first vs second): ~0.08 / ~0.12 — **not** near-duplicates; AS copies are meaningfully more specific.

| Slug | Keep | Discard / merge-from | Why |
|------|------|----------------------|-----|
| `sinava_gec_kalmak` | **batch-as** (idx 1579) | batch-o (idx 607) | AS names evaluation anxiety, preparedness, missed opportunity; Jung ties ego/evaluation; has variations + intended relateds. O is boilerplate. |
| `okula_gec_kalmak` | **batch-as** (idx 1578) | batch-o (idx 610) | AS names time pressure, unreadiness, expectations; Jung more concrete; related includes valid `okulda_olmak`. O is boilerplate. |

**Note:** Keeping AS surfaces its dangling related targets (Workstream 3). Live O copies currently hide those dangling refs for `sinava_*` (empty related) and partially hide for `okula_*`.

### Items

| # | file | slug | field | severity | problem | evidence | recommended_action |
|---|------|------|-------|----------|---------|----------|-------------------|
| 1.1 | `data/symbols/batch-o.ts` + `batch-as.ts` | `sinava_gec_kalmak` | `slug` | **P0** | Duplicate slug; production serves generic O record | indices 607 vs 1579; lookupReturnsFirst=true; jaccard≈0.08; O short starts with atmosphere boilerplate; AS starts with evaluation anxiety | Keep AS record; remove O duplicate; add unique-slug invariant test |
| 1.2 | `data/symbols/batch-o.ts` + `batch-as.ts` | `okula_gec_kalmak` | `slug` | **P0** | Duplicate slug; production serves generic O record | indices 610 vs 1578; lookupReturnsFirst=true; jaccard≈0.12 | Keep AS record; remove O duplicate; unique-slug test |

**Batch size:** 2 symbols / 2 files. Suitable as first PATCH after a tiny structural proposal (no content rewrite required beyond choosing the survivor).

---

## WORKSTREAM 2 — Title/slug canonicalization

### Root cause

Same display `title` published under two URL slugs (mostly ASCII vs Turkish-diacritic). Content is usually **distinct** (jaccard 0.11–0.25) except `lunapark_treni` / `lunapark_tren` (jaccard **1.0**). Users and search engines see two pages with the same H1.

### Canonical policy (recommended for later PATCH)

1. Prefer **ASCII slug** as canonical URL (consistent with majority of dataset).
2. Prefer the **richer / more specific** content body when merging.
3. Non-canonical slug → redirect or remove (implementation deferred to PROPOSE/PATCH).
4. Exact near-dup (`lunapark_*`) → single survivor only.

### Items (symbol-specific P1)

| # | slugs | title | severity | evidence | keep (suggested) | retire (suggested) | recommended_action |
|---|-------|-------|----------|----------|------------------|--------------------|-------------------|
| 2.1 | `agac` / `ağaç` | Ağaç | P1 | jaccard≈0.15; ASCII longer psych/jung | `agac` | `ağaç` | Canonical ASCII; merge useful bits from diacritic if any; redirect/remove |
| 2.2 | `kapi` / `kapı` | Kapı | P1 | jaccard≈0.15 | `kapi` | `kapı` | same |
| 2.3 | `gunes` / `güneş` | Güneş | P1 | jaccard≈0.14; ASCII richer | `gunes` | `güneş` | same |
| 2.4 | `yildiz` / `yıldız` | Yıldız | P1 | jaccard≈0.11 | `yildiz` | `yıldız` | same |
| 2.5 | `bahce` / `bahçe` | Bahçe | P1 | jaccard≈0.14 | `bahce` | `bahçe` | same |
| 2.6 | `kopru` / `köprü` | Köprü | P1 | jaccard≈0.15 | `kopru` | `köprü` | same |
| 2.7 | `gokkusagi` / `gökkuşağı` | Gökkuşağı | P1 | jaccard≈0.12 | `gokkusagi` | `gökkuşağı` | same |
| 2.8 | `simsek` / `şimşek` | Şimşek | P1 | jaccard≈0.16 | `simsek` | `şimşek` | same |
| 2.9 | `kasirga` / `kasırga` | Kasırga | P1 | jaccard≈0.18 | `kasirga` | `kasırga` | same |
| 2.10 | `magara_girişi` / `mağara_girişi` | Mağara Girişi | P1 | jaccard≈0.25; mixed diacritics in both | `magara_girisi` policy TBD — prefer fully ASCII `magara_girisi` if created, else keep `magara_girişi` as less-diacritic | `mağara_girişi` | Normalize to ASCII slug; redirect |
| 2.11 | `kavsak` / `kavşak` | Kavşak | P1 | jaccard≈0.18 | `kavsak` | `kavşak` | same |
| 2.12 | `mercan` / `mercana` | Mercan | P1 | not diacritic; typo/variant; jaccard≈0.24 | `mercan` | `mercana` | Keep clearer slug `mercan`; merge content |
| 2.13 | `lunapark_treni` / `lunapark_tren` | Lunapark Treni | P1 | **jaccard=1.0**; both in `batch-l.ts` | `lunapark_treni` | `lunapark_tren` | Delete exact duplicate; no content rewrite |

**Order inside workstream:** 2.13 first (trivial exact dup) → diacritic pairs → `mercana`/`mercan`.

---

## WORKSTREAM 3 — Dangling relatedSlugs

### Root cause

Manual `relatedSlugs` point at slugs that were never created, were renamed, or exist only as near-neighbors. `getRelatedDreamSymbols` silently drops missing targets and may fill from auto-relations — so UI often “works,” but manual graph is wrong and wastes relation slots.

### Important interaction with P0

Dangling lists on `okula_gec_kalmak` / `sinava_gec_kalmak` live on the **hidden AS copies**. After Workstream 1 keeps AS, dangling becomes visible on the live page. Fix relations in the same structural batch or immediately after.

### Items (symbol-specific P2)

| # | file | slug | field | severity | problem | evidence | recommended_action |
|---|------|------|-------|----------|---------|----------|-------------------|
| 3.1 | symbol data for `mutfak` | `mutfak` | `relatedSlugs` | **P2** | Both targets missing; case-dup | dangling=`yemek`,`Yemek`; no slug `yemek` exists | Replace with real neighbors e.g. `yemek_yapmak`, `mutfakta_yemek_yapmak`, or clear and rely on auto-relations |
| 3.2 | `okulda_olmak` | `okulda_olmak` | `relatedSlugs` | **P2** | Both targets missing | dangling=`okuldan_mezun_olmak`,`sinavda_basarisiz_olmak`; close exist: `mezun_olmak`, `sinavdan_kalmak`, `basarisiz_olmak` | Remap to existing slugs or clear |
| 3.3 | `okula_gec_kalmak` (AS copy) | `okula_gec_kalmak` | `relatedSlugs` | **P2** | One dangling; one valid | related=`okulda_olmak`(ok), `sinifta_sinava_girmek`(missing); candidates: `sinava_girmek`, `sinava_hazirlanmak` | After P0 keep-AS: fix or drop dangling |
| 3.4 | `sinava_gec_kalmak` (AS copy) | `sinava_gec_kalmak` | `relatedSlugs` | **P2** | Both dangling | dangling=`sinavda_basarisiz_olmak`,`sinav_sorusunu_bilememek`; candidates: `sinavdan_kalmak`, `basarisiz_olmak`, `sinav_sonucunu_gormek` | Remap or clear after P0 |
| 3.5 | `sinifta_tek_basina_kalmak` | `sinifta_tek_basina_kalmak` | `relatedSlugs` | **P2** | One dangling; one valid | related=`sinifta_sinava_girmek`(missing), `okulda_olmak`(ok) | Remap to `sinava_girmek` / `sinifta_olmak` or clear |

**Batch size:** 5 symbols. Structural/data-only; no article rewrite.

---

## WORKSTREAM 4 — Template cluster PILOT BATCH (systemic)

### Root cause (systemic, not 1415 bugs)

Largest name-stripped template cluster: **97 symbols** sharing one boilerplate skeleton (short/psych/jung/associations). Themes include vertical transit (asansör/merdiven), thresholds (kapı/anahtar), house/space, mirror, path/bridge/tunnel, communication, travel, and also the generic O copies of the P0 exam/school slugs.

v4 marked **1415** symbols P1 largely via Jaccard ≥0.90 on shared stopword-heavy tokens. That is **dataset-wide template leakage**, not proof each symbol needs an independent rewrite.

### Why a pilot (not full rewrite)

Orchestrator batch control: identify root cause → sample 10–20 → propose/review/patch → measure → expand.
Pilot must prove that symbol-specific rewrite **breaks** the shared template without inventing fortune-telling or fake citations.

### Why these symbols

Selected **16** symbols from the **97-member top cluster**, spanning distinct experiential subthemes so one successful rewrite pattern can generalize:

| Subtheme | Pilot slugs | Representativeness |
|----------|-------------|--------------------|
| Elevator / vertical | `asansorde_kalmak`, `asansorle_yukselmek` | Core of largest cluster sample |
| Stairs | `merdiven_cikmak`, `merdivenden_dusmek` | Parallel ascent/descent metaphor |
| Door / threshold | `kapali_kapi`, `acik_kapi`, `kilitli_kapi` | High-traffic dream motif; tests specificity under same template |
| House / space | `bos_ev`, `evde_kaybolmak` | Interior spatial anxiety cluster |
| Mirror / self-image | `aynada_kendini_gormek`, `aynanin_kirilmasi` | Distinct psychology from doors/stairs |
| Path / crossing | `yol_ayrimi`, `kopruyu_gecmek`, `tünelde_kalmak` | Transition metaphors |
| Missed transit | `treni_kacirmak`, `ucaga_yetisememek` | Time-pressure cousins of P0 exam dreams without colliding slugs |

**Excluded from pilot (intentionally):**

- `sinava_gec_kalmak`, `okula_gec_kalmak` — owned by Workstream 1 first
- Color cluster (79), child/baby (87), object lists (53) — other systemic families; later pilots
- Entire 97-set rewrite — forbidden by batch control

### Pilot batch items (each: problem / severity / evidence / action)

Severity for pilot members: **P1 (systemic sample)** — not “1415 independent P1s.”

| # | slug | field | severity | problem | evidence | recommended_action |
|---|------|-------|----------|---------|----------|-------------------|
| 4.01 | `asansorde_kalmak` | major content fields | P1-sample | Shared cluster template; low symbol specificity | In top cluster (n=97); name-stripped hash match with 96 peers | Later PROPOSE: rewrite short/psych/jung/associations to elevator-stuck specificity; keep contextual/non-deterministic tone |
| 4.02 | `asansorle_yukselmek` | major content | P1-sample | Same template; ascent should differ from stuck/descent | Top cluster | Propose ascent-specific content; contrast with 4.01 |
| 4.03 | `merdiven_cikmak` | major content | P1-sample | Template; stairs≠elevator | Top cluster | Propose effort/progress framing specific to stairs |
| 4.04 | `merdivenden_dusmek` | major content | P1-sample | Template; fall vs climb must diverge | Top cluster | Propose loss-of-footing / regression framing |
| 4.05 | `kapali_kapi` | major content | P1-sample | Template; threshold blocked | Top cluster | Propose barred-access / opportunity-blocked framing |
| 4.06 | `acik_kapi` | major content | P1-sample | Template; must not clone closed-door text | Top cluster | Propose invitation/transition framing distinct from 4.05 |
| 4.07 | `kilitli_kapi` | major content | P1-sample | Template; lock≠merely closed | Top cluster | Propose key/agency/permission framing |
| 4.08 | `bos_ev` | major content | P1-sample | Template; emptiness of home | Top cluster | Propose absence/belonging framing |
| 4.09 | `evde_kaybolmak` | major content | P1-sample | Template; disorientation in familiar space | Top cluster | Propose familiar-unfamiliar / identity-in-home framing |
| 4.10 | `aynada_kendini_gormek` | major content | P1-sample | Template; self-image | Top cluster | Propose reflection/persona framing (Jung relevant if careful) |
| 4.11 | `aynanin_kirilmasi` | major content | P1-sample | Template; rupture of self-image | Top cluster | Propose fragmentation/reconstitution framing; distinct from 4.10 |
| 4.12 | `yol_ayrimi` | major content | P1-sample | Template; choice point | Top cluster | Propose decision/crossroads framing |
| 4.13 | `kopruyu_gecmek` | major content | P1-sample | Template; crossing | Top cluster | Propose liminal passage framing |
| 4.14 | `tünelde_kalmak` | major content | P1-sample | Template; enclosed passage | Top cluster | Propose containment/transition-in-dark framing |
| 4.15 | `treni_kacirmak` | major content | P1-sample | Template; missed vehicle | Top cluster | Propose missed-timing / life-schedule framing |
| 4.16 | `ucaga_yetisememek` | major content | P1-sample | Template; near-miss transit | Top cluster | Propose urgency/threshold-of-departure framing; contrast 4.15 |

**Pilot success criteria (for later RE-AUDIT — not run now):**

- Name-stripped hash no longer matches the 97-cluster for these 16
- Pairwise short+psych+jung Jaccard among the 16 drops materially
- No fabricated sources; no deterministic fortune-telling
- Symbol pairs that should differ (open vs closed door; climb vs fall) are distinguishable by a human reader

---

## Explicitly NOT prioritized as rewrite queues

| Finding | Count | Class | Decision |
|---------|------:|-------|----------|
| v4 P1 labels | 1415 | auditor inflation | Ignore as rewrite backlog |
| v4 duplicate-risk ≥0.85 | 1420 | systemic metric | Use for clustering only |
| missing `commonVariations` | 418 | dataset P2 | Defer until after pilot |
| dominant 2-source set | 1646 | systemic P2 | Policy later; no mass source paste |
| Jungian &lt;15 / psych &lt;15 | 265 / 509 | length metric | Not auto-rewrite |
| empty manual relatedSlugs | 1601 | expected w/ auto-relations | Not a defect by itself |
| empty batch-q / batch-s | 2 files | P3 cosmetic | Lowest |

---

## Recommended workflow after this report

When human continues:

1. **PROPOSE** Workstream 1 (P0 keep-AS / drop-O) — tiny structural proposal
2. **PROPOSE** Workstream 2.13 + diacritic canonicalization (data/SEO)
3. **PROPOSE** Workstream 3 relation remaps (with P0 survivors)
4. **PROPOSE** Workstream 4 content pilot (16 symbols) — Content Agent only after review gate

Do **not** open proposals for all 97 cluster members or all 1415 v4 P1s.

---

## Artifacts

| Path | Role |
|------|------|
| `.agents/reports/PRIORITIZATION.md` | This Stage 2 executive report |
| `.agents/reports/prioritization.json` | Machine-readable queue |
| Stage 1 reports | Unchanged inputs |

---

## Stage gate

**PRIORITIZATION: COMPLETE**
**Production files modified:** none
**Content generated:** none
**Proposals / review / patch / test / release:** not started

**STOP.**
