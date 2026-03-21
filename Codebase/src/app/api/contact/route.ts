import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 3;

const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, challenge, website } = body;

    // Honeypot check
    if (website && (website as string).trim()) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Validation
    const trimmedName = (name || "").trim();
    const trimmedEmail = (email || "").trim().toLowerCase();
    const trimmedCompany = (company || "").trim();
    const trimmedChallenge = (challenge || "").trim();

    if (
      !trimmedName ||
      trimmedName.length > 100 ||
      !trimmedEmail ||
      trimmedEmail.length > 254 ||
      !EMAIL_REGEX.test(trimmedEmail) ||
      trimmedCompany.length > 100 ||
      !trimmedChallenge ||
      trimmedChallenge.length > 500
    ) {
      return NextResponse.json(
        { error: "Invalid input." },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { error: insertError } = await supabase
      .from("contacts")
      .insert({
        name: trimmedName,
        email: trimmedEmail,
        company: trimmedCompany || null,
        challenge: trimmedChallenge,
        created_at: new Date().toISOString(),
      });

    if (insertError) {
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }

    // Send notification email
    try {
      const emailText = `New contact form submission:

Name: ${trimmedName}
Email: ${trimmedEmail}
Company: ${trimmedCompany || "N/A"}
Challenge: ${trimmedChallenge}`;

      await resend.emails.send({
        from: "DeltaX <notifications@thesx.co>",
        to: "contact@thesx.co",
        subject: `New contact: ${trimmedName}`,
        text: emailText,
      });
    } catch {
      // Email sending failure should not fail the request
    }

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
