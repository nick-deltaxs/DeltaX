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
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    const { data: recent } = await supabase
      .from("waitlist")
      .select("created_at")
      .eq("ip_address", ip)
      .gte("created_at", new Date(Date.now() - 60000).toISOString())
      .limit(1);

    if (recent && recent.length > 0) {
      return NextResponse.json(
        { error: "Please wait before submitting again" },
        { status: 429 }
      );
    }

    const { error } = await supabase.from("waitlist").upsert(
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
