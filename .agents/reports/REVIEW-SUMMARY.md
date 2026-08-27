# Stage 4 REVIEW — Summary Index

**Generated:** 2026-08-27T14:10:00.000Z
**Orchestrator stage:** REVIEW complete → STOP
**Production files modified:** none
**Proposals applied:** none
**Code Agent / PATCH / TEST / RE-AUDIT / RELEASE:** not started

Decision vocabulary: Reviewer PASS/REVISE/REJECT mapped to Orchestrator **APPROVED** / **CHANGES_REQUIRED** / **REJECTED**.

---

## Results

| Proposal | Decision | Score | Report |
|----------|----------|------:|--------|
| `P0-20260827-slug-collisions` | **APPROVED** | 92 | [review-P0-…](./review-P0-20260827-slug-collisions.md) |
| `P1-20260827-title-slug-canonicalization` | **CHANGES_REQUIRED** | 68 | [review-P1-…](./review-P1-20260827-title-slug-canonicalization.md) |
| `P2-20260827-dangling-related` | **APPROVED** | 88 | [review-P2-…](./review-P2-20260827-dangling-related.md) |
| `PILOT-20260827-template-cluster` | **CHANGES_REQUIRED** | 78 | [review-PILOT-…](./review-PILOT-20260827-template-cluster.md) |

**REJECTED:** none

---

## Critical corrections required (before re-review)

### P1
1. **`kavsak` / `kavşak`:** Do not keep live ASCII template while deleting authored diacritic body. Migrate `kavşak` content onto slug `kavsak`, then retire `kavşak`.
2. **`mercan` / `mercana`:** Mandatory content merge into `mercan` before deleting `mercana` (not optional).
3. **Redirects:** Required for Phase B retired URLs (`/ruyalar/semboller/{retired}` → canonical). None exist in Next config today.

### PILOT
1. Limit external validity to the **97 / `rich()` template family** — not 1256/1415.
2. Make name-stripped equality / cluster hash the **primary** FAIL metric (already true for all 6 contrast pairs).
3. Keep hard gate: FAIL only unlocks a separate 16-symbol content proposal — never mass rewrite.

---

## What may go to Code Agent next (after human continue)

**Eligible now (APPROVED only):**

1. **P0** — remove two `batch-o` tuples; keep AS records; backup + unique-slug test.
2. **P2** — remap five `relatedSlugs` lists (after or atomically with P0).

**Not eligible:**

- Full **P1** until amended + re-reviewed (lunapark Phase A could be split into a thin APPROVED proposal).
- **PILOT** measurement amendments until re-reviewed; no content PATCH from pilot.
- Any production rewrite of the 16 / 97 / 1415.

---

## Recommended next orchestrator step

1. Content/Orchestrator amends P1 + PILOT proposals.
2. Re-run Stage 4 REVIEW on amended docs only.
3. Then Stage 5 PATCH for **P0 → P2** (and optionally lunapark-only P1A).

---

## Stage gate

**REVIEW: COMPLETE**
**STOP.** No patch, test, re-audit, or release.
