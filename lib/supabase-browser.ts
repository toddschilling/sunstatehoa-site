// lib/supabase-browser.ts
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./supabase.types"; // optional

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
