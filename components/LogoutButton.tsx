"use client";

import { createClient } from "@/lib/supabase-browser";

export default function LogoutButton() {
  const supabase = createClient();

  return (
    <form
      action="/logout"
      method="post"
      onSubmit={async () => {
        // Clear local tokens right away
        await supabase.auth.signOut();
        // Hard-reload to root after server redirect
        setTimeout(() => (window.location.href = "/"), 100);
      }}
    >
      <button className="text-sm text-sky-600 hover:underline" type="submit">
        Sign Out
      </button>
    </form>
  );
}
