"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

export default function StartPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [loading, setLoading] = useState(false);

  /* ---------- session guard ---------- */
  useEffect(() => {
    const check = async () => {
      await new Promise((r) => setTimeout(r, 100));

      // handle magic-link ?code
      const code = searchParams.get("code");
      if (code)
        await supabase.auth.exchangeCodeForSession(code).catch(() => {});

      // verified user fetch (cookie-aware)
      const { data: userData } = await supabase.auth.getUser();

      if (userData.user) {
        router.push("/onboarding");
      } else {
        setCheckingSession(false);
      }
    };

    check();

    const { data: sub } = supabase.auth.onAuthStateChange((evt, session) => {
      if (evt === "SIGNED_IN" && session?.user) router.push("/onboarding");
    });
    return () => sub.subscription.unsubscribe();
  }, [router, supabase, searchParams]);

  /* ---------- login submit ---------- */
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
    // on success, onAuthStateChange will redirect
  }

  /* ---------- ui ---------- */
  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Checking session…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Sign In to Get Started
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block">
            <span className="text-sm">Email</span>
            <input
              className="mt-1 block w-full border rounded px-3 py-2"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-sm">Password</span>
            <input
              className="mt-1 block w-full border rounded px-3 py-2"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            disabled={loading}
            className="w-full bg-sky-600 text-white py-2 rounded disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-sky-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
