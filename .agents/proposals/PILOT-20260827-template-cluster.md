# Proposal PILOT-20260827-template-cluster

| Field | Value |
|-------|-------|
| **proposal id** | `PILOT-20260827-template-cluster` |
| **date** | 2026-08-27 |
| **stage** | PROPOSE only |
| **priority** | P1-sample (systemic) — **not** 1415 independent rewrites |
| **status** | DRAFT — awaiting Reviewer (not run in this stage) |
| **production modified** | no |
| **purpose** | Controlled test whether top-cluster template similarity is a **real quality problem**, not mass content generation |

---

## Important scope lock

This proposal does **NOT** deliver rewritten article bodies.

It proposes:

1. A bounded **16-symbol pilot cohort**
2. A **measurement protocol**
3. A **hypothesis** about quality harm
4. **Decision criteria** for whether a later Content proposal should rewrite these symbols
5. Explicit **non-goals** (no 97-wide rewrite; no use of v4 P1=1415 as backlog)

Any future prose changes require a **separate** Content proposal after this pilot’s measurement plan is approved and baseline metrics are captured.

---

## Target symbols (Stage 2 pilot cohort)

From largest name-stripped template cluster (**n=97**, rooted in `batch-o.ts` `rich()` and similar skeletons):

| # | slug | subtheme |
|---|------|----------|
| 1 | `asansorde_kalmak` | elevator / stuck |
| 2 | `asansorle_yukselmek` | elevator / ascent |
| 3 | `merdiven_cikmak` | stairs / climb |
| 4 | `merdivenden_dusmek` | stairs / fall |
| 5 | `kapali_kapi` | door / closed |
| 6 | `acik_kapi` | door / open |
| 7 | `kilitli_kapi` | door / locked |
| 8 | `bos_ev` | house / empty |
| 9 | `evde_kaybolmak` | house / lost |
| 10 | `aynada_kendini_gormek` | mirror / self |
| 11 | `aynanin_kirilmasi` | mirror / broken |
| 12 | `yol_ayrimi` | path / choice |
| 13 | `kopruyu_gecmek` | bridge / crossing |
| 14 | `tünelde_kalmak` | tunnel / enclosed |
| 15 | `treni_kacirmak` | transit / missed train |
| 16 | `ucaga_yetisememek` | transit / missed flight |

### Why these 16

- All members of the **worst** repeated template cluster (97).
- Span **distinct experiential subthemes** so “same skeleton, different symbol” is testable (open vs closed door; climb vs fall; train vs plane).
- Exclude P0 collision slugs (`okula_gec_kalmak`, `sinava_gec_kalmak`) — owned by structural proposals.
- Size within orchestrator batch control (10–20).

### Target files (cohort origin)

Primarily `data/symbols/batch-o.ts` (`rich()` generator) for most of this cluster. Exact membership confirmed by Stage 1/2 hash clustering — PATCH/content stages must re-verify per slug file before edits.

---

## Problem hypothesis (to test — not yet “proven rewrite-needed”)

**H1:** Shared `rich()`-style templates make distinct dream situations (e.g. `acik_kapi` vs `kapali_kapi`) insufficiently distinguishable for a user seeking symbol-specific guidance.

**H2:** High v4 Jaccard / “duplicate-risk” largely measures **shared boilerplate tokens**, so treating 1415 P1 labels as rewrite tasks would overfit the auditor.

**H3:** A successful symbol-specific rewrite of the 16 would move them off the 97-cluster hash and reduce within-cohort pairwise similarity **without** inventing sources or fortune-telling.

This proposal authorizes **measurement + decision**, not the rewrite itself.

---

## Evidence (baseline already observed)

| Evidence | Value |
|----------|------:|
| Top cluster size (name-stripped short+psych+jung+assoc) | 97 |
| Symbols in any repeated cluster | 1256 |
| v4 duplicate-risk ≥0.85 | 1420 |
| v4 P1 count | 1415 |
| batch-o mechanism | `rich(slug,title)` interpolates title into fixed Turkish boilerplate |
| Hard phrase hits (dataset) | e.g. “rüyanın atmosferi, yaşanan duygu…” ×101 |

**Interpretation rule:** Template membership = **systemic risk signal**, not automatic content failure per symbol.

---

## Proposed changes (this proposal only)

### Change A — Baseline capture (read-only script / report)

Before any content PATCH:

