import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WELCOME_EMAIL_TEXT = `You've secured your spot.

DeltaX is building something different — a system that connects strategy, tech, growth, and brand into one engine for your business.

We're onboarding in waves. When it's your turn, you'll be the first to know.

— The ΔX Team
thesx.co`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body.email || "").trim().toLowerCase();

    if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const { data: existing } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "Email already exists." },
        { status: 409 }
      );
    }

    const { error: insertError } = await supabase
      .from("waitlist")
      .insert({ email, created_at: new Date().toISOString() });

    if (insertError) {
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }

    try {
      await resend.emails.send({
        from: "DeltaX <hello@thesx.co>",
        to: email,
        subject: "You're on the list. ΔX is coming.",
        text: WELCOME_EMAIL_TEXT,
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
