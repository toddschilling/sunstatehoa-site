import { createClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  // Dynamically determine origin
  const origin = new URL(request.url).origin;
  const response = NextResponse.redirect(`${origin}/start`, { status: 302 });

  // These are Supabase's cookie names by default
  response.cookies.set("sb-access-token", "", {
    maxAge: 0,
    path: "/",
  });

  response.cookies.set("sb-refresh-token", "", {
    maxAge: 0,
    path: "/",
  });

  return response;
}
