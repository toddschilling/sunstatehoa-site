export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Simple, transparent pricing</h1>
        <p className="text-lg text-gray-700">
          Try it free. Invite members and scale your community when you’re ready.
        </p>
      </header>

      {/* Pricing Tiers */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Plan
          name="Free"
          price="0"
          period="/mo"
          cta="Get Started"
          features={[
            '1 HOA site',
            'Up to 1 GB total storage',
            'Upload files up to 50 MB',
            'Unlimited admin accounts',
            'Custom HOA website address',
            'Preview public/member views',
          ]}
          highlight
        />
        <Plan
          name="Starter"
          price="19"
          period="/mo"
          cta="Choose Starter"
          features={[
            'Up to 100 members',
            '5 GB storage included',
            'Bulk member invitations',
            'Custom logo & branding',
            'Email support',
          ]}
        />
        <Plan
          name="Growth"
          price="49"
          period="/mo"
          cta="Choose Growth"
          features={[
            'Up to 400 members',
            '20 GB storage included',
            'Multiple admins',
            'Audit history & activity logs',
            'Priority support',
          ]}
        />
        <Plan
          name="Pro / Management"
          price="99"
          period="/mo"
          cta="Contact Sales"
          features={[
            '1 000+ members',
            '50 GB storage included',
            'Multiple HOA sites',
            'Role-based access',
            'Chat & phone support',
          ]}
        />
      </div>

      {/* Add-ons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Need more?</h2>
        <p className="text-gray-700">
          Add more storage in 10 GB packs for $5/mo. Unlock additional HOA sites for $10 each.
          Enterprise discounts available for portfolios of 10+ communities.
        </p>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <FaqItem
          q="Is the free tier really free forever?"
          a="Yes. You can upload up to 1 GB of documents (max 50 MB per file) and explore the platform fully before paying."
        />
        <FaqItem
          q="Can we invite members on the free tier?"
          a="Not yet. Member invites are unlocked when a paid plan is selected, but you can set up everything else in advance."
        />
        <FaqItem
          q="What happens if we outgrow our tier?"
          a="You can upgrade at any time. Plans are billed monthly and prorated when you switch."
        />
        <FaqItem
          q="Can property managers run multiple sites?"
          a="Yes. Pro and custom plans allow you to manage multiple HOA portals under one account."
        />
      </section>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Plan({
  name,
  price,
  period,
  cta,
  features,
  highlight = false,
}: {
  name: string;
  price: string;
  period: string;
  cta: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-6 flex flex-col ${
        highlight ? 'border-sky-500 shadow-lg' : 'border-gray-200'
      }`}
    >
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-500">{period}</span>
      </div>
      <ul className="space-y-2 text-gray-700 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start">
            <span className="text-sky-600 mr-2 mt-0.5">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="/start"
        className={`mt-6 block text-center rounded-md px-4 py-2 font-medium ${
          highlight
            ? 'bg-sky-600 text-white hover:bg-sky-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="border rounded-md p-4">
      <summary className="cursor-pointer font-medium">{q}</summary>
      <p className="mt-2 text-gray-700">{a}</p>
    </details>
  );
}