1. Record for each of the 16:
   - cluster hash id
   - word counts (short/psych/jung)
   - pairwise Jaccard matrix within the 16 (short+psych+jung)
   - human distinguishability checklist (see below)
2. Write baseline to `.agents/reports/pilot-template-baseline.json` (future stage; not done now).

### Change B — Human distinguishability protocol

For each contrast pair, a Reviewer/human scores 0–2 (“indistinguishable” → “clearly distinct”) on shortDescription + psychology only:

| Pair | Must diverge on |
|------|-----------------|
| `kapali_kapi` vs `acik_kapi` | blocked vs available threshold |
| `kilitli_kapi` vs `kapali_kapi` | lock/agency vs merely closed |
| `merdiven_cikmak` vs `merdivenden_dusmek` | effort/ascent vs fall |
| `asansorde_kalmak` vs `asansorle_yukselmek` | stuck vs rising |
| `aynada_kendini_gormek` vs `aynanin_kirilmasi` | reflection vs rupture |
| `treni_kacirmak` vs `ucaga_yetisememek` | missed rail vs missed air departure |

**Pilot FAIL (quality problem confirmed)** if ≥4 pairs score 0 on current live text.
**Pilot INCONCLUSIVE** if mixed.
**Pilot PASS (template OK enough)** if ≥5 pairs score ≥1 without rewrite — then do **not** mass-rewrite cluster.

### Change C — Conditional follow-up Content proposal (NOT included here)

Only if FAIL or strong INCONCLUSIVE:

- Open `CONTENT-PILOT-16-rewrite` (future id)
- Rewrite **only** shortDescription, psychology, jungian, association arrays for the 16
- Constraints: no fortune-telling; no fabricated sources; each symbol remains contextual; contrast pairs must become distinguishable
- Then PATCH → TEST → RE-AUDIT vs baseline

### Change D — Explicit non-actions

- Do not rewrite all 97 cluster members.
- Do not enqueue 1415 v4 P1 symbols.
- Do not change cultural fields solely for length.
- Do not “fix” auditor by lowering Jaccard thresholds.

---

## Per-symbol rows (proposal stance)

For each of the 16:

| field | current_value | proposed_value (this stage) | rationale | confidence | source_requirement |
|-------|---------------|-----------------------------|-----------|------------|-------------------|
| major content | live `rich()`/cluster text | **unchanged** | Measure first | high | none |
| quality status | suspected systemic template | **under test** | Avoid premature rewrite | high | none |
| future rewrite | n/a | only if protocol FAIL | Batch control | medium | cite only if claims need support |

---

## Source requirements

None for measurement.
If a later rewrite asserts empirical psychology claims, require real sources (Schredl/Blagrove/etc.) used within their actual scope — no decorative citations.

---

## Expected quality improvement

**Immediate (this proposal):** decision quality — stop or proceed to rewrite with evidence.
**If later rewrite proceeds:** higher symbol specificity for 16 high-traffic spatial/transit metaphors; cluster hash break; reusable pattern for next systemic batch.

---

## Risk assessment

| Risk | Level | Mitigation |
|------|-------|------------|
| Jumping straight to rewrite without baseline | High | Forbidden by this proposal |
| Treating auditor P1 as truth | High | Explicitly rejected |
| Expanding pilot to 97 mid-flight | High | Hard cap 16 |
| False FAIL due to harsh rubric | Med | Two-reviewer or orchestrator tie-break |
| Wasted effort if template is “good enough” | Accepted | PASS stops expansion — valuable outcome |

---

## Dependency order relative to other proposals

1. P0 slug collisions (structural)
2. P1 lunapark exact dup (optional parallel)
3. P2 dangling related
4. **This pilot measurement** (can run in parallel with 1–3; must finish baseline before any content PATCH)
5. Conditional content rewrite proposal

---

## Out of scope

- Actual Turkish article rewrites
- Factory refactor of `rich()` across all of batch-o (systemic architecture change — separate proposal if pilot FAIL and pattern proven)
- Reviewer execution (Stage 4)
- Code Agent / PATCH

---

## Reviewer gate

Reviewer should evaluate:

1. Is the 16-symbol set representative?
2. Is the distinguishability protocol fair?
3. Are non-goals clear enough to prevent scope creep?

Decision needed: `APPROVED` / `CHANGES_REQUIRED` / `REJECTED` for **the measurement plan**, not for nonexistent rewrite text.
