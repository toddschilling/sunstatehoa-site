// app/tenant-site/member/page.tsx
import { headers } from 'next/headers';
import { createClient } from '@/lib/supabase';
import { extractTenantSlug } from '@/lib/extractTenantSlug';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function MemberPage() {
  /* ─── auth check ────────────────────────────── */
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  /* ─── tenant lookup (optional but handy) ────── */
  const host = headers().get('host') || '';
  const slug = extractTenantSlug(host);

  const { data: tenant } = await supabase
    .from('tenants')
    .select('*')
    .eq('slug', slug)
    .single();

  /* ─── render ────────────────────────────────── */
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        {tenant?.name ?? 'HOA'} &mdash; Member&nbsp;Portal
      </h1>

      <p className="text-center">
        Welcome back, <strong>{user.email}</strong>!
      </p>

      <section className="max-w-4xl mx-auto space-y-4">
        {/* replace these placeholders with real components */}
        <ul className="list-disc list-inside space-y-2">
          <li>Pay dues / view account balance</li>
          <li>Submit Architectural Review requests</li>
          <li>Report maintenance issues or violations</li>
          <li>Download private documents &amp; newsletters</li>
          <li>View upcoming board agendas &amp; minutes</li>
        </ul>
      </section>
    </main>
  );
}
