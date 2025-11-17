"use client";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would wire up to an API or email service
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-900 rounded-2xl shadow-sm w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 bg-linear-to-r from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20 border border-orange-200/50 dark:border-orange-700/50 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Contact <span className="bg-linear-to-r from-orange-600 via-red-600 to-orange-600 dark:from-orange-400 dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent">Himalayan Kitchen</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;d love to hear from you! Send us a message or reach out using the info below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
              {submitted && (
                <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">Thank you for contacting us! We&apos;ll get back to you soon.</p>
              )}
            </form>
          </div>
          {/* Contact Info */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Big House Icon Background */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0">
              <svg width="120" height="120" viewBox="0 0 48 48" fill="none" className="text-orange-400 dark:text-orange-600 opacity-30" style={{ filter: 'drop-shadow(0 4px 16px rgba(255,140,0,0.15))' }}>
                <path d="M24 6L6 22h6v14h8V28h4v8h8V22h6L24 6z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="currentColor" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col gap-8 items-start justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg px-8 py-10 border border-orange-100 dark:border-orange-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">We are located at:</h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-4.418 0-8 3.582-8 8a8 8 0 0016 0c0-4.418-3.582-8-8-8z" />
                  </svg>
                </span>
                <span className="text-lg font-semibold text-gray-800 dark:text-white">227 3rd St, San Rafael, CA 94901</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full">
                  <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:(415) 526-3161" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors">(415) 526-3161</a>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1m0 4v1m-8-5v1m0 4v1m8-10V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2m12 0V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2m12 0V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2" />
                  </svg>
                </span>
                <a href="mailto:himalayankitchenmarin@gmail.com" className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">himalayankitchenmarin@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
