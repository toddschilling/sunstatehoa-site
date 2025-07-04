export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

        <section className="text-center space-y-4">
          <img src="/logo.png" alt="Sunstate HOA Logo" className="h-20 mx-auto" />
          <h1 className="text-4xl font-heading font-bold text-brand">
            Florida HOA Website Compliance — Done For You
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Secure, legal, and easy-to-use websites for Florida condominium and homeowner associations.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-brand text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-brand-dark transition"
          >
            Get Started Today
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-semibold text-gray-900">What Florida Law Requires</h2>
          <p>
            Florida law (FS 718.111) requires condo associations with 25+ units to maintain a website with secure access for residents.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>A custom website for your HOA</li>
            <li>Password-protected document access</li>
            <li>Ongoing updates and support</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-semibold text-gray-900">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Clean, mobile-friendly HOA websites</li>
            <li>Secure owner portals for residents</li>
            <li>Easy drag-and-drop PDF uploads for board members</li>
            <li>Compliance monitoring so you stay ahead of the law</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-heading font-semibold text-gray-900">Optional Add-ons</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email notifications</li>
            <li>Maintenance request forms</li>
            <li>Voting tools</li>
          </ul>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-heading font-semibold text-gray-900">Contact</h2>
          <p>Email: <a href="mailto:info@sunstatehoa.com" className="text-brand underline">info@sunstatehoa.com</a></p>
          <p>Phone: (Your Google Voice number here)</p>
          <p>Serving all of Florida</p>
        </section>

      </div>

      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
        © 2025 SUNSTATE HOA. DBA Registered in Florida.
      </footer>
    </main>
  );
}
