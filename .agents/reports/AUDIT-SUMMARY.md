# INUS AUDIT REPORT — Stage 1 only

**Generated:** 2026-08-27T13:46:25.956Z
**Auditor:** READ-ONLY (no production file modifications)
**Orchestrator stage:** AUDIT complete → STOP (no PRIORITIZE/PROPOSE/PATCH)

---

## 1. Actual dataset count

| Metric | Value | Verdict |
|--------|------:|---------|
| `dreamSymbolEntries.length` / `dreamSymbols.length` | **1676** | Entry-array count |
| Unique slugs | **1674** | 2 exact slug collision key(s) |
| Unique titles | **1661** | 15 title collision group(s) |
| Active batch files (`batch-*.ts`) | **45** | exported array sum=1676 |
| Empty batches | batch-q.ts, batch-s.ts | Still imported |
| Obsolete assumption **1330** | — | **FALSE / obsolete** (not present in live data or auditor v4 hardcode) |
| Assumption **1676** | entries | **TRUE for entry count**; effective unique symbols = **1674** |

### Source of truth

- Aggregator: `data/dream-symbol-entries.ts`
- Runtime: `data/dream-symbols.ts` → `dreamSymbols = dreamSymbolEntries`
- Factory: `createSymbol` + `DEFAULT_SOURCES`

---

## 2. Structural findings

### P0 — Blockers

- **`sinava_gec_kalmak`** appears **2** times → `getDreamSymbolBySlug` returns the first record; later content is hidden.
- **`okula_gec_kalmak`** appears **2** times → `getDreamSymbolBySlug` returns the first record; later content is hidden.

### Schema integrity (positive)

- Required text fields present on essentially all entries (empty counts in structural-audit.json).
- FAQ / sources arrays present on all entries in this pass.
- Relation engine auto-fills when manual `relatedSlugs` empty (1601/1676 empty manual).

### Auditor gap

- Content auditor v4 reported P0=0 and never flagged slug uniqueness.
- Independent structural audit corrects this.

---

## 3. Dataset-wide problems

| Finding | Count | % of 1676 | Class |
|---------|------:|-------------------:|-------|
| missing `commonVariations` | 418 | 24.9% | systemic P2 |
| Jungian < 15 words | 265 | 15.8% | systemic metric (length ≠ quality) |
| Psychology < 15 words | 509 | 30.4% | systemic metric |
| DEFAULT_SOURCES (3-item factory default) | 19 | 1.1% | minority |
| dominant shared source set (2-item) | 1646 | 98.2% | systemic P2 monoculture |
| unique source fingerprints | 10 | — | monoculture |
| template repeated clusters | 25 | — | systemic P1 |
| symbols inside repeated clusters | 1256 | 74.9% | systemic |
| v4 duplicate-risk (≥0.85) | 1420 | 84.7% | **inflated P1 trigger** |
| empty manual relatedSlugs | 1601 | 95.5% | expected if auto-relations OK |
| broken relatedSlugs targets | 5 | — | symbol-specific P2 |

### Hard boilerplate phrase hits

- "farklı kişisel çağrışımlar ve bağlamsal anlamlar…": **41**
- "rüyanın atmosferi, yaşanan duygu…": **101**
- "gündelik yaşam deneyimleri, duygusal durumu…": **41**
- "bilinçdışındaki bir sürecin sembolik ifadesi…": **101**
- "tek bir evrensel…": **1**
- "kesin bir anlam…": **0**

**Orchestrator interpretation:** Shared templates are a **systemic** problem. Do **not** treat v4's 1415 P1 labels as 1415 independent rewrites.

### Top template clusters (sample)

- **97 symbols** — e.g. asansorde_kalmak, asansorun_dusmesi, asansorle_yukselmek, asansorle_inmek, merdivenden_dusmek, merdiven_cikmak
- **94 symbols** — e.g. okula_gitmek, okulda_kaybolmak, okuldan_atilmak, sinav_sonucunu_gormek, sinavdan_kalmak, sinavi_kaybetmek
- **87 symbols** — e.g. cocukla_konusmak, cocukla_oynamak, cocugunu_kaybetmek, cocugunu_bulmak, bebek_tasımak, bebek_emzirmek
- **79 symbols** — e.g. kirmizi_gormek, mavi_gormek, yesil_gormek, sari_gormek, beyaz_gormek, siyah_gormek
- **53 symbols** — e.g. kaktus, kelepce, kasa, kaset, klavye, komodin
- **53 symbols** — e.g. macera, magaza, mağaza_kapisi, manken, manken_olmak, maske
- **50 symbols** — e.g. lastik, limon, limonata, leylek, leopar, lunapark
- **49 symbols** — e.g. yemek_dokulmesi, yemegi_yakmak, yemegin_bozulmasi, aclik_hissetmek, zehirlenmek, zehirli_bir_sey_yemek

