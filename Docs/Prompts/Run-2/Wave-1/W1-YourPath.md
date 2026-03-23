━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-010
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-010
  Name:      W1-YourPath
  Title:     W1 — Your Path Section
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 1
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Nick
  File:      src/components/home/YourPath.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-010.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave1/nick-yourpath

---

You're building Your Path — a 3-step timeline showing how a client goes from first conversation to running system. The timeline draws downward as you scroll, and each step lights up when the line reaches it.

**INTENT:** Railway's step-by-step flow + Stripe Atlas's numbered progression. The color moves from cool (teal) through neutral (gray) to warm (gold) — creating an emotional arc from "let's talk" to "you're growing." It's a journey, not a list.

---

## What the user sees

```
[04] YOUR PATH

Three steps. One conversation.

◉ ─── STEP 01
│     Talk to us.
│     A 30-minute call. No pitch deck. Just your
│     challenges and our honest assessment.
│
◉ ─── STEP 02
│     We audit your system.
│     CoreXs maps your business. Where you're
│     leaking time, money, and opportunity.
│
◉ ─── STEP 03
      We build the machine.
      All four engines activate. You watch the
      system work while you focus on what matters.
```

---

## Exact copy

**Overline:** `[04] YOUR PATH`
**Headline:** `Three steps. One conversation.`

| Step | Label | Title | Description |
|------|-------|-------|-------------|
| 01 | STEP 01 (teal) | Talk to us. | A 30-minute call. No pitch deck. Just your challenges and our honest assessment. |
| 02 | STEP 02 (gray) | We audit your system. | CoreXs maps your business. Where you're leaking time, money, and opportunity. |
| 03 | STEP 03 (gold) | We build the machine. | All four engines activate. You watch the system work while you focus on what matters. |

---

## Technical specs

**Layout:** SectionWrapper background="primary" glow="gold". Timeline left-aligned within container, pl-8 md:pl-12.

**Vertical line:** absolute, left-[11px] md:left-[15px], top-0 bottom-0, w-px, bg-elevated

**Step circles:** w-3 h-3, rounded-full, absolute positioned on the line
- Step 1: bg-core-bright (teal)
- Step 2: bg-code-bright (gray)
- Step 3: bg-accent-gold (gold)

**Step label:** font-mono, text-xs (12px), uppercase, tracking-[0.08em], color matches circle

**Step title:** font-display, text-2xl (24px), text-hero, mt-2

**Step description:** font-body, text-base (16px), text-secondary, mt-2, max-w-[480px]

**Gap between steps:** mb-16 (mb-12 on mobile)

**Animation:**
- Timeline line: motion.div with scaleY 0→1, transformOrigin: "top", 1200ms ease-reveal
- Steps: each fades in as line reaches their position, stagger ~300ms
- Circles: scale 0→1.2→1, 400ms spring

**Section id:** "path"

---

**After building:** scroll to this section. Check timeline draws down, steps fade in sequentially, circles are teal → gray → gold. Mobile: same layout (already vertical).

**Only modify:** src/components/home/YourPath.tsx. If imports fail, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W1-YourPath: built by Nick"
  git push origin wave1/nick-yourpath

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Nick)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
