export default function Home() {
  return (
    <section className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Sun State HOA
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Bringing modern tools to community living.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Get Started
          </a>
          <a href="#" className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
            Learn More
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Community Portal",
            desc: "Easily communicate and share updates with residents.",
          },
          {
            title: "Finance Tools",
            desc: "Track dues, view financial reports, and increase transparency.",
          },
          {
            title: "Maintenance Requests",
            desc: "Allow residents to submit and monitor service tickets.",
          },
        ].map(({ title, desc }) => (
          <div key={title} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
