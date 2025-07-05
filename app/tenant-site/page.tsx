/* app/tenant-site/page.tsx */
import Link from 'next/link';
import { headers } from 'next/headers';
import { createClient } from '@/lib/supabase';
import { extractTenantSlug } from '@/lib/extractTenantSlug';

export default async function TenantLandingPage() {
  /* ── identify tenant from sub-domain ─────────────────────────────── */
  const host = headers().get('host') || '';
  const slug = extractTenantSlug(host);

  const supabase = createClient();

  /* ── fetch the signed-in user (if any) ───────────────────────────── */
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!slug) {
    return (
      <main className="p-10 text-center text-red-600">
        Invalid subdomain
      </main>
    );
  }

  /* ── look up tenant record ───────────────────────────────────────── */
  const { data: tenant } = await supabase
    .from('tenants')
    .select('*')
    .eq('slug', slug!)
    .single();

  if (!tenant) {
    return (
      <main className="p-10 text-center text-red-600">
        Invalid HOA subdomain
      </main>
    );
  }

  /* ── render ──────────────────────────────────────────────────────── */
  return (
    <main className="p-10">
      <section className="max-w-4xl mx-auto space-y-10">
        {/* ---------- header ---------- */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold">{tenant.name}</h1>
          <p className="text-gray-600">
            Official Homeowners-Association site
          </p>
        </header>

        {/* ---------- public area ---------- */}
        <article className="space-y-4">
          <h2 className="text-2xl font-semibold">Public Information</h2>
          <p className="text-gray-700">
            Florida’s HOA Act (<abbr>F.S.</abbr> §720) requires each
            association to make key documents available to the public.
            Here’s what you’ll eventually find in this area:
          </p>

          {/* placeholders – replace with real components when ready */}
          <ul className="list-disc list-inside space-y-2">
            <li>Recorded Declaration, Bylaws &amp; Articles of Incorporation</li>
            <li>Current Rules / Architectural Guidelines</li>
            <li>Most recent <em>adopted</em> annual budget</li>
            <li>Latest annual financial report &amp; reserve disclosures</li>
            <li>Upcoming board &amp; membership meeting notices</li>
            <li>Board contact / management company information</li>
            <li>Approved minutes of past membership meetings</li>
          </ul>
        </article>

        {/* ---------- sign-in call-to-action ---------- */}
        {!user && (
          <div className="text-center">
            <Link
              href="/login"
              className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700 transition"
            >
              Member Login
            </Link>
          </div>
        )}

        {/* ---------- private area (visible only to members) ---------- */}
        {user && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Member Portal</h2>
            <p className="text-gray-700">
              Welcome back, <strong>{user.email}</strong>!
            </p>
            <p className="text-gray-700">
              This area will include dues payments, ARC requests, violation
              tracking, private documents, newsletters, and more.
            </p>
          </section>
        )}
      </section>
    </main>
  );
}
