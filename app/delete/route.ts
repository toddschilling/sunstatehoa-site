import { createClient } from "@/lib/supabase";
import { removeDomainFromVercel } from "@/lib/vercel";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = createClient();
  const formData = await request.formData();
  const slug = formData.get("slug") as string;

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== "admin@sunstatehoa.com") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // Step 1: Call delete_tenant RPC (removes memberships, policies, tenant)
  const { error } = await supabase.rpc("delete_tenant", {
    tenant_slug: slug,
  });

  if (error) {
    console.error("Failed to delete tenant in Supabase:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Step 2: Attempt to delete Supabase Storage buckets
  try {
    await supabase.storage.emptyBucket(`${slug}-public`);
    await supabase.storage.deleteBucket(`${slug}-public`);
    await supabase.storage.emptyBucket(`${slug}-private`);
    await supabase.storage.deleteBucket(`${slug}-private`);
  } catch (err) {
    console.error(`Failed to delete buckets for ${slug}:`, err);
    // Continue regardless of bucket errors
  }

  // Step 3: Remove domain from Vercel
  try {
    await removeDomainFromVercel(slug);
  } catch (err) {
    console.error("Failed to remove domain from Vercel:", err);
    // Continue regardless of domain errors
  }

  const origin = new URL(request.url).origin;
  return NextResponse.redirect(`${origin}/onboarding`);
}
