import { createClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = createClient();
  await supabase.auth.signOut();

  // Build an absolute URL back to /start
  const redirectUrl = new URL("/", request.url);

  // Create the redirect response
  const res = NextResponse.redirect(redirectUrl, { status: 302 });

  // Explicitly clear auth cookies
  res.cookies.delete("sb-access-token");
  res.cookies.delete("sb-refresh-token");

  return res;
}
