import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full bg-gradient-to-b from-sky-50 to-white px-6 md:px-10 lg:px-20 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto">
          Create a&nbsp;Website&nbsp;for&nbsp;your&nbsp;HOA&nbsp;in&nbsp;Minutes
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Spin up your own sub‑domain, invite residents, and keep full control
          of your records— no developer required.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/start"
            className="rounded-xl bg-sky-600 px-8 py-4 text-white font-semibold shadow hover:bg-sky-700 transition"
          >
            Get&nbsp;Started
          </Link>
          <button
            type="button"
            disabled
            className="inline-block bg-gray-200 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed shadow-sm"
            title="Coming soon"
          >
            Watch 2‑min Demo
          </button>
        </div>
      </section>

      {/* 3‑step how it works */}
      <section className="w-full px-6 md:px-10 lg:px-20 py-20 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Get compliant before your next board meeting
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
          <li className="flex flex-col items-center text-center">
            <span className="text-5xl font-extrabold text-sky-600">1</span>
            <h3 className="mt-4 text-xl font-semibold">Create your site</h3>
            <p className="mt-2 text-gray-600">
              Choose your HOA name—your site (e.g.{" "}
              <em>oakgrove.sunstatehoa.com</em>) is live instantly.
            </p>
          </li>
          <li className="flex flex-col items-center text-center">
            <span className="text-5xl font-extrabold text-sky-600">2</span>
            <h3 className="mt-4 text-xl font-semibold">Upload documents</h3>
            <p className="mt-2 text-gray-600">
              Drag‑and‑drop governing docs, budgets, minutes, and notices—all
              stored in your private bucket.
            </p>
          </li>
          <li className="flex flex-col items-center text-center">
            <span className="text-5xl font-extrabold text-sky-600">3</span>
            <h3 className="mt-4 text-xl font-semibold">Invite members</h3>
            <p className="mt-2 text-gray-600">
              Email or magic‑link invites add board & residents with role‑based
              access in seconds.
            </p>
          </li>
        </ol>
      </section>

      {/* Value props */}
      <section className="w-full px-6 md:px-10 lg:px-20 py-20 bg-sky-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Built for Florida HOAs — 25&nbsp;units&nbsp;+
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Chapter 720 Ready",
              desc: "All required public disclosures and login‑protected member areas baked‑in.",
            },
            {
              title: "Self‑Service, Not “Agency”",
              desc: "You own your domain, content and data. We just provide the rails.",
            },
            {
              title: "Secure by Default",
              desc: "Role‑based auth, private Supabase buckets per HOA, and daily backups.",
            },
            {
              title: "Affordable Flat Pricing",
              desc: "Simple per‑unit plans with no setup fees or surprise add‑ons.",
            },
            {
              title: "No Tech Skills Needed",
              desc: "If you can attach a file to email, you can run your Sun State site.",
            },
            {
              title: "Live Support When Needed",
              desc: "Chat and email support from real humans who know Florida HOA law.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full px-6 md:px-10 lg:px-20 py-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready in 10&nbsp;Minutes—Start&nbsp;Your&nbsp;Free&nbsp;Trial Today
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Generate your site, import docs, and invite your board before lunch.
        </p>
        <Link
          href="/start"
          className="mt-8 inline-block rounded-xl bg-sky-600 px-10 py-4 text-white font-semibold shadow hover:bg-sky-700 transition"
        >
          Start&nbsp;Free&nbsp;Trial
        </Link>
      </section>
    </main>
  );
}
