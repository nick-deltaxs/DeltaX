━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-027
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-027
  Name:      W3-Middleware
  Title:     W3 — Middleware Verification
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 3
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  New Member
  File:      middleware.ts (project root)
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-027.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave3/new-member-middleware

---

The middleware.ts already exists with CSP security headers. Your job is to VERIFY it works and doesn't break anything — especially Google Fonts. In our simulation, the #1 risk was CSP being too strict and blocking Days One / Inter / JetBrains Mono from loading.

**INTENT:** Security headers protect against XSS, clickjacking, and content sniffing. But they're useless if they break the site. The balance: strict enough to protect, permissive enough for Google Fonts and Supabase to work.

---

## What to check

1. Run `npm run dev`
2. Open localhost:3000
3. **FONTS TEST:**
   - Headlines should be in Days One (distinctive blocky display font)
   - Body text should be in Inter (clean sans-serif)
   - If you see Times New Roman or generic sans-serif → CSP is blocking fonts
4. **API TEST:**
   - Visit /api/og in browser → should render an image (not a CSP error)
   - If ContactForm exists, try submitting → should reach /api/contact
5. **HEADER TEST:**
   - Open DevTools → Network tab → click any request → check Response Headers
   - Should see: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options
   - Should NOT see: X-Powered-By

## If fonts DON'T load

Update the CSP in middleware.ts to add:
```
font-src 'self' fonts.gstatic.com fonts.googleapis.com data:
style-src 'self' 'unsafe-inline' fonts.googleapis.com
```

## If fonts DO load

Don't change anything. The middleware is correct.

---

**Only modify:** middleware.ts (ONLY if fonts are broken). Don't touch any other file. If you're unsure whether fonts are loading correctly, tell me — don't guess.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W3-Middleware: built by NewMember"
  git push origin wave3/new-member-middleware

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
