import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase';
import { addDomainToVercel } from '@/lib/vercel';
import type { MembershipRow } from '@/lib/types';
import DeleteTenantButton from '@/components/DeleteTenantButton';
import CreateTenantForm from '@/components/CreateTenantForm';
import DnsStatusIndicator from '@/components/DnsStatusIndicator';

// ✅ Server action to create tenant
async function createTenant(formData: FormData) {
  'use server';

  const supabase = createClient();

  const slug = (formData.get('slug') as string || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-');

  const name = (formData.get('name') as string || '').trim();

  if (slug.length < 3 || name.length < 3) {
    throw new Error('Subdomain and name must be at least 3 characters.');
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    throw new Error('You must be signed in to create a site.');
  }

  const { error } = await supabase.rpc('provision_tenant', {
    tenant_slug: slug,
    tenant_name: name,
    admin_user_id: user.id,
  });

  if (error) {
    throw new Error(error.message || 'Failed to create tenant.');
  }

  try {
    await addDomainToVercel(slug);
  } catch (err) {
    console.error('Domain provisioning failed:', err);
  }

  revalidatePath('/onboarding');
}

export default async function OnboardingPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/start');

  const isSuperAdmin = user.email === 'admin@sunstatehoa.com';

  const { data: memberships, error } = await supabase
    .from('memberships')
    .select(`
      id,
      role,
      unit,
      created_at,
      tenants:tenants(id, slug, name)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: true }) as {
      data: MembershipRow[] | null;
      error: any;
    };

  if (error) {
    throw new Error('Unable to load HOA sites.');
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Your Sites</h1>

      {memberships && memberships.length > 0 ? (
        <ul className="space-y-4">
          {memberships.map(({ role, unit, created_at, tenants }) => (
            <li key={tenants.id} className="border p-4 rounded shadow-sm">
              <div className="font-medium">{tenants.name}&nbsp;<DnsStatusIndicator subdomain={tenants.slug} /></div>
              <div className="text-sm text-gray-600">
                {tenants.slug}.sunstatehoa.com — {role}
                {unit ? ` · Unit: ${unit}` : ''}
                <br />
                Joined: {new Date(created_at).toLocaleDateString()}
              </div>

              <div className="mt-2 flex items-center gap-4">
                <a
                  href={`https://${tenants.slug}.sunstatehoa.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-600 hover:underline"
                >
                  Open Portal
                </a>

                {isSuperAdmin && (
                  <DeleteTenantButton slug={tenants.slug} />
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">
          No HOA sites are associated with your account yet. Use the form below to create your first one.
        </p>
      )}

      <hr className="my-8" />

      <h2 className="text-xl font-semibold">Create a Site</h2>
      <CreateTenantForm createTenant={createTenant} />
    </div>
  );
}
