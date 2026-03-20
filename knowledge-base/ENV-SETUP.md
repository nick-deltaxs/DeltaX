# DeltaX — Environment Variables Setup

> **This file documents the env var structure. Actual keys are shared privately by the project owner.**
> **NEVER commit actual keys to git.**

---

## Required `.env.local` File

Create this file inside `codebase/.env.local` — it is gitignored.

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://nbkbcntkqkmlpuwulmub.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<ask project owner>
SUPABASE_SERVICE_ROLE_KEY=<ask project owner>

# Resend (backend dev sets this up)
RESEND_API_KEY=<created by backend dev on resend.com>

# Site
NEXT_PUBLIC_SITE_URL=https://thesx.co
```

---

## Supabase Details

| Property | Value |
|----------|-------|
| Organization | DeltaX Org |
| Project name | DeltaX Landing Project |
| Project ID | `nbkbcntkqkmlpuwulmub` |
| Region | (check dashboard) |
| URL | `https://nbkbcntkqkmlpuwulmub.supabase.co` |
| Dashboard | `https://supabase.com/dashboard/project/nbkbcntkqkmlpuwulmub` |

---

## Who Needs What

| Role | Needs These Vars | How They Get Them |
|------|-----------------|-------------------|
| **All frontend devs** | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | From project owner (shared securely) |
| **Backend dev** | All Supabase vars + `RESEND_API_KEY` | From project owner + creates Resend account |
| **Deploy dev** | All vars | Sets them in Vercel dashboard → Settings → Environment Variables |

---

## Key Types Explained

| Key | Prefix | Visible to Browser? | Use |
|-----|--------|---------------------|-----|
| `NEXT_PUBLIC_SUPABASE_URL` | `NEXT_PUBLIC_` | Yes | Client-side Supabase connection |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `NEXT_PUBLIC_` | Yes | Client-side queries (limited by RLS) |
| `SUPABASE_SERVICE_ROLE_KEY` | None | No (server only) | Server-side admin operations (API routes) |
| `RESEND_API_KEY` | None | No (server only) | Sending emails from API routes |

---

## Database Table (Backend dev creates this)

Run this in Supabase SQL Editor (`https://supabase.com/dashboard/project/nbkbcntkqkmlpuwulmub/sql`):

```sql
-- Contact form submissions (per V3 spec)
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  challenge TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy: only server (service_role) can insert
CREATE POLICY "Service role can insert" ON contacts
  FOR INSERT
  WITH CHECK (true);

-- Policy: only server can read
CREATE POLICY "Service role can read" ON contacts
  FOR SELECT
  USING (true);
```

---

## Security Checklist

- [ ] `.env.local` is in `.gitignore` (Next.js does this by default)
- [ ] No keys committed to git history
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is NEVER used in client-side code
- [ ] `RESEND_API_KEY` is NEVER used in client-side code
- [ ] RLS is enabled on all tables
- [ ] Keys are set in deployment platform (Vercel) for production

---

## Sharing Keys With Team

The project owner shares actual key values through:
- Encrypted DM (Signal, WhatsApp, etc.)
- Password manager (1Password, Bitwarden shared vault)
- NOT through: git, Slack messages, email, or plain text files in the repo
