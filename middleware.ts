import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const subdomain = host.split(".")[0]; // e.g. "local-hoa"

  /* ➜ Allow these paths to pass straight through */
  const { pathname } = request.nextUrl;
  const passthroughPaths = [
    "/login",
    "/api/auth", // Supabase callbacks if you add OAuth
    "/_next", // Next.js assets
    "/favicon.ico",
  ];
  if (passthroughPaths.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  /* ➜ Only rewrite if we’re on a tenant sub-domain */
  if (
    subdomain &&
    subdomain !== "localhost" &&
    subdomain !== "127.0.0.1" &&
    subdomain !== "www"
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/tenant-site${pathname}`; // <-- same as before
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
