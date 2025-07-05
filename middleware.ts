import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isRootDomain =
    host === "sunstatehoa.com" ||
    host === "www.sunstatehoa.com" ||
    host.includes("localhost");

  if (!isRootDomain) {
    // Rewrite subdomain requests to the _tenant route
    return NextResponse.rewrite(new URL("/tenant-site", request.url));
  }

  return NextResponse.next();
}

// ✅ Only run middleware on page routes (not assets, APIs, or static files)
export const config = {
  matcher: [
    // Match all paths except:
    // - _next/static
    // - _next/image
    // - favicon.ico
    // - any API route
    "/((?!_next/static|_next/image|favicon.ico|logo.png|api).*)",
  ],
};
