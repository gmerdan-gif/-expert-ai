# Stage 3 PROPOSE — Index

**Generated:** 2026-08-27
**Orchestrator stage:** PROPOSE complete → STOP
**Production files modified:** none
**Reviewer / Code Agent / PATCH:** not started

## Proposals written

| ID | Priority | Path | Symbols / scope |
|----|----------|------|-----------------|
| `P0-20260827-slug-collisions` | P0 | [P0-20260827-slug-collisions.md](./P0-20260827-slug-collisions.md) | `okula_gec_kalmak`, `sinava_gec_kalmak` — keep batch-as, remove batch-o tuples |
| `P1-20260827-title-slug-canonicalization` | P1 | [P1-20260827-title-slug-canonicalization.md](./P1-20260827-title-slug-canonicalization.md) | 13 pairs; first apply `lunapark_treni`/`lunapark_tren` |
| `P2-20260827-dangling-related` | P2 | [P2-20260827-dangling-related.md](./P2-20260827-dangling-related.md) | 5 symbols; remap missing relatedSlugs |
| `PILOT-20260827-template-cluster` | P1-sample | [PILOT-20260827-template-cluster.md](./PILOT-20260827-template-cluster.md) | 16-symbol measurement plan (no rewrite text) |

## Recommended apply order (after Reviewer)

1. P0
2. P1 Phase A (lunapark) → then remaining pairs
3. P2 (after or with P0)
4. Pilot baseline measurement → conditional future content proposal

## Explicitly not done

- Reviewer decisions
- Production patches
- Content generation for the 16
- Treating v4 P1=1415 as rewrite backlog
