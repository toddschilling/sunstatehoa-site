'use client';
import React from "react";

export default function Home() {
  return (
    <section className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Helping Florida HOAs Stay Compliant
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Florida law now requires many HOAs to maintain a dedicated website for official records.  
          We make that easy, secure, and affordable.
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

      {/* Problem Statement */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          New Legal Requirements for HOAs in Florida
        </h2>
        <p className="text-gray-600">
          Recent Florida legislation mandates that certain homeowners associations provide access to governing documents,
          meeting notices, budgets, and more via a community-specific website. Non-compliance could result in fines or legal challenges.
        </p>
      </div>

      {/* Our Solution */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            We Build and Host Custom HOA Websites for Compliance
          </h2>
          <p className="text-gray-600 mb-6">
            Sun State HOA provides fully managed websites tailored for your community. Our service ensures you meet
            all Florida HOA digital compliance standards — without the headache or high costs.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Custom domain and hosting included</li>
            <li>✅ Secure document upload and storage</li>
            <li>✅ Easy-to-use admin dashboard</li>
            <li>✅ Ongoing updates and support</li>
          </ul>
        </div>
        <div>
          <img src="/logo.png" alt="Sun State HOA Logo" className="rounded-xl shadow-md mx-auto w-60" />
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-12">Why Choose Sun State HOA?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Florida-Focused",
                desc: "We understand the specific needs of Florida HOAs and stay up-to-date with legal requirements.",
              },
              {
                title: "Affordable Pricing",
                desc: "Our pricing is transparent and tailored for small to medium communities.",
              },
              {
                title: "Hands-Off Setup",
                desc: "We handle everything — site creation, document migration, and launch — with minimal effort required from your board.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Get Your HOA Compliant</h2>
        <p className="text-lg text-gray-600 mb-8">
          Contact us today to learn how we can help your HOA meet Florida’s legal website requirements — quickly and affordably.
        </p>
        <a href="#" className="px-8 py-4 bg-blue-600 text-white text-lg rounded-xl shadow hover:bg-blue-700 transition">
          Request a Free Consultation
        </a>
      </div>
    </section>
  );
}
