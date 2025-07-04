// app/faq/page.tsx
import React from 'react';

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Do HOAs need their own domain name?</h2>
          <p>No. Florida law allows the use of a third-party website or subdomain, as long as the HOA can post required documents and retain operational control.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What documents must be posted?</h2>
          <p>Declarations, bylaws, articles of incorporation, rules, budgets, meeting notices, and other official records as outlined in Florida Statute 720.303.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Can the website have a login page?</h2>
          <p>Yes. Required documents can be placed behind a secure member-only area, but notices must be visible on the public-facing homepage or a linked page.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What if the HOA changes management?</h2>
          <p>The HOA must retain access and control over its website section even after switching providers. Your site ensures this through admin access and export options.</p>
        </div>
      </div>
    </div>
  );
}
