// app/page.tsx
export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <img src="/logo.png" alt="Sunstate HOA Logo" className="h-20 mx-auto mb-6" />

        <h1 className="text-3xl font-bold text-center mb-4">
          Florida HOA Website Compliance Made Easy
        </h1>
        <p className="text-center mb-6">
          SUNSTATE HOA helps Florida condominium and homeowner associations meet legal requirements with ease.
        </p>
        <div className="text-center mb-10">
          <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started Today
          </a>
        </div>

        <Section title="What Florida Law Requires">
          <ul className="list-disc pl-5 space-y-1">
            <li>A custom website for your HOA</li>
            <li>Password-protected document access</li>
            <li>Ongoing updates and support</li>
          </ul>
        </Section>

        <Section title="What We Offer">
          <ul className="list-disc pl-5 space-y-1">
            <li>Clean, mobile-friendly HOA websites</li>
            <li>Secure owner portals for residents</li>
            <li>Easy drag-and-drop PDF uploads for board members</li>
            <li>Compliance monitoring so you stay ahead of the law</li>
          </ul>
        </Section>

        <Section title="Optional Add-ons">
          <ul className="list-disc pl-5 space-y-1">
            <li>Email notifications</li>
            <li>Maintenance request forms</li>
            <li>Voting tools</li>
          </ul>
        </Section>

        <Section title="Contact" id="contact">
          <p>Email: <a href="mailto:info@sunstatehoa.com" className="text-blue-600 underline">info@sunstatehoa.com</a></p>
          <p>Phone: (Your Google Voice number here)</p>
          <p>Serving all of Florida</p>
        </Section>
      </div>

      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © 2025 SUNSTATE HOA. DBA Registered in Florida.
      </footer>
    </main>
  );
}

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: strin
