// lib/supabase.ts
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./supabase.types"; // optional

export function createClient() {
  return createServerComponentClient<Database>({ cookies });
}
