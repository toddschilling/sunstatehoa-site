// lib/vercel.ts
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: process.env.VERCEL_API_TOKEN!,
});

export async function addDomainToVercel(slug: string) {
  const domain = `${slug}.sunstatehoa.com`;
  const projectId = process.env.VERCEL_PORTAL_PROJECT_ID!;

  const res = await vercel.projects.addProjectDomain({
    idOrName: projectId,
    requestBody: {
      name: domain,
    },
  });

  return res;
}

export async function removeDomainFromVercel(slug: string) {
  const domain = `${slug}.sunstatehoa.com`;
  return await vercel.projects.removeProjectDomain({
    idOrName: process.env.VERCEL_PORTAL_PROJECT_ID!,
    domain,
  });
}
