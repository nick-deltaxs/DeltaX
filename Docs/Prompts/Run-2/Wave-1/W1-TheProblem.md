━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-007
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-007
  Name:      W1-TheProblem
  Title:     W1 — The Problem Section
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 1
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Marina
  File:      src/components/home/TheProblem.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-007.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave1/marina-theproblem
cd Codebase && npm install

---

You're rebuilding The Problem section — the part that shows visitors what's broken about the agency model and what DeltaX does differently. It's a side-by-side comparison: red (bad) on the left, teal (good) on the right.

**INTENT:** ClickUp uses this pattern — "what you have today" vs "what you actually need". The left column is dimmed and painful to read (the problems). The right column is bright and clear (the solutions). The visitor should feel the contrast physically. Red glow left, teal glow right — like two different worlds splitting the screen.

The old Run 1 version of this component was 503 lines with content written THREE TIMES (static, animated, mobile). That's insane. This version: single code path, ~100 lines, Framer Motion handles reduced-motion automatically.

---

## What the user sees

```
Most agencies are a black box.      ← headline, full width

WHAT YOU GET TODAY                   WHAT YOU ACTUALLY NEED
(red label)                          (teal label)

┃ Endless meetings                   ┃ A system that audits
┃ with no outcomes.                  ┃ before it builds.

┃ Developers who                     ┃ Engineers who compete
┃ disappear mid-project.             ┃ to write better code.

┃ Designs that look                  ┃ Design that makes
┃ like templates.                    ┃ competitors nervous.

┃ Marketing that burns               ┃ Growth that compounds,
┃ budget, not pipeline.              ┃ not spikes.

┃ A founder doing                    ┃ A partner who builds
┃ everything.                        ┃ the machine.

(subtle red glow left)               (subtle teal glow right)
```

---

## Exact copy (don't change a word)

**Headline:** `Most agencies are a black box.`

**Left label:** `WHAT YOU GET TODAY`
**Left items (dimmed text, #999999):**
1. Endless meetings with no outcomes.
2. Developers who disappear mid-project.
3. Designs that look like templates.
4. Marketing that burns budget, not pipeline.
5. A founder doing everything.

**Right label:** `WHAT YOU ACTUALLY NEED`
**Right items (bright text, #E8E8E8):**
1. A system that audits before it builds.
2. Engineers who compete to write better code.
3. Design that makes competitors nervous.
4. Growth that compounds, not spikes.
5. A partner who builds the machine.

---

## Technical specs

**Layout:** SectionWrapper with background="primary" glow="none" (custom dual glow instead).

**Headline:** font-display, text-5xl (48px), text-hero, tracking-[-0.02em], text-wrap: balance, mb-16

**Grid:** grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12

**Left column:**
- Label: font-body, text-sm (14px), font-medium, uppercase, text-scale-bright (#D94040), mb-6. NO background. NO border. Just text.
- Items: each with 3px left border `border-l-[3px]` in rgba(217,64,64,0.3), pl-4, mb-6
- Item text: font-body, text-lg (18px), text-secondary (#999999), leading-[1.8]

**Right column:**
- Label: font-body, text-sm, font-medium, uppercase, text-core-bright (#1A9BBF), mb-6
- Items: 3px left border rgba(26,155,191,0.3), pl-4, mb-6
- Item text: font-body, text-lg, text-body (#E8E8E8), leading-[1.8]

**Dual glow (NOT from SectionWrapper — custom):**
- Two absolute positioned divs, pointer-events-none, inset-0
- Left: `radial-gradient(ellipse at 25% 50%, rgba(154,21,21,0.06), transparent 60%)`
- Right: `radial-gradient(ellipse at 75% 50%, rgba(0,99,129,0.06), transparent 60%)`

**Animation:**
- Headline: ScrollReveal delay 0
- Left items: stagger — wrap in a parent motion.div with staggerChildren: 0.08, each item is a motion.div that fades up
- Right items: same stagger, but 200ms delay after left

**Mobile:** Grid stacks vertically. Left column first, right below. gap-12.

**Section id:** "problem"

**Imports:**
```tsx
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
```

---

**After building:** run `npm run dev

**HOW TO TEST VISUALLY:** Open src/app/dev/page.tsx. Add your component import at the top and render it inside the div. Visit localhost:3000/dev to see it. REVERT dev/page.tsx before pushing — don't commit your test import.`, scroll past hero.

Check:
- [ ] "Most agencies are a black box." headline visible
- [ ] Two columns: red-bordered left, teal-bordered right
- [ ] Left text is dimmer (#999), right text is brighter (#E8E8)
- [ ] Subtle red glow on left half, teal glow on right half
- [ ] Items stagger in on scroll
- [ ] Mobile: stacks cleanly, no horizontal overflow

**Only modify:** src/components/home/TheProblem.tsx. Don't touch any other file.

If SectionWrapper or ScrollReveal imports fail, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W1-TheProblem: built by Marina"
  git push origin wave1/marina-theproblem

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Marina)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
