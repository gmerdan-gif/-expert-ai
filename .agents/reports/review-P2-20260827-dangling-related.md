# Review: P2-20260827-dangling-related

| Field | Value |
|-------|-------|
| **proposal** | `P2-20260827-dangling-related` |
| **reviewed_at** | 2026-08-27T14:10:00.000Z |
| **decision** | **APPROVED** |
| **score** | **88 / 100** |
| **mapped_from_reviewer_vocab** | PASS → APPROVED |

---

## Independent verification

| slug | dangling confirmed | proposed targets exist | semantic fit |
|------|:------------------:|:----------------------:|--------------|
| `mutfak` | `yemek`, `Yemek` | `yemek_yapmak`, `mutfakta_yemek_yapmak` ✓ | Strong (kitchen↔cooking) |
| `okulda_olmak` | both missing | `mezun_olmak`, `sinavdan_kalmak` ✓ | Good / acceptable (graduation + exam failure ≈ original intent) |
| `okula_gec_kalmak` (AS) | `sinifta_sinava_girmek` | keep `okulda_olmak` + `sinava_girmek` ✓ | Strong |
| `sinava_gec_kalmak` (AS) | both missing | `sinavdan_kalmak`, `sinav_sonucunu_gormek` ✓ | Strong |
| `sinifta_tek_basina_kalmak` | `sinifta_sinava_girmek` | `sinifta_olmak` + keep `okulda_olmak` ✓ | Strong |

### P0 dependency

Confirmed necessary: live O copies currently have `relatedSlugs: []`; AS dangling only matter after keep-AS. Proposal correctly orders after P0. Runtime still filters missing slugs today — remaps improve editorial graph, not crash fixes.

### Wrong-relation guard

No invented slugs. Alternatives listed. Empty-array fallback documented. Does not create new symbol pages.

Minor note: for `okulda_olmak`, `okuldan_atilmak` is also a close school neighbor; `sinavdan_kalmak` still matches the original “exam failure” intent of `sinavda_basarisiz_olmak`. Acceptable as proposed.

---

## problems

1. Non-blocking: `okulda_olmak` second hop is exam-centric rather than pure “being at school”; still matches stated dangling intent.
2. Non-blocking: does not update auto-relation engine (correctly out of scope).

## required_changes

**None blocking.** Soft PATCH notes:

1. Land after or atomically with P0.
2. Re-verify all proposed targets still exist at PATCH time.
3. Prefer listed alts only if Reviewer/human prefers at apply time — defaults are fine.

## reviewer_notes

- Relation-only patch; no article rewrite — appropriate for P2.
- Safe for Code Agent after P0 (or same PR with P0 first).
- Do not expand into creating missing symbol pages.

## Safety / quality checklist

| # | Check | Pass |
|---|-------|:----:|
| 1 | About these symbols | ✓ |
| 2 | Materially better relations | ✓ |
| 3 | Not generic filler | ✓ |
| 4 | No unsupported claims | ✓ |
| 8 | No bad duplicate relations forced | ✓ |
| 9 | Safety preserved | ✓ |
| 10 | User value (working related links) | ✓ |
