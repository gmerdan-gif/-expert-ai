# Review: P1-20260827-title-slug-canonicalization

| Field | Value |
|-------|-------|
| **proposal** | `P1-20260827-title-slug-canonicalization` |
| **reviewed_at** | 2026-08-27T14:10:00.000Z |
| **decision** | **CHANGES_REQUIRED** |
| **score** | **68 / 100** |
| **mapped_from_reviewer_vocab** | REVISE → CHANGES_REQUIRED |

---

## Independent verification summary

All 13 pairs exist with matching titles. Lunapark identical-except-slug: **confirmed**. No inbound `relatedSlugs` to diacritic/retire candidates (except ASCII inbound to `agac`, `kapi`). Sitemap builds from live `getAllDreamSymbols()` — retired slugs drop automatically. **No redirects** exist in Next config today.

---

## Pair-by-pair review

| # | Pair | Proposal canonical | Independent verdict | Notes |
|---|------|--------------------|---------------------|-------|
| 1 | `agac` / `ağaç` | `agac` | **OK** | ASCII richer; inbound `cicek`→`agac` |
| 2 | `kapi` / `kapı` | `kapi` | **OK** | ASCII richer; 4 inbound refs |
| 3 | `gunes` / `güneş` | `gunes` | **OK** | ASCII materially richer |
| 4 | `yildiz` / `yıldız` | `yildiz` | **OK** | same |
| 5 | `bahce` / `bahçe` | `bahce` | **OK** | same |
| 6 | `kopru` / `köprü` | `kopru` | **OK** | same |
| 7 | `gokkusagi` / `gökkuşağı` | `gokkusagi` | **OK** | same |
| 8 | `simsek` / `şimşek` | `simsek` | **OK** | same |
| 9 | `kasirga` / `kasırga` | `kasirga` | **OK** | same |
| 10 | `mercan` / `mercana` | slug `mercan` + optional merge | **CHANGES** | See below — merge must be **mandatory** |
| 11 | `magara_girişi` / `mağara_girişi` | keep `magara_girişi` | **OK (minimal)** | Prefer retiring full-diacritic; optional full-ASCII rename later |
| 12 | `kavsak` / `kavşak` | `kavsak` | **FAIL as written** | ASCII is **batch-o template**; diacritic is authored/specific |
| 13 | `lunapark_treni` / `lunapark_tren` | `lunapark_treni` | **OK — apply first** | Identical body; zero content loss |

### Critical: `kavsak` / `kavşak`

Independent read:

- `kavsak`: “rüyanın atmosferi…”, generic associations (Farkındalık/Değişim…) — **template**
- `kavşak`: choice/decision/direction framing; Jung individuation/choice — **specific**

ASCII-as-URL policy is fine, but **keeping live template content while deleting the better body is a quality regression**. Proposal’s “caveat” is insufficient; it still marks canonical=`kavsak` without requiring content migration.

**Required fix:** Canonical URL `kavsak` **only if** body is replaced with `kavşak` content (slug field updated / record swapped). Otherwise prefer keeping `kavşak` as temporary canonical despite diacritic — Reviewer prefers **swap content onto `kavsak` then delete `kavşak`**.

### Critical: `mercan` / `mercana`

- `mercan`: weak/generic short+psych+jung; generic associations
- `mercana`: specific growth/collective-network framing; better associations; typo-like slug

Keeping slug `mercan` is correct orthography. **Deleting `mercana` without mandatory merge loses better content.** Proposal lists merge as optional — unacceptable.

### Lunapark

APPROVED in isolation. Safe Phase A.

### Redirect / canonical strategy (missing hard requirement)

Retiring 12 URLs without redirects → soft-404 for bookmarks/search. Sitemap will drop them, but external links break. Proposal mentions optional redirects — must be **required** for Phase B (or explicit accepted-risk sign-off).

Suggested strategy for revised proposal:

1. Data: export only canonical slug.
2. App: `next.config` redirects retired → canonical (308/301).
3. Optional: `alternates.canonical` in metadata once single slug remains.
4. relatedSlugs: rewrite any retire → canonical (currently no inbound to diacritics; still scan at PATCH).

---

## problems

1. **Critical:** `kavsak` canonical without content swap would publish template over authored text.
2. **Critical:** `mercana`→`mercan` merge marked optional; must be mandatory.
3. **Major:** Phase B redirects not required; no Next redirect exists today.
4. **Minor:** `magara_girişi` still contains `ş`; acceptable interim but document encoding policy.
5. **Minor:** Automatic “ASCII richer ⇒ keep ASCII body” works for pairs 1–9 but must not be a blind rule (pair 12 counterexample).

## required_changes

Before APPROVED:

1. Rewrite pair 12 decision: **migrate `kavşak` content onto slug `kavsak`, then delete `kavşak`** (or equivalent explicit swap). Forbidden: delete authored body while leaving `rich()` live.
2. Make `mercana`→`mercan` **mandatory content merge** (short/psych/jung/associations at minimum) before delete; show current→proposed field table.
3. Add **required redirect map** for all retired slugs (Phase B); list exact from→to paths under `/ruyalar/semboller/…`.
4. Split approval ask: Phase A lunapark may be separately APPROVED after a thin amendment, or keep in one proposal with phases gated.
5. State explicitly: ASCII URL preference ≠ automatic keep of ASCII record body.

## reviewer_notes

- Phase A (`lunapark_treni` keep / `lunapark_tren` delete) is independently sound and could ship alone after a scoped re-review.
- Pairs 1–9 ASCII-keep is supported by richness + inbound evidence.
- Do not send full P1 to Code Agent until required_changes land in an amended proposal.

## Safety / quality checklist

| # | Check | Pass |
|---|-------|:----:|
| 1 | About these symbols | ✓ |
| 2 | Materially better (all pairs) | ✗ (`kavsak`, `mercan`) |
| 3 | Avoids generic filler | ✗ risk on `kavsak` |
| 8 | Dedup without losing unique work | ✗ without merge/swap |
| 10 | User/SEO value | partial (redirects missing) |
