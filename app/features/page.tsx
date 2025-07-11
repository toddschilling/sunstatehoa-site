import {
  CloudArrowUpIcon,
  FolderOpenIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  EyeIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function FeaturesPage() {
  return (
    <div className="flex flex-col space-y-16">
      {/* Hero */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Powerful features for modern HOAs</h1>
          <p className="text-lg text-gray-600">
            From documents to member access, Sun State HOA simplifies compliance and communication—all in one place.
          </p>
          <a
            href="/start"
            className="inline-block mt-4 bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <Feature
            icon={CloudArrowUpIcon}
            title="Free to Get Started"
            description="Create your HOA site in minutes without entering a credit card. Upload documents and configure everything before choosing a plan."
          />
          <Feature
            icon={FolderOpenIcon}
            title="Smart Document Management"
            description="Organize files, categorize them, and decide if they should be public or private. Easily preview what homeowners will see."
          />
          <Feature
            icon={EyeIcon}
            title="Custom Subdomain & Branding"
            description="Each HOA gets a clean URL like myhoa.sunstatehoa.com and can upload a custom logo to match their identity."
          />
          <Feature
            icon={ShieldCheckIcon}
            title="Access Control Built In"
            description="Admins decide who sees what. Documents can be public or member-only, and only authorized users can upload or modify them."
          />
          <Feature
            icon={UsersIcon}
            title="Bulk Member Import"
            description="Once you’re ready to go live, invite all your members at once using our bulk upload tool—fast, secure, and easy."
          />
          <Feature
            icon={WrenchScrewdriverIcon}
            title="Perfect for Management Companies"
            description="Create and manage multiple HOA sites under one account. Ideal for property managers who serve many communities."
          />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Coming Soon</h2>
          <ul className="text-gray-700 space-y-2">
            <li>✓ Member messaging and announcements</li>
            <li>✓ Online dues and payment tracking</li>
            <li>✓ Audit logs and compliance reports</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------- */

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <Icon className="w-8 h-8 text-sky-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-700">{description}</p>
      </div>
    </div>
  );
}
