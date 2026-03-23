━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-009
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-009
  Name:      W1-TheArchitects
  Title:     W1 — The Architects Section
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 1
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Erfan
  File:      src/components/home/TheArchitects.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-009.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave1/erfan-thearchitects
cd Codebase && npm install

---

You're building The Architects — where visitors meet the people behind DeltaX. This is NOT a generic team grid with headshot circles. It's editorial. Text-first. Colored dots indicate which pillar each person belongs to.

**INTENT:** Capital.com's editorial team display — names and roles as text, not photo cards. Attio's dot-color pattern — a small colored circle next to each name tells you their department without words. Dave and Ramtin as co-founders get EQUAL treatment — same size, same gold title color, side by side with a vertical divider. This was a non-negotiable rule from Dave.

Run 1 had team data duplicated across TWO files (TheArchitects.tsx and TeamGrid.tsx). This version: single data source at `@/data/team` imported once.

---

## What the user sees

```
[03] THE ARCHITECTS

Built by founders who build.

Dave Benrouz                    │  Ramtin Ghaffary
Chief System Architect          │  Co-Founder & Head of Strategy
[2 sentences about Dave]        │  [2 sentences about Ramtin]

SECTION LEADERS
● Nick — Head of Quality        ● Steven — Creative Director
● Masha — Growth Director       ● Vitaly — COO
● Yarik — Chief of Staff        ● Denis — Head of Admin

THE TEAM
● Ali Abdi · Systems Engineer — Razm  ● Ali M.V. · Systems Engineer — Bazm
● Nazar · Developer — Razm  ● Marina · Developer — Razm  ...
```

---

## Exact copy

**Overline:** `[03] THE ARCHITECTS`
**Headline:** `Built by founders who build.`

**Dave bio:** "Systems thinker who builds companies like machines. Former engineer turned architect — designs the system before writing a single line of code."

**Ramtin bio:** "Strategy mind who finds the signal in the noise. Leads CoreXs — mapping every business before the engines activate."

All team names and roles come from `@/data/team` — don't hardcode names.

---

## Technical specs

**Layout:** SectionWrapper background="secondary" glow="none"

Custom multi-pillar glow: 4 absolute divs, each a radial gradient at 0.04 opacity:
- core at top-left, code at top-right, scale at bottom-left, style at bottom-right

**Co-founders:** grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0
- Left (Dave): md:border-r md:border-elevated md:pr-8
- Right (Ramtin): md:pl-8
- Name: font-display, text-[32px], text-hero
- Title: font-body, text-base, font-medium, text-accent-gold, mt-2
- Bio: font-body, text-base, text-secondary, mt-4, max-w-[400px]

**Leaders:** mt-16. Label "SECTION LEADERS" — font-body, text-sm, uppercase, font-medium, text-muted, mb-6. Grid: grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4.
Each: flex items-center gap-3. Dot (w-2 h-2 rounded-full bg-[pillar-bright]). Name (font-body, 16px, font-medium, text-hero). Role below (font-body, 14px, text-secondary).

**Team:** mt-12. Label "THE TEAM". Flex flex-wrap gap-x-8 gap-y-3. Each: dot + "Name · Role" (font-body, 14px, text-body).

**Pillar color map:**
```tsx
const pillarColors: Record<string, string> = {
  deltax: "bg-deltax-bright", core: "bg-core-bright",
  code: "bg-code-bright", scale: "bg-scale-bright", style: "bg-style-bright",
};
```

**Data:** `import { founders, leaders, members } from "@/data/team";`

**Animation:** Co-founders: Dave from left 600ms, Ramtin from right 600ms. Leaders: stagger 100ms. Team: stagger 40ms.

**Mobile:** Co-founders stack (Dave first). Horizontal divider. Leaders 2-col. Team wraps.

**Section id:** "architects"

---

**After building:** check:
- [ ] Dave and Ramtin equal size, side by side, gold titles
- [ ] Vertical divider between them (desktop)
- [ ] Leaders grid with colored dots
- [ ] Team list flowing at bottom
- [ ] No hardcoded names (all from data/team.ts)

**Only modify:** src/components/home/TheArchitects.tsx. Don't touch any other file.

If team data import fails, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W1-TheArchitects: built by Erfan"
  git push origin wave1/erfan-thearchitects

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Erfan)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
