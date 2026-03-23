━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-031
  QA PROMPT · RUN 2 · QA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-031
  Name:      Q2-Accessibility
  Title:     Q2 — Accessibility QA (WCAG 2.1 AA)
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      QA
  Model:     Claude Sonnet 4.6
  Mode:      Plan → Implement
  Assigned:  Nick
  File:      See prompt body
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-031.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

## Before you start
```
git checkout main && git pull origin main
git checkout -b qa/nick-q2-accessibility
cd Codebase && npm install
npm run dev
```

---

## Checklist — Fix everything that fails:

### Forms
- [ ] Every input has a visible `<label>` element
- [ ] Labels linked via htmlFor/id
- [ ] Required fields marked with asterisk + aria
- [ ] Error messages have role="alert" or aria-live="polite"
- [ ] Success messages have aria-live="polite"
- [ ] Honeypot field has aria-hidden="true"

### Navigation
- [ ] Navbar has `<nav>` with aria-label="Main navigation"
- [ ] Mobile menu has aria-expanded on trigger button
- [ ] Mobile menu has focus trap (Tab cycles within)
- [ ] Escape key closes mobile menu
- [ ] Focus returns to hamburger button on close
- [ ] Skip-to-content link works (Tab on page load)

### Headings
- [ ] One h1 per page
- [ ] Heading hierarchy: h1 → h2 → h3 (no skips)
- [ ] No duplicate heading text on same page

### Images & Icons
- [ ] DeltaXLogo has aria-label
- [ ] Decorative elements have aria-hidden="true"
- [ ] All icon buttons have aria-label

### Color & Contrast
- [ ] Body text (#E8E8E8 on #0A0A0B) = 15.3:1 ✓
- [ ] Secondary text (#999 on #0A0A0B) = check ≥ 4.5:1
- [ ] Muted text (#666 on #0A0A0B) = check ≥ 4.5:1
- [ ] Gold on dark (#f0b429 on #0A0A0B) = check ≥ 4.5:1
- [ ] Gold button text (#0A0A0B on #f0b429) = check ≥ 4.5:1

### Motion
- [ ] MotionConfig reducedMotion="user" is in layout.tsx
- [ ] CSS animations have @media (prefers-reduced-motion: reduce)
- [ ] No auto-playing video or audio
- [ ] Scroll indicator bounce respects reduced motion

### Keyboard
- [ ] Tab through entire site — all interactive elements reachable
- [ ] Focus ring visible on all focusable elements (gold outline)
- [ ] No focus traps (except intentional mobile menu)
- [ ] Enter/Space activates buttons and links

### Semantic HTML
- [ ] `<main>` wraps page content
- [ ] `<nav>` for navigation
- [ ] `<footer>` for footer
- [ ] `<section>` with meaningful id for each home section
- [ ] `<article>` for story/blog content if applicable

Fix everything. Push with commit message: "QA: accessibility fixes"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "Q2-Accessibility: built by Nick"
  git push origin qa/nick-q2-accessibility

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
