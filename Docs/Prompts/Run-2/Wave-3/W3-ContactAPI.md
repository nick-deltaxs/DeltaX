━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗██╗  ████████╗ █████╗ ██╗  ██╗
  ██╔══██╗██╔════╝██║  ╚══██╔══╝██╔══██╗╚██╗██╔╝       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║█████╗  ██║     ██║   ███████║ ╚███╔╝        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██║  ██║██╔══╝  ██║     ██║   ██╔══██║ ██╔██╗        ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ██████╔╝███████╗███████╗██║   ██║  ██║██╔╝ ██╗       ║▌▐▌ ▌▐▌▌▐ ▌▐▌▐ ▌▐ ▐▌▌▐║
  ╚═════╝ ╚══════╝╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝        PRO-DLX-R2-023
  WINDSURF BUILD PROMPT · RUN 2 · WAVE 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


  Serial:    PRO-DLX-R2-023
  Name:      W3-ContactAPI
  Title:     W3 — Contact API Route
  Project:   DeltaX Website (thesx.co)
  Run:       Run 2
  Wave:      Wave 3
  Model:     GPT-5.3-Codex High
  Mode:      Plan
  Assigned:  Erfan
  File:      src/app/api/contact/route.ts
  Barcode:   07-DNA/06-Barcode/_generated/png/PRO-DLX-R2-023.png
  Issued:    2026-03-24

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══ PASTE INTO CASCADE FROM HERE ═══

Before anything: `git checkout main && git pull origin main
git checkout -b wave3/erfan-contactapi
cd Codebase && npm install

---

You're rewriting the contact form API. Same security approach as waitlist — anon key, Supabase rate limiting, input sanitization, honeypot. Plus it sends a notification email via Resend so Dave knows someone reached out.

**INTENT:** Two things happen on submit: (1) data saved to Supabase, (2) notification email sent to hello@thesx.co. If the email fails, the submission still succeeds — never lose a lead because of an email delivery issue. Sanitize everything — strip HTML tags before storing (prevents XSS if an admin dashboard ever reads this data).

---

## Exact implementation

```typescript
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim().slice(0, 1000);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, challenge, website } = body;

    if (website) {
      return NextResponse.json({ message: "Message sent" }, { status: 201 });
    }

    if (!name || !email || !challenge) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const sanitizedData = {
      name: sanitize(name),
      email: email.toLowerCase().trim(),
      company: company ? sanitize(company) : "",
      challenge: sanitize(challenge),
    };

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    const { data: recent } = await supabase
      .from("contact_submissions")
      .select("created_at")
      .eq("ip_address", ip)
      .gte("created_at", new Date(Date.now() - 300000).toISOString())
      .limit(1);

    if (recent && recent.length > 0) {
      return NextResponse.json({ error: "Please wait before submitting again" }, { status: 429 });
    }

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({ ...sanitizedData, ip_address: ip });

    if (dbError) {
      console.error("Contact insert error:", dbError);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    try {
      await resend.emails.send({
        from: "DeltaX <noreply@thesx.co>",
        to: "hello@thesx.co",
        subject: `New contact: ${sanitizedData.name} from ${sanitizedData.company || "N/A"}`,
        text: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nCompany: ${sanitizedData.company || "Not provided"}\nChallenge: ${sanitizedData.challenge}`,
      });
    } catch {
      console.error("Resend error — submission saved but notification not sent");
    }

    return NextResponse.json({ message: "Message sent" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
```

---

**After building:** test locally (will fail without real keys — expected). The code structure is what matters.

**Only modify:** src/app/api/contact/route.ts. If `contact_submissions` table doesn't exist in Supabase, tell me.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  GIT: COMMIT AND PUSH (run in your terminal, not Cascade)
  ─────────────────────────────────────────
  After verifying everything works:

  git add -A
  git commit -m "W3-ContactAPI: built by Erfan"
  git push origin wave3/erfan-contactapi

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
