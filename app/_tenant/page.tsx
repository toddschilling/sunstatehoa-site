import { extractTenantSlug } from '@/lib/extractTenantSlug';
import { createClient } from '@/lib/supabase';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function TenantPage() {
  const host = headers().get('host') || '';
  const slug = extractTenantSlug(host);

  const supabase = createClient(cookies());
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: tenant } = await supabase
    .from('tenants')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!tenant) {
    return <p className="p-10 text-red-600 text-center">Invalid HOA subdomain</p>;
  }

  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">{tenant.name}</h1>
      <p>Welcome to your HOA portal.</p>
    </main>
  );
}
