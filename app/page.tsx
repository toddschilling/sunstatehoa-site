import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Image
            src="/logo-text-right.png"
            alt="SunState HOA logo"
            width={240}
            height={80}
            className="h-auto w-auto max-h-20"
            priority
          />
        </div>
      </header>

      <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Florida HOA Website Compliance Made Easy</h1>
          <p className="text-xl text-gray-700 mb-8">
            SUNSTATE HOA helps Florida condominium and homeowner associations meet the legal
            requirements for websites with secure, professional solutions.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">What Florida Law Requires</h2>
        <p className="text-lg text-gray-700 mb-4">
          Florida law (FS 718.111) requires condo associations with 25+ units to maintain a
          website with secure access to documents like budgets, bylaws, meeting notices, and more.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>A custom website for your HOA</li>
          <li>Password-protected document access</li>
          <li>Ongoing updates and support</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Custom HOA Website – Clean, mobile-friendly design</li>
          <li>Secure Owner Access – Private portals for residents</li>
          <li>Easy Document Uploads – Board can drag/drop PDFs</li>
          <li>Compliance Monitoring – We stay ahead of the law for you</li>
        </ul>
        <p className="mt-6 text-gray-700 font-medium">Optional add-ons:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Email notifications</li>
          <li>Maintenance request forms</li>
          <li>Voting tools</li>
        </ul>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Contact</h2>
        <p className="text-lg text-gray-700 mb-2">
          Email: <a href="mailto:info@sunstatehoa.com" className="text-blue-600 hover:underline">info@sunstatehoa.com</a>
        </p>
        <p className="text-lg text-gray-700 mb-2">Phone: (Your Google Voice number here)</p>
        <p className="text-lg text-gray-700">Serving all of Florida</p>
      </section>

      <footer className="bg-blue-50 border-t py-6 text-center text-sm text-gray-500">
        © 2025 SUNSTATE HOA. DBA Registered in Florida.
      </footer>
    </main>
  );
}
