━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-011
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-011
  Name:      W1-FinalCTA
  Title:     W1 — Final CTA Section
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 1
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  New Member
  File:      src/components/home/FinalCTA.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-011.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave1/new-member-finalcta
cd Codebase && npm install

---

You're building the Final CTA — the last thing visitors see before the footer. It's the bookend to the Hero. Same navy glow, same logo, but quieter — like the ending of a symphony. One CTA. No form. If they've scrolled this far, they're ready to click, not fill out fields.

**INTENT:** Dub uses the same CTA text in hero and final section — "repetition anchoring." Superhuman has a single-CTA confidence pattern — one button, no alternatives, no distractions. The logo here is dimmer than the hero (opacity 0.6) with a subtle pulse — like a heartbeat. It's piano, not forte.

---

## What the user sees

```
         [DeltaX logo, dimmed, pulsing]

             Ready to build?

    One conversation. No commitments. Just clarity.

            [ Start a Project ]

          or email hello@thesx.co
```

---

## Exact copy

- **Headline:** `Ready to build?`
- **Subtext:** `One conversation. No commitments. Just clarity.`
- **CTA:** `Start a Project` (gold pill, links to /contact)
- **Below CTA:** `or email ` + `hello@thesx.co` (gold, mailto link)

---

## Technical specs

**Layout:** SectionWrapper background="primary" glow="deltax". Everything centered: flex flex-col items-center text-center.

**Logo:** DeltaXLogo size={80}, className="text-text-hero opacity-60 glow-breathe mb-8"

**Headline:** font-display, text-5xl (48px), text-hero, tracking-[-0.02em], mb-4

**Subtext:** font-body, text-lg (18px), text-secondary, mb-8

**CTA:** Button variant="primary" size="large" href="/contact"

**Email:** mt-4. `<span className="font-body text-sm text-text-muted">or email </span><a href="mailto:hello@thesx.co" className="font-body text-sm text-accent-gold hover:underline">hello@thesx.co</a>`

**Animation:** Logo fade in 600ms. Headline + subtext + CTA: ScrollReveal stagger 200ms.

**Mobile:** Same layout. CTA full-width. Logo 60px.

**Section id:** "cta"

---

**After building:** check pulsing logo, gold button, email link opens mail client. Navy glow matches hero — bookend symmetry.

**Only modify:** src/components/home/FinalCTA.tsx. If imports fail, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W1-FinalCTA: built by NewMember"
  git push origin wave1/new-member-finalcta

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (New Member)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
