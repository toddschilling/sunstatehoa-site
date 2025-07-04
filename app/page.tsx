import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-white text-gray-800">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <Image src="/logo-text-right.png" alt="SunState HOA logo" width={300} height={100} />
        </div>
        <h1 className="text-4xl font-bold mb-4">Florida HOA Website Compliance Made Easy</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          SUNSTATE HOA helps Florida condominium and homeowner associations meet the legal
          requirements for websites with secure, professional solutions.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Get Started Today
        </a>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">What Florida Law Requires</h2>
        <p className="text-gray-700 mb-4">
          Florida law (FS 718.111) requires condo associations with 25+ units to maintain a
          website with secure access to documents like budgets, bylaws, meeting notices, and more.
          We make compliance simple by delivering:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>A custom website for your HOA</li>
          <li>Password-protected document access</li>
          <li>Ongoing updates and support</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Custom HOA Website – Clean, mobile-friendly design</li>
          <li>Secure Owner Access – Private portals for residents</li>
          <li>Easy Document Uploads – Board can drag/drop PDFs</li>
          <li>Compliance Monitoring – We stay ahead of the law for you</li>
        </ul>
        <p className="mt-4 text-gray-700">Optional add-ons:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Email notifications</li>
          <li>Maintenance request forms</li>
          <li>Voting tools</li>
        </ul>
      </section>

      <section id="contact" className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Contact</h2>
        <p className="text-gray-700 mb-2">Email: <a href="mailto:info@sunstatehoa.com" className="text-blue-600 hover:underline">info@sunstatehoa.com</a></p>
        <p className="text-gray-700 mb-2">Phone: (Your Google Voice number here)</p>
        <p className="text-gray-700">Serving all of Florida</p>
      </section>

      <footer className="border-t pt-8 mt-16 text-sm text-gray-500 text-center">
        © 2025 SUNSTATE HOA. DBA Registered in Florida.
      </footer>
    </main>
  );
}
