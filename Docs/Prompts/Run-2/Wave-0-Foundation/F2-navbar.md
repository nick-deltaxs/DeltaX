━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-003
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 0

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-003
  Name:      F2-navbar
  Title:     F2 — Navbar
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 0
  Model:     GPT-5.3-Codex High
  Mode:      Plan
  Assigned:  Arvin
  File:      src/components/shared/Navbar.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-003.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git pull origin main


---

You're rebuilding the Navbar for thesx.co. This is one of the most complex components — it has glassmorphic scroll behavior, a Services mega-menu showing all 4 pillars, mobile hamburger with focus trap, and proper keyboard navigation. Take your time with this one.

**INTENT:** Think Mercury (the banking app) — when you scroll, the nav goes from transparent to frosted glass. That floating glass effect screams premium. The mega-menu is inspired by Vercel — when you hover "Services", you see all 4 pillars with descriptions. It turns navigation into education.

---

## What the user sees

**Desktop (md and up):**
```
[X] DELTAX          Services ▾    About    Contact    [Start a Project]
```

- Left: DeltaXLogo (link to /) + "DELTAX" wordmark (font-display, 16px, text-hero, tracking-[0.08em], uppercase)
- Center: nav links (font-body, 16px, text-text-secondary, hover: text-text-body, transition 150ms)
  - "Services" has a small ▾ chevron, opens mega-menu on hover
  - "About" links to /about
  - "Contact" links to /contact
- Right: Button component, variant="primary", size="small", href="/contact", text: "Start a Project"
- Height: 64px
- Position: fixed, top-0, z-50, full width

**Scroll behavior:**
- Default (at top): bg-transparent, no border
- After scrolling > 80px: bg-primary/85, backdrop-blur-[12px], border-b border-elevated/50
- Transition: 300ms ease

**Services mega-menu (appears on hover/click):**
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [▲] CoreXs                  [◉] CodeXs        │
│  Strategy & Audit             Engineering & Build│
│                                                 │
│  [▼] ScaleXs                SX  StyleXs         │
│  Growth & Marketing           Design & Brand     │
│                                                 │
└─────────────────────────────────────────────────┘
```
- bg-secondary, border border-elevated, rounded-lg, p-6, shadow-lg
- 2x2 grid, gap-6
- Pillar logos: 28px (use img from /logos/ for Core/Code/Scale, "SX" text in font-display for Style)
- Pillar name: font-body, 16px, font-medium, text-hero
- Description: font-body, 14px, text-secondary
- Each item links to `/#system`

**Mobile (below md):**
- Logo left, hamburger icon right (3 horizontal lines, 24px)
- NO CTA button in mobile header
- Hamburger opens full-screen overlay:
  - bg-primary, z-50, full screen
  - Close button (X) top-right
  - First item: "Start a Project" — gold pill button, full-width
  - Then: "Services" (tap to expand accordion), "About", "Contact"
  - Nav items: h-12, font-body, 18px, text-body
  - Focus trap: Tab key cycles within the overlay (never escapes to page behind)
  - Escape key closes the menu
  - On close, focus returns to hamburger button
  - aria-expanded on hamburger, aria-label on the mobile menu panel

**Imports:**
```tsx
import { DeltaXLogo } from "@/components/ui/DeltaXLogo";
import { Button } from "@/components/ui/Button";
```

---

**After building:** run `npm run dev`. Check:
- Navbar visible at top of page
- Scroll down → glass effect appears smoothly
- Hover "Services" → mega-menu opens with 4 pillars
- Click "Start a Project" → navigates to /contact
- Resize to 375px → hamburger appears, nav links hide
- Tap hamburger → overlay opens, focus trapped inside
- Press Escape → menu closes, focus returns to hamburger
- Tab through menu → all items reachable, focus ring visible

**Only modify:** src/components/shared/Navbar.tsx. Don't touch any other file.

If the Button or DeltaXLogo components don't exist yet or have different props than expected, tell me instead of creating workarounds.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "F2-navbar: built by Arvin"
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
