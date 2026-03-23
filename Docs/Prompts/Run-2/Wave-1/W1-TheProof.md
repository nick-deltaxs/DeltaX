━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-008
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-008
  Name:      W1-TheProof
  Title:     W1 — The Proof Section
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 1
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Arrom
  File:      src/components/home/TheProof.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-008.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave1/arrom-theproof
cd Codebase && npm install

---

You're building The Proof — the section that shows DeltaX's numbers and real client work. No fluff, no fake stats. Just honest numbers in big type and case studies in table rows.

**INTENT:** Wealthsimple's stats section — staggered sizes (not all the same). The biggest number is biggest on screen. This creates visual hierarchy without explanation. Run 1 had a single "10x" counter and 3 hardcoded JSX case study blocks. This version: 3 properly sized stats with JetBrains Mono (data font), and case studies loaded from a data file so adding a client is one line, not editing JSX.

---

## What the user sees

```
[02] THE PROOF                    ← overline

Numbers don't need decoration.   ← headline

4              2              16
ENGINES        DEV TEAMS       SPECIALISTS
working as     competing on    across design,
one system     every build     code, growth, strategy

────────────────────────────────────────────
CLIENT         SECTOR          DELIVERED
────────────────────────────────────────────
DEVYN          Streetwear      Complete brand system, identity, packaging
────────────────────────────────────────────
```

---

## Exact copy

**Overline:** `[02] THE PROOF`
**Headline:** `Numbers don't need decoration.`

**Stats:**
| Number | Label | Description |
|--------|-------|-------------|
| 4 | ENGINES | working as one system |
| 2 | DEV TEAMS | competing on every build |
| 16 | SPECIALISTS | across design, code, growth, strategy |

**Case study table:** loaded from `@/data/caseStudies` — currently has DEVYN.

---

## Technical specs

**Layout:** SectionWrapper background="primary" glow="gold"

  **BACKGROUND IMAGE:** Add proof-gold-dust.png as subtle overlay:
  ```tsx
  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/images/proof-gold-dust.png')", backgroundSize: "cover", opacity: 0.4 }} />
  ```
  Subtle gold dust particles behind the stats. Very low opacity.
**Overline:** SectionOverline number="02" label="THE PROOF", mb-4

**Headline:** font-display, text-5xl (48px), text-hero, tracking-[-0.02em], text-wrap: balance, mb-16

**Stats row:** flex flex-wrap justify-between items-start, gap-8 md:gap-0, mb-16

Each stat:
- Number: font-mono, tabular-nums, text-hero, tracking-[-0.02em]
  - "4" = text-[72px], "2" = text-[56px], "16" = text-[48px] (staggered sizes!)
- Label: font-body, text-sm (14px), font-semibold, uppercase, text-accent-gold, tracking-[0.08em], mt-2
- Description: font-body, text-base (16px), text-secondary, mt-1

**Counter animation:** Numbers count up from 0 when section scrolls into view. Use requestAnimationFrame (NOT setInterval). Duration: 1200ms. Easing: ease-out deceleration. Use Framer Motion's `useInView` hook to trigger. After counter finishes (200ms delay), labels + descriptions fade up.

**Case study table:** mt-16

- Header: font-mono, text-xs (12px), uppercase, text-muted, tracking-[0.08em], pb-3, border-b border-elevated
- Columns: grid grid-cols-[1fr_1fr_2fr] gap-4
- Data rows: py-4, border-b border-elevated, hover:bg-tertiary, transition 150ms
  - Client name: font-body, text-base, font-medium, text-hero
  - Sector: font-body, text-sm (14px), text-secondary
  - Delivered: font-body, text-sm, text-body
- Data source: `import { caseStudies } from "@/data/caseStudies";` — map over the array

**Mobile:** Stats stack vertically, gap-12. Sizes stay staggered (64px, 56px, 48px). Table becomes stacked cards — each row shows label:value pairs.

**Section id:** "proof"

**Imports:**
```tsx
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionOverline } from "@/components/ui/SectionOverline";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { caseStudies } from "@/data/caseStudies";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
```

---

**After building:** check:
- [ ] "[02] THE PROOF" overline in muted mono text
- [ ] "Numbers don't need decoration." headline
- [ ] 3 stats with DIFFERENT sizes (72, 56, 48px) — not all the same
- [ ] Gold labels under each stat
- [ ] Numbers count up on scroll entry
- [ ] DEVYN row in table below
- [ ] Hover on table row → subtle bg change
- [ ] Subtle gold glow behind the stats area

**Only modify:** src/components/home/TheProof.tsx. Don't touch any other file.

If caseStudies import fails or types don't match, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W1-TheProof: built by Arrom"
  git push origin wave1/arrom-theproof

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Arrom)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
