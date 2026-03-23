━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-030
  QA PROMPT · RUN 2 · QA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-030
  Name:      Q1-Responsive
  Title:     Q1 — Responsive QA
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      QA
  Model:     Claude Sonnet 4.6
  Mode:      Plan → Implement
  Assigned:  Nick
  File:      See prompt body
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-030.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

## Before you start
```
git checkout main && git pull origin main
git checkout -b qa/nick-q1-responsive
cd Codebase && npm install
npm run build
npm run dev
```

---

## Task

Test every page at 6 breakpoints. Fix any issues found.

## Breakpoints to test
- 375px (iPhone SE)
- 640px (sm)
- 768px (md — tablet)
- 1024px (lg — laptop)
- 1280px (xl — desktop)
- 1536px (2xl — wide)

## For each page (Home, About, Contact, Privacy, Terms, 404):

At each breakpoint check:
1. No horizontal overflow (no sideways scroll)
2. Text readable (not too small, not cut off)
3. Images/logos properly sized
4. Buttons touchable (min 44px tap target)
5. Grid layouts collapse properly (md breakpoint)
6. Navigation works (hamburger on mobile, full nav on desktop)
7. Forms usable (inputs full-width on mobile)
8. Tables readable (stack on mobile)

## Home page specific:
- Hero: CTAs stack on mobile, side-by-side on desktop
- Problem: 55/45 split → stacked on mobile
- System: tabs scrollable on mobile
- Proof: stats stack on mobile, staggered sizes still visible
- Architects: co-founders stack, team wraps
- Path: timeline works at all sizes

## Fix anything broken. Create a list of all changes made.

Push changes with commit message: "QA: responsive fixes"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "Q1-Responsive: built by Nick"
  git push origin qa/nick-q1-responsive

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
