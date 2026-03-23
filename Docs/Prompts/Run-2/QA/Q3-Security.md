━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-032
  QA PROMPT · RUN 2 · QA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-032
  Name:      Q3-Security
  Title:     Q3 — Security + Performance QA
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      QA
  Model:     GPT-5.3-Codex High
  Mode:      Plan → Implement
  Assigned:  Nick
  File:      See prompt body
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-032.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

## Before you start
```
git checkout main && git pull origin main
git checkout -b qa/nick-q3-security
npm run build
npm run dev
```

---

## Security Checklist

### Headers (check via browser DevTools → Network → Response Headers)
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: strict-origin-when-cross-origin
- [ ] Content-Security-Policy present
- [ ] Strict-Transport-Security present
- [ ] No X-Powered-By header

### API Routes
- [ ] /api/waitlist — POST only (GET returns 405)
- [ ] /api/contact — POST only (GET returns 405)
- [ ] No SUPABASE_SERVICE_ROLE_KEY in any client file (grep for it)
- [ ] Rate limiting works (submit twice quickly → 429)
- [ ] Email enumeration blocked (same response for new + existing)
- [ ] Honeypot works (submit with "website" field → silent 201)
- [ ] Input sanitization (no < > in stored data)

### Client code
- [ ] No API keys in client-side code (grep NEXT_PUBLIC_ only)
- [ ] No console.log in production code
- [ ] No TODO comments in code
- [ ] robots.ts blocks /api/
- [ ] DELETE src/app/dev/page.tsx (testing page — must not go to production)
- [ ] No SERVICE_ROLE_KEY in any file (grep -r "SERVICE_ROLE" src/)

### Dependencies
- [ ] Next.js ≥ 14.2.15 (check package.json)
- [ ] No known CVEs (run `npm audit`)

## Performance Checklist

### Build
- [ ] `npm run build` succeeds with 0 errors
- [ ] No TypeScript errors
- [ ] Bundle size reasonable (check .next/build output)

### Runtime
- [ ] Lighthouse Performance score ≥ 90
- [ ] No layout shift (CLS ≤ 0.1)
- [ ] Fonts load without FOUT (check Days One, Inter, JetBrains Mono)
- [ ] Images optimized (logos in public/ are reasonable size)
- [ ] No unnecessary re-renders (check React DevTools)

### SEO
- [ ] Every page has unique `<title>`
- [ ] Every page has `<meta name="description">`
- [ ] OG image loads (/api/og)
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] robots.txt accessible (/robots.txt)

Fix everything. Push with commit message: "QA: security and performance fixes"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "Q3-Security: built by Nick"
  git push origin qa/nick-q3-security

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
