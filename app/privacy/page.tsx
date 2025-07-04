'use client';
export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        At Sun State HOA, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
        use, and safeguard your information when you use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Contact Information: name, email, phone number, and HOA community name</li>
        <li>Account Details: admin usernames, roles, and login timestamps</li>
        <li>Document Metadata: names, upload times, and file types (we do not view or share contents)</li>
        <li>Site Usage Data: anonymized analytics such as page visits, traffic sources, and device type</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use the information we collect to:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Provide and maintain your HOA website</li>
        <li>Respond to inquiries and provide support</li>
        <li>Improve the user experience and site functionality</li>
        <li>Comply with legal obligations related to document retention or public access</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Security</h2>
      <p className="text-gray-700">
        We implement reasonable administrative, technical, and physical safeguards to protect your data. Access to
        sensitive information is restricted to authorized personnel only.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Sharing of Information</h2>
      <p className="text-gray-700">
        We do not sell or rent your personal information. We may share data with trusted service providers
        (e.g. cloud storage, domain hosting) who assist us in operating our business, subject to strict confidentiality.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Choices</h2>
      <p className="text-gray-700">
        You may request to view, correct, or delete your personal information at any time by contacting us at
        <a href="mailto:admin@sunstatehoa.com" className="text-blue-600 ml-1">admin@sunstatehoa.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Updates to This Policy</h2>
      <p className="text-gray-700">
        We may update this Privacy Policy from time to time. The latest version will always be posted on this page.
        Please review it periodically.
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Effective Date: July 4, 2025
      </p>
    </div>
  );
}
