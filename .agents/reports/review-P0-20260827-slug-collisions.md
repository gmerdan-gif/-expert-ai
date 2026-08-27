# Review: P0-20260827-slug-collisions

| Field | Value |
|-------|-------|
| **proposal** | `P0-20260827-slug-collisions` |
| **reviewed_at** | 2026-08-27T14:10:00.000Z |
| **decision** | **APPROVED** |
| **score** | **92 / 100** |
| **mapped_from_reviewer_vocab** | PASS → APPROVED |

---

## Independent verification (not trusting proposal)

| Check | Result |
|-------|--------|
| Duplicate count both slugs | 2 each — confirmed |
| Live lookup = batch-o | confirmed (`liveIsO=true`) |
| O = `rich()` atmosphere template | confirmed |
| AS = symbol-specific | confirmed (no atmosphere boilerplate) |
| Major-content jaccard O↔AS | `okula` 0.117; `sinava` 0.078 — not mergeable duplicates |
| Simulated remove-O → find returns AS, unique=1 | confirmed |
| Inbound to `sinava_gec_kalmak` | `sinava_girmek`, `derse_gec_kalmak` — slug string preserved after patch |
| Inbound to `okula_gec_kalmak` | none |
| AS related dangling | `sinifta_sinava_girmek` missing; both sinava AS relateds missing |

### Canonical keep-AS decision

**Correct.** O is factory boilerplate; AS names time pressure / evaluation anxiety concretely. Keeping O would preserve the production bug. Field-merge adds nothing useful from O.

### Lookup / SEO

Removing O tuples fixes `getDreamSymbolBySlug` and duplicate `generateStaticParams` entries. Metadata `description` will change from generic to specific — improvement, not loss. Sitemap is driven by `getAllDreamSymbols()` → count drops by 2 duplicate params, same public URLs.

### Relation impact

Outbound: O has `[]`; AS has partial dangling. After P0, `getRelatedDreamSymbols` silently drops missing targets and auto-fills — **no hard 404**, but manual graph weaker until P2. Acceptable if P2 follows in same release train (documented in proposal).

---

## problems

1. Non-blocking: AS dangling relateds become the live manual list after patch (filtered at runtime).
2. Non-blocking: Proposal does not name an exact backup path convention beyond `.agents/logs/backups/` (fine for PATCH stage).

## required_changes

**None blocking.** Soft requirements for PATCH packaging:

1. Apply P2 in the **same release train** (preferably same PR after P0 commits), or temporarily set AS `relatedSlugs` to only existing targets before deploy.
2. Include unique-slug invariant test as proposed.
3. Backup `batch-o.ts` before edit.

## reviewer_notes

- Smallest reversible patch (delete two tuples) is appropriate.
- Do **not** expand this proposal into rewriting `rich()` or the 97-cluster.
- Code Agent may implement this proposal after human/orchestrator release authorization — Reviewer gate: **APPROVED**.

## Safety / quality checklist

| # | Check | Pass |
|---|-------|:----:|
| 1 | About these symbols | ✓ |
| 2 | Materially better live content | ✓ |
| 3 | Avoids adding generic filler | ✓ |
| 4 | No unsupported claims | ✓ |
| 5–7 | Jung/psych/cultural not worsened | ✓ |
| 8 | Removes template dup, not unique work | ✓ |
| 9 | Safety rules preserved | ✓ |
| 10 | User value improves | ✓ |
