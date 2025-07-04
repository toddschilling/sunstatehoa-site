import { cookies, headers } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { Database } from "./supabase.types";

export function createClient() {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          // Note: You can't set cookies from a server component in App Router.
          // This is only needed in API routes or middleware.
        },
        remove(name, options) {
          // Same as above — not supported in App Router server components
        },
      },
      headers,
    }
  );
}
