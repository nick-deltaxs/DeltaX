━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-004
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-004
  Name:      F3-footer
  Title:     F3 — Footer
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 0
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Arvin
  File:      src/components/shared/Footer.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-004.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git pull origin main


---

You're rebuilding the Footer for thesx.co. Simple 4-column layout on the darkest background. No social media links — DeltaX doesn't have social accounts yet, and dead links look worse than no links.

**INTENT:** Railway's footer — clean, organized, no clutter. The footer is the last thing someone sees. It should feel grounded and professional, not like an afterthought.

---

## What the user sees

```
bg-deep (#080809) — the darkest background on the site
padding: 64px top, 32px bottom
max-width: 1200px, centered

4 columns:

DELTAX               SERVICES          COMPANY        LEGAL
[X] DeltaXLogo 24px  CoreXs            About          Privacy
thesx.co             CodeXs            Contact        Terms
                     ScaleXs
hello@thesx.co       StyleXs
↑ gold, mailto link
```

**Column 1 (brand, ~35% width):**
- DeltaXLogo component, size={24}, text-text-muted
- "thesx.co" below — font-body, 14px, text-muted
- Below that: "hello@thesx.co" — font-body, 14px, text-accent-gold, hover:underline, `<a href="mailto:hello@thesx.co">`

**Columns 2-4 (~21% each):**
- Headers: font-body, 14px, uppercase, font-semibold, text-secondary, mb-4
- Links: font-body, 14px, text-muted, hover:text-body, transition 150ms, line-height: 2.0

**Link destinations:**
- Service links → `/#system` (scroll to system section on home)
- About → `/about`
- Contact → `/contact`
- Privacy → `/privacy`
- Terms → `/terms`

**Divider:** 1px border-t border-elevated, mt-12 mb-6

**Copyright:** "© 2026 DeltaX. All rights reserved." — font-body, 12px, text-muted, text-center

**Mobile:** 2x2 grid — Brand + Services top row, Company + Legal bottom row. Email link stays under brand column.

**Imports:**
```tsx
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
```

---

**After building:** run `npm run dev`. Check:
- Footer at bottom of every page
- 4 clean columns on desktop
- "hello@thesx.co" in gold opens email client
- All links go to real pages (no href="#" anywhere)
- 2x2 grid on mobile
- Copyright centered at very bottom

**Only modify:** src/components/shared/Footer.tsx. Don't touch any other file.

If DeltaXLogo or any import doesn't resolve, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "F3-footer: built by Arvin"
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
