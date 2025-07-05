// components/LoginForm.tsx
'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase-browser';

export default function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      setLoading(false);

      if (error) {
        setError(error.message);
      } else {
        router.replace('/tenant-site/member');
      }
    },
    [email, password, supabase, router]
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm space-y-6 bg-white p-6 rounded-lg shadow"
    >
      <h1 className="text-2xl font-bold text-center">HOA Member Login</h1>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          className="mt-1 w-full rounded border px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          required
          className="mt-1 w-full rounded border px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-indigo-600 text-white py-2 hover:bg-indigo-700"
      >
        {loading ? 'Logging in...' : 'Sign In'}
      </button>
    </form>
  );
}
