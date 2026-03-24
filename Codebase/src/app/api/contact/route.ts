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

    const { error: dbError } = await supabase
      .from("contacts")
      .insert({
        name: sanitizedData.name,
        email: sanitizedData.email,
        company: sanitizedData.company || "NULL",
        challenge: sanitizedData.challenge,
      });

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
