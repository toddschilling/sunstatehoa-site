export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Florida HOA Website Compliance Made Easy</h1>
      <p className="text-lg max-w-2xl mb-6">
        SUNSTATE HOA helps Florida condominium and homeowner associations meet the legal
        requirements for websites with secure, professional solutions.
      </p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
      >
        Get Started Today
      </a>

      <section className="mt-16 max-w-3xl text-left">
        <h2 className="text-2xl font-semibold mb-2">What Florida Law Requires</h2>
        <p className="mb-6">
          Florida law (FS 718.111) requires condo associations with 25+ units to maintain a
          website with secure access to documents like budgets, bylaws, meeting notices, and more.
          We make compliance simple by delivering:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>A custom website for your HOA</li>
          <li>Password-protected document access</li>
          <li>Ongoing updates and support</li>
        </ul>
      </section>

      <section className="mt-12 max-w-3xl text-left">
        <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Custom HOA Website – Clean, mobile-friendly design</li>
          <li>Secure Owner Access – Private portals for residents</li>
          <li>Easy Document Uploads – Board can drag/drop PDFs</li>
          <li>Compliance Monitoring – We stay ahead of the law for you</li>
        </ul>
        <p>Optional add-ons:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Email notifications</li>
          <li>Maintenance request forms</li>
          <li>Voting tools</li>
        </ul>
      </section>

      <section className="mt-12 max-w-3xl text-left">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="mb-2">Email: info@sunstatehoa.com</p>
        <p className="mb-2">Phone: (your Google Voice number here)</p>
        <p className="mb-2">Serving all of Florida</p>
      </section>

      <footer className="mt-20 text-sm text-gray-500">
        © 2025 SUNSTATE HOA. DBA Registered in Florida.
      </footer>
    </main>
  );
}
