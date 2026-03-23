━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-020
  SPOT CHECK PROMPT · RUN 2 · WAVE 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-020
  Name:      W2-Arrom-SpotCheck
  Title:     W2 — Arrom + Erfan: Prepare Backend Tables
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 2
  Model:     Kimi K2.5
  Mode:      Plan
  Assigned:  Arrom
  File:      See prompt body
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-020.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

## Task

Before Wave 3 backend work, verify Supabase tables exist.

Go to the Supabase dashboard. Check:

1. **waitlist** table exists with columns:
   - id (uuid, primary key)
   - email (text, unique)
   - ip_address (text)
   - created_at (timestamp with timezone, default now())

2. **contact_submissions** table exists with columns:
   - id (uuid, primary key)
   - name (text)
   - email (text)
   - company (text)
   - challenge (text)
   - ip_address (text)
   - created_at (timestamp with timezone, default now())

3. RLS (Row Level Security) is enabled on both tables.
4. Anon key can INSERT into both tables (create a policy).

If tables don't exist, create them. If they exist from Run 1, verify columns match.

SQL to create if needed:
```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  challenge TEXT NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert" ON waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anon insert" ON contact_submissions FOR INSERT WITH CHECK (true);
```

Also: verify `.env.local` has real Supabase URL + anon key on everyone's machine.

## This is a Supabase task, not a Windsurf task. Do it in the browser.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Arrom)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
