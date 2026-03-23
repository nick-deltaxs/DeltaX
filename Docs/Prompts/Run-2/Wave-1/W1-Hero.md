━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-006
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-006
  Name:      W1-Hero
  Title:     W1 — Hero Section
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 1
  Model:     GPT-5.3-Codex High
  Mode:      Plan
  Assigned:  Nazar
  File:      src/components/home/Hero.tsx · **Fallback:** Sonnet 4.6
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-006.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave1/nazar-hero
cd Codebase && npm install

---

You're rebuilding the Hero — the first thing anyone sees when they visit thesx.co. This needs to hit hard with confidence and simplicity. No tricks. No cursor-tracking glow effects. No rotating logos. Those were in Run 1 and they made the site feel gimmicky instead of premium.

**INTENT:** Think Linear.dev meets Resend. When you land on Linear's homepage, you see their product, a headline, and a CTA. That's it. Massive confidence through restraint. Our hero is the same energy — logo mark, one headline, one subtext, two buttons. Dark space does the talking.

---

## What the user sees

Full viewport height, everything vertically centered on screen:

1. **DeltaX logo** — white triangle mark, 160px wide, centered
2. **Behind the logo** — subtle navy glow (the --glow-deltax variable, navy at 12% opacity)
3. **Headline below logo** — "Four engines. One system."
4. **Subtext below headline** — one paragraph explaining what DeltaX does
5. **Two pill buttons side by side** — gold "Start a Project" + ghost "See the System"
6. **Bouncing scroll arrow at bottom** — desktop only, subtle

The entire section has grid texture and vignette via SectionWrapper.

---

## Exact copy (don't change a single word)

- **Headline:** `Four engines. One system.`
- **Subtext:** `Strategy, engineering, design, and growth — working as one machine to build businesses that don't depend on their founders.`
- **CTA 1:** `Start a Project` (gold pill, links to /contact)
- **CTA 2:** `See the System` (ghost pill, scrolls to #system)

---

## Technical specs

**Layout:** SectionWrapper with glow="deltax". min-h-screen, flex flex-col items-center justify-center, text-center.

**Logo:** `<DeltaXLogo size={160} className="text-text-hero mb-8" />`

**Headline:** font-display, clamp(48px, 6vw, 64px), text-hero, tracking-[-0.03em], text-wrap: balance

**Subtext:** font-body, text-xl (20px), text-body, max-w-[600px], mx-auto, leading-[1.6], mt-6

**Buttons:** flex gap-4 mt-8. Button 1: variant="primary" size="large" href="/contact". Button 2: variant="secondary" size="large" href="#system"

**Scroll indicator:** div at bottom with a chevron-down SVG (20px, text-muted), bounce-indicator class (infinite bounce from globals.css). Hidden on mobile: `hidden md:block`. Appears with delay 1200ms.

**Animation stagger (via ScrollReveal):**
- Logo: delay 0, direction="up" (800ms via custom initial={{ opacity: 0 }})
- Headline: delay 0.2
- Subtext: delay 0.4
- Buttons: delay 0.6
- Scroll indicator: delay 1.2

**Mobile (below md):**
- Logo: 120px
- Headline: clamps down to ~40px
- Subtext: 18px
- Buttons: flex-col w-full gap-3 (stack vertically, full-width)
- Scroll indicator: hidden

**Section id:** "hero"

**Imports:**
```tsx
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";
```

---

**After building:** run `npm run dev

**HOW TO TEST VISUALLY:** Open src/app/dev/page.tsx. Add your component import at the top and render it inside the div. Visit localhost:3000/dev to see it. REVERT dev/page.tsx before pushing — don't commit your test import.`, open localhost:3000.

Check:
- [ ] Full viewport dark section with grid texture visible
- [ ] Logo centered, white, 160px, subtle navy glow behind it
- [ ] "Four engines. One system." in Days One font below
- [ ] Subtext paragraph below that in Inter
- [ ] Two pill buttons: gold left, ghost right (desktop), stacked (mobile)
- [ ] Bouncing arrow at bottom (desktop), hidden (mobile)
- [ ] Click "Start a Project" → /contact
- [ ] Click "See the System" → smooth scroll to #system (won't work until TheSystem exists, that's fine)

**Only modify:** src/components/home/Hero.tsx. Don't touch any other file.

If any component import doesn't resolve or types don't match, tell me instead of guessing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W1-Hero: built by Nazar"
  git push origin wave1/nazar-hero

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Nazar)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
