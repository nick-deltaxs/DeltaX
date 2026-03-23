# Run 2 — Knowledge Base

This is the active source of truth for the DeltaX Website rebuild.

## Documents

| File | What It Is |
|---|---|
| **DESIGN-V2.md** | Leo V2 definitive design — 1586 lines, every pixel decided. Colors, typography, spacing, animations, atmosphere, logos, page-by-page ASCII wireframes. |

## Reference (Read-Only)

The Run 1 knowledge base is archived at `Knowledge-Base/Run-1/`. It contains the old SPEC, WIREFRAMES, BLUEPRINT, RULES, and ENV-SETUP that produced 348 issues. Kept for historical reference only.

## How Run 2 Prompts Use This

Every Run 2 prompt in `Prompts/Run-2/` is derived from DESIGN-V2.md. The prompts contain the exact specs, copy, and code needed to build each component. Developers don't need to read DESIGN-V2.md directly — the prompts have everything.

The .windsurfrules file in the codebase root contains the design system summary (colors, fonts, rules) that Windsurf AI reads automatically.
