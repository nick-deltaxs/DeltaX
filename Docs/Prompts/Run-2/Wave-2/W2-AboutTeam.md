━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-016
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-016
  Name:      W2-AboutTeam
  Title:     W2 — About Page: Team Table + CTA
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 2
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  New Member
  File:      src/components/about/TeamTable.tsx (CREATE NEW), src/components/about/AboutCTA.tsx
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-016.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave2/new-member-aboutteam

---

You're building the full team table for the About page and the CTA at the bottom. The team table is NOT a grid of cards. NOT headshot circles. It's a proper table with rows — like a company directory. Colored dots show which pillar each person belongs to.

**INTENT:** Attio's text-first team display. Dots replace photos (DeltaX doesn't have professional headshots — and text-only looks more intentional than placeholder circles). Three tiers: founders, leaders, team — separated by thicker dividers.

---

## File 1: src/components/about/TeamTable.tsx (CREATE NEW)

SectionWrapper background="primary".

**Headline:** `The People.` — font-display, 48px, text-hero, mb-12

**Table header:** "NAME" | "ROLE" | "SECTION" — font-mono, 12px, uppercase, text-muted, tracking-[0.08em], pb-3, border-b border-elevated

**Grid per row:** grid grid-cols-[8px_1fr_1.5fr_1fr] gap-4 items-center

**3 tiers separated by double-height border (border-b-2 border-elevated):**
- Founders (Dave, Ramtin)
- Leaders (Nick, Steven, Masha, Vitaly, Yarik, Denis, Hassan)
- Team (Arvin, Arrom, Nazar, Marina, Katareina, Erfan, Goga)

**Each row:**
- Dot: w-2 h-2 rounded-full in pillar-bright color
- Name: font-body, 16px, font-medium, text-hero
- Role: font-body, 14px, text-body
- Section: font-body, 14px, in pillar-bright color (e.g., "CodeXs" in text-code-bright)
- Row: py-4, border-b border-elevated, hover:bg-tertiary, transition 150ms

**Data:** `import { team } from "@/data/team";` — map over the full array. Use `pillarColors` map for dot and section text colors.

Animation: rows stagger in 60ms on scroll.
Mobile: hide the grid. Show Name + Role stacked, Section as colored dot only.

## File 2: src/components/about/AboutCTA.tsx

Identical to home FinalCTA: centered logo (pulsing, 80px, opacity 0.6), "Ready to build?", subtext, gold "Start a Project" button, email link. SectionWrapper with glow="deltax". Copy it from FinalCTA's pattern.

---

**After building:** visit /about. Scroll to team — table rows with colored dots, 3 tiers. Then CTA at bottom.

**Only modify/create:** src/components/about/TeamTable.tsx (create), src/components/about/AboutCTA.tsx. Don't touch any other file. If team data import fails, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W2-AboutTeam: built by NewMember"
  git push origin wave2/new-member-aboutteam

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
