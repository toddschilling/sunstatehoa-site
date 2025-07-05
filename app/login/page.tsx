// app/login/page.tsx
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase';
import LoginForm from '@/components/LoginForm';

export const dynamic = 'force-dynamic'; // show fresh auth state every request

export default async function LoginPage() {
  const supabase = createClient(cookies());

  // already signed in?  skip the form
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    // NOTE: keep in sync with member page path
    return (
      <meta
        httpEquiv="refresh"
        content="0; url=/tenant-site/member"
      />
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <LoginForm />
    </main>
  );
}
