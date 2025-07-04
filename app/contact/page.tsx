'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      community: formData.get('hoa-community-name')?.toString() || '',
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("There was a problem sending your message.");
    }
  };


  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-700">We’ve received your request and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-3xl font-bold">Request a Free Consultation</h1>

      {['name', 'email', 'phone', 'hoa-community-name'].map((label) => (
        <div key={label}>
          <label className="block text-gray-700 mb-1">{label}</label>
          <input
            name={label.toLowerCase().replace(/\s+/g, '-')}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      ))}

      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700 transition">
        Submit Request
      </button>
    </form>
  );
}
