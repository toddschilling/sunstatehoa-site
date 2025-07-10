'use client';
import React from 'react';

export default function LearnMore() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">What Florida’s New HOA Law Means</h1>
      <p className="text-lg text-gray-700 mb-4">
        Florida law now requires certain homeowners associations to publicly host key documents—
        governing documents, meeting minutes, budgets, notices—on a community-specific website.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Why It Matters</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>🛡️ Legal compliance to avoid fines or sanctions</li>
        <li>📢 Transparency for homeowners and stakeholders</li>
        <li>🔐 Secure, centralized access to official records</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Help</h2>
      <p className="text-gray-700">
        We handle everything:
      </p>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-5">
        <li>Site setup with custom domain + hosting</li>
        <li>Secure uploads of all required documents</li>
        <li>Easy admin dashboard for updates</li>
        <li>Ongoing support and legal compliance checks</li>
      </ol>
    </div>
  );
}