---

## 4. Symbol-specific P1 / P2 problems

### P1 (symbol-specific — high value)

1. **Exact slug collisions** (also P0 structurally): `sinava_gec_kalmak`, `okula_gec_kalmak`
2. **Title/slug canonical collisions** (13 groups): ASCII vs diacritic or near-variant slugs sharing one title — see `structural-audit.json`.
3. **Near-identical content pairs** inside template clusters (jaccard ≥ 0.98 on short+psych+jung): 246 pairs sampled in top clusters — e.g. acik_kapi↔bos_ev(1), acik_kapi↔eski_ev(1), acik_kapi↔yeni_ev(1), acik_kapi↔bos_oda(1), acik_kapi↔uzak_yol(1).

Representative worst-cluster exemplars for a future 10–20 batch (do not patch now):
`asansorde_kalmak`, `asansorun_dusmesi`, `asansorle_yukselmek`, `asansorle_inmek`, `merdivenden_dusmek`, `merdiven_cikmak`, `merdiven_inmek`, `kirik_merdiven`, `kapali_kapi`, `acik_kapi`, `kilitli_kapi`, `kapiyi_acamamak`

### P2 (symbol-specific)

- `mutfak`: dangling related → `yemek`, `Yemek`
- `okulda_olmak`: dangling related → `okuldan_mezun_olmak`, `sinavda_basarisiz_olmak`
- `okula_gec_kalmak`: dangling related → `sinifta_sinava_girmek`
- `sinava_gec_kalmak`: dangling related → `sinavda_basarisiz_olmak`, `sinav_sorusunu_bilememek`
- `sinifta_tek_basina_kalmak`: dangling related → `sinifta_sinava_girmek`

---

## 5. Obsolete auditor assumptions

| Assumption | Status | Notes |
|------------|--------|-------|
| 1330 symbols | **OBSOLETE** | Not in live dataset; historical only |
| 1676 = unique symbols | **PARTIALLY VALID** | 1676 entries, 1674 unique slugs |
| v2 field-length <70 as quality gate | **PARTIALLY RETIRED** | v4 uses <15 + capped length score; still length-biased |
| Jaccard ≥0.90 ⇒ independent P1 | **OBSOLETE AS P1 TRIGGER** | Marks ~1415 symbols P1; mostly shared boilerplate |
| Auditor catches slug collisions | **GAP** | v4 P0=0; structural audit finds 2 |
| missing commonVariations ⇒ rewrite all | **SYSTEMIC ONLY** | Completeness metric, not per-symbol P1 |

Auditor script validated: `scripts/inus/audit-symbols.ts` (v4). Prior versions in `.agents/logs/audit-symbols.v2.backup.ts` / `v3`.

---

## 6. Recommended next workflow step

**STOP after Stage 1.**

Next authorized stage when human continues: **PRIORITIZE** (Stage 2).

Suggested prioritization order (for later — not executed now):

1. Fix **P0 slug collisions** (small, reversible data patch).
2. Resolve **title/slug canonical pairs** (SEO).
3. Treat **template boilerplate** as systemic: pick **10–20** symbols from the worst cluster → PROPOSE → REVIEW → PATCH → TEST → RE-AUDIT.
4. Defer dataset-wide `commonVariations` / source monoculture until after pilot proves a pattern.

---

## Artifacts

| Path | Contents |
|------|----------|
| `.agents/reports/structural-audit.json` | Full structured Stage 1 report + auditor validation |
| `.agents/reports/symbol-audit.json` | Prior per-symbol v4 scores (reference; P1 inflated) |
| `.agents/reports/AUDIT-SUMMARY.md` | This executive report |

---

## Stage gate

**AUDIT: COMPLETE**
**Production files modified:** none
**Do not proceed to proposal, review, patch, test, re-audit, or release.**
