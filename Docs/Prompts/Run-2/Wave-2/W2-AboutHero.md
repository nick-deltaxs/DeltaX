━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-015
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-015
  Name:      W2-AboutHero
  Title:     W2 — About Page: Hero + Story
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 2
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Katareina
  File:      src/components/about/AboutHero.tsx, src/components/about/Story.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-015.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave2/katareina-abouthero

---

You're building two sections for the About page. The hero is short (70vh, not full screen) with 4 subtle pillar glows in the corners. The story is a single-column editorial layout — like a magazine article. Wealthsimple's "about us" feel — centered text, generous whitespace, one pull quote in gold.

**INTENT:** The About page is where DeltaX earns trust through story. Not bullet points. Not feature lists. A human narrative about why the company exists, what they discovered, and where they are now. The pull quote is the emotional anchor — it's the one line visitors remember.

---

## File 1: src/components/about/AboutHero.tsx

70vh height, centered. No SectionWrapper (simpler).

**Headline:** `The System Behind the System.` — font-display, clamp(40px,6vw,56px), text-hero, text-center, tracking-[-0.03em], text-wrap: balance

**Subtext:** `DeltaX was built on one belief: businesses should run on systems, not on founders.` — font-body, 20px, text-body, max-w-[640px], mx-auto, text-center, leading-[1.6], mt-6

**4 corner glows:** absolute divs at 0.04 opacity each — core top-left, code top-right, scale bottom-left, style bottom-right. Each ~300px radial gradient. pointer-events-none.

Animation: headline fade-up 600ms, subtext 200ms delay, glows fade in 1200ms.
Mobile: headline 36px, subtext 18px.

## File 2: src/components/about/Story.tsx

SectionWrapper background="secondary".

Single column: max-w-[720px] mx-auto. This is optimal reading width (~65 characters per line — validated across all research sets).

**Paragraph 1:** "DeltaX started with a question: why does every growing business need four different agencies that never talk to each other? Dave Benrouz and Ramtin Ghaffary spent years watching companies waste money on disconnected teams — one for strategy, one for code, one for marketing, one for design. The result was always the same: friction, delays, and a founder stuck managing it all."

**Gap:** 32px

**Paragraph 2:** "The answer wasn't better agencies. It was a system. Four engines — CoreXs for strategy, CodeXs for engineering, ScaleXs for growth, StyleXs for design — built to operate independently but feed into each other. Inside CodeXs, two dev teams compete on every build. The best code wins. Quality isn't a process — it's a structure."

**Gap:** 48px

**Pull quote:** "We don't hire people to fill roles. We build engines that make roles unnecessary."
- 3px left border in accent-gold, pl-6
- font-body italic, text-2xl (24px), text-body, max-w-[600px]

**Gap:** 48px

**Paragraph 3:** "Today, DeltaX is a team of 16 specialists across four countries. Every engine has a lead. Every project runs through the same system. And every founder who works with us gets one thing they've never had before: time to focus on what actually matters."

All paragraphs: font-body, text-base (16px), text-body, leading-[1.6].

Animation: paragraphs fade up stagger 200ms. Pull quote slides in from left 600ms.

---

**After building:** visit /about. Hero with corner glows. Scroll to story — editorial paragraphs, gold-bordered pull quote, generous spacing.

**Only modify:** src/components/about/AboutHero.tsx, src/components/about/Story.tsx. Don't touch any other file. If imports fail, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W2-AboutHero: built by Katareina"
  git push origin wave2/katareina-abouthero

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Katareina)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
