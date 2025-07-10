'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase-browser';

export default function StartPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      const code = searchParams.get('code');

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          setError('Verification failed. Please try logging in manually.');
          setCheckingSession(false);
          return;
        }
      }

      const { data: userData } = await supabase.auth.getUser();

      if (userData?.user) {
        router.push('/onboarding');
      } else {
        setCheckingSession(false);
      }
    };

    checkAuthAndRedirect();
  }, [router, supabase, searchParams]);


  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        router.push('/onboarding');
      } else {
        // fallback (should rarely happen)
        router.refresh();
      }
    }
  }

  
  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Just a moment…</h1>
          <p className="text-gray-600">We're checking your account and getting things ready.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center">Sign In to Get Started</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-700"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-sky-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
