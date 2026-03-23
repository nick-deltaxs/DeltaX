━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-022
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-022
  Name:      W3-WaitlistAPI
  Title:     W3 — Waitlist API Route
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 3
  Model:     GPT-5.3-Codex High
  Mode:      Plan
  Assigned:  Arrom
  File:      src/app/api/waitlist/route.ts
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-022.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave3/arrom-waitlistapi
cd Codebase && npm install

---

You're rewriting the waitlist API route. Run 1 had 4 critical security bugs here: service role key used (bypasses all RLS), no rate limiting (email bombing vector), email enumeration (409 for existing = attackers can probe), and no bot protection. We fix ALL of them.

**INTENT:** Security first. This endpoint is public — anyone on the internet can POST to it. Treat it like a door with a lock, not an open window. Use the anon key (NEVER service role), rate limit via Supabase timestamps (NOT in-memory — serverless resets memory), and always return the same response whether the email exists or not (prevents enumeration).

---

## Exact implementation

```typescript
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, website } = body;

    if (website) {
      return NextResponse.json({ message: "Success" }, { status: 201 });
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const sanitizedEmail = email.toLowerCase().trim();
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    const { data: recent } = await supabase
      .from("waitlist")
      .select("created_at")
      .eq("ip_address", ip)
      .gte("created_at", new Date(Date.now() - 60000).toISOString())
      .limit(1);

    if (recent && recent.length > 0) {
      return NextResponse.json({ error: "Please wait before submitting again" }, { status: 429 });
    }

    const { error } = await supabase
      .from("waitlist")
      .upsert(
        { email: sanitizedEmail, ip_address: ip },
        { onConflict: "email", ignoreDuplicates: true }
      );

    if (error) {
      console.error("Waitlist insert error:", error);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
```

**Key security rules:**
- NEVER use SUPABASE_SERVICE_ROLE_KEY
- Always return 201 for both new AND existing emails (no enumeration)
- Honeypot returns same 201 (bots can't tell the difference)
- Rate limit via Supabase query, not in-memory Map

---

**After building:** test with `curl -X POST http://localhost:3000/api/waitlist -H "Content-Type: application/json" -d '{"email":"test@test.com"}'`. Should return 201. Same email again → still 201.

**Only modify:** src/app/api/waitlist/route.ts. If the `waitlist` table doesn't exist in Supabase, tell me — someone needs to create it.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W3-WaitlistAPI: built by Arrom"
  git push origin wave3/arrom-waitlistapi

  Then create a Pull Request on GitHub.
  Arvin will review and merge. DO NOT merge yourself.
  SIGN-OFF
  ─────────────────────────────────────────
  □ Built by:    ________________  (Arrom)
  □ Reviewed by: ________________  (Arvin)
  □ QA by:       ________________  (Nick)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  © DeltaX · CodeXs · "Every paste builds the future."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
