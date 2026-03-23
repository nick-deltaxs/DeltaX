━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-018
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-018
  Name:      W2-Erfan-Favicon
  Title:     W2 — Favicon
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 2
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Erfan
  File:      public/favicon.svg (already exists — verify and improve if needed)
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-018.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave2/erfan-favicon

---

You're verifying the favicon works and adding an apple-touch-icon. A favicon already exists at `public/favicon.svg` — it's a DeltaX triangle mark (white on dark rounded square). Check that it loads in the browser tab.

**INTENT:** Every detail matters. Run 1 had NO favicon — the browser showed a generic icon. That screams "unfinished." A branded favicon is a trust signal — it means someone cared enough to do the small things.

---

## What to check

1. Open localhost:3000
2. Look at browser tab — does the DeltaX mark show up?
3. If YES → favicon.svg is working. Move to apple-touch-icon.
4. If NO → check that public/favicon.svg exists and the SVG is valid

## Apple Touch Icon (create if missing)

Create `public/apple-touch-icon.png` — a 180x180 PNG with:
- Dark background (#0A0A0B)
- White DeltaX triangle mark centered
- Rounded corners (iOS applies rounding automatically, but a 32px border-radius looks good)

If you can't generate a PNG in Windsurf, create a simple SVG at `public/apple-touch-icon.svg` with the same design as favicon.svg but at 180x180.

---

**After checking:** Browser tab shows ΔX mark. If not, tell me what's wrong instead of guessing.

**Only modify/create in:** public/ directory. Don't touch any other file.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W2-Erfan-Favicon: built by Erfan"
  git push origin wave2/erfan-favicon

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Erfan)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
