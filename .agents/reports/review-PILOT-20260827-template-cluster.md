# Review: PILOT-20260827-template-cluster

| Field | Value |
|-------|-------|
| **proposal** | `PILOT-20260827-template-cluster` |
| **reviewed_at** | 2026-08-27T14:10:00.000Z |
| **decision** | **CHANGES_REQUIRED** |
| **score** | **78 / 100** |
| **mapped_from_reviewer_vocab** | REVISE → CHANGES_REQUIRED |

---

## Independent verification

| Check | Result |
|-------|--------|
| All 16 slugs exist | ✓ |
| All 16 in top name-stripped cluster (n=97) | ✓ |
| Cohort excludes P0 collision slugs | ✓ |
| Proposal forbids production content rewrite in this stage | ✓ |
| Contrast pairs only-title-different after name strip | **✓ all 6 pairs `onlyTitleDiff=true`** |
| short Jaccard contrast pairs | 0.79–0.89 (near-identical) |

Baseline already shows the distinguishability protocol would **FAIL** on current live text for the listed pairs. That strengthens the case that template similarity is a real quality problem **within this factory family** — but the proposal must not pretend the measurement starts from uncertainty about title-only diffs.

---

## Selection quality (16 symbols)

**Good.** Subthemes cover elevator, stairs, door states, house, mirror, path/bridge/tunnel, missed transit — enough to test “same skeleton, different situation.” Size within 10–20 batch control.

Missing from cohort (not required, but note): no pure communication (`mesaj_*`) or crowd (`kalabalikta_*`) samples from the same 97 — acceptable for v1 pilot.

---

## Measurement method vs content quality

**Strengths**

- Separates auditor Jaccard inflation from human distinguishability.
- Contrast pairs are the right instrument (open vs closed door, etc.).
- Explicit non-goals block 1415-wide rewrite.

**Weaknesses (require amendment)**

1. **External validity underspecified:** Top cluster is overwhelmingly `batch-o` `rich()` family. Results must **not** be generalized to all 1256 clustered symbols or 1415 v4 P1s (other families: colors, children/baby, object lists may differ).
2. **FAIL threshold vs pre-known title-only identity:** Protocol should state that name-stripped equality is a hard automatic FAIL signal (already true for all 6 pairs), and human 0–2 scores are secondary confirmation — otherwise the pilot wastes cycles “discovering” what hash equality already shows.
3. **Success criteria for a future rewrite** are fine, but this proposal should add: “PASS on measurement does not authorize factory deletion; FAIL authorizes only a *separate* 16-symbol content proposal.”
4. Slight risk of scope creep via “reusable pattern” language — bind reuse to **same template hash family** only.

---

## Production change guard

Proposal correctly proposes **no article PATCH**. Keep that lock. Baseline JSON write under `.agents/reports/` is read-adjacent and acceptable in a later measurement step — still not a production data change.

---

## problems

1. **Major:** Over-broad implied generalizability to 1256/1415 without hard caveat.
2. **Major:** Measurement plan underplays that name-stripped identity already proves non-distinguishability for contrast pairs — amend protocol to use that as primary metric.
3. **Minor:** No explicit owner/timebox for running the human scoring.
4. **Minor:** Does not list which of the 16 are confirmed `batch-o` `rich()` vs other files (most are O; still verify at baseline capture).

## required_changes

Before APPROVED:

1. Add **External validity** section: pilot conclusions apply only to the **97-member / `rich()`-equivalent template family**; expansion to other clusters requires a new pilot.
2. Amend protocol: primary metric = name-stripped field equality / cluster hash membership; human scores optional confirmation.
3. Add explicit gate text: FAIL → may open `CONTENT-PILOT-16-rewrite` only; must not enqueue 97 or 1415.
4. Clarify that “expected improvement” of this proposal is **decision quality**, and that content improvement is out of scope until a follow-up proposal.
5. Optional: shrink FAIL rule redundancy now that `onlyTitleDiff` is confirmed — e.g. auto-FAIL if ≥4 contrast pairs name-strip equal.

## reviewer_notes

- Directionally correct and valuable as a brake against mass rewrite.
- Not REJECTED: non-goals are strong; cohort is right.
- Not APPROVED yet: generalizability + metric primacy must be tightened so Code/Content agents cannot “expand the pilot” from an APPROVED stamp.
- Independent pre-check already supports H1 for this family; amended proposal should acknowledge that without jumping to rewrite text.

## Safety / quality checklist

| # | Check | Pass |
|---|-------|:----:|
| 1 | About the right systemic issue | ✓ |
| 2 | Materially useful as a plan | partial |
| 3 | Avoids generic filler content changes | ✓ (no content change) |
| 9 | Safety / no fortune-telling introduced | ✓ |
| 10 | Prevents harmful mass rewrite | ✓ if caveats added |
