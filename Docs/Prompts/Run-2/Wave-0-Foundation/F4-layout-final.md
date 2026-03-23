━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-005
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-005
  Name:      F4-layout-final
  Title:     F4 — Layout Final Wiring
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 0
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Arvin
  File:      src/app/layout.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-005.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git pull origin main


This runs AFTER F1 (primitives), F2 (Navbar), F3 (Footer) are all done and working.

---

You're wiring the Navbar and Footer into the root layout so they appear on every page automatically. This is simple but critical — if you get the HTML structure wrong, accessibility and SEO break.

**INTENT:** Every page on thesx.co should have Navbar at top, page content in the middle, Footer at bottom. The Navbar and Footer are OUTSIDE of `<main>` — `<main>` wraps only the page-specific content. This is correct semantic HTML.

---

## Changes to make

Add these imports at the top of layout.tsx:
```tsx
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
```

Update the body content to include Navbar above main and Footer below:
```tsx
<MotionConfig reducedMotion="user">
  <Navbar />
  <main id="main">{children}</main>
  <Footer />
</MotionConfig>
```

Keep everything else that's already in layout.tsx — the fonts, metadata, hardware gating script, skip-to-content link, JSON-LD. Don't remove anything. Just add the Navbar and Footer imports and place them in the right spots.

---

**After building:** run `npm run dev`. Check:
- Every page has Navbar at top
- Every page has Footer at bottom
- Navigate between / and /about and /contact — Navbar and Footer persist
- Skip-to-content link (press Tab on page load) jumps to main content, past the Navbar
- Console: no errors

**Only modify:** src/app/layout.tsx. Don't touch any other file.

If Navbar or Footer components don't exist or have import errors, tell me — it means F2 or F3 wasn't done yet.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "F4-layout-final: built by Arvin"
  git push origin main

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Arvin)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
