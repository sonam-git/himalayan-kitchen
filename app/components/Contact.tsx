"use client";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Thank you for contacting us! We'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
      <section id="contact" className="relative bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm mb-10">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
        </div>
        {/* Image as Section Background with Blur Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image src="/images/other/backdrop4.png" alt="Contact Background" fill priority className="object-content w-full h-full rounded-2xl sm:rounded-3xl opacity-80" />
          <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl"></div>
        </div>
        <div className="relative ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-4 bg-linear-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-100 rounded-full text-white dark:text-white font-semibold text-sm uppercase tracking-wider mb-6">
          Get In Touch
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-200 dark:text-white mb-6">
                Contact <span className="bg-linear-to-r from-orange-600 via-red-600 to-orange-600 dark:from-orange-400 dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent">Himalayan Kitchen</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We&apos;d love to hear from you! Send us a message or reach out using the info below.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-describedby="contact-form-desc">
                  <div id="contact-form-desc" className="sr-only">Contact form to send a message to Himalayan Kitchen. All fields are required.</div>
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
                  <div aria-live="polite">
                    {status && (
                      <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">{status}</p>
                    )}
                  </div>
                </form>
              </div>
              {/* Contact Info */}
              <div className="relative flex flex-col items-center justify-center w-full">
                {/* Background Image - increased height, shadow added */}
                <div className="relative w-full h-full min-h-[540px] sm:min-h-[600px] md:min-h-[680px] rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/30">
                  <Image src="/images/gallery/hkitchen.jpg" alt="Himalayan Kitchen" fill priority className="object-cover w-full h-full" />
                  {/* Overlay for signboard effect - transparent, blurred, 3 rows */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] sm:w-3/4 md:w-2/3 bg-white/30 dark:bg-yellow-100/20 backdrop-blur-lg rounded-xl shadow-2xl border-4 border-yellow-300 dark:border-yellow-400 p-4 sm:p-6 flex flex-col items-center gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-white drop-shadow mb-1 flex items-center gap-2">
                      <svg className="w-6 h-6 text-yellow-200" fill="currentColor" viewBox="0 0 24 24"><path d="M24 6L6 22h6v14h8V28h4v8h8V22h6L24 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" /></svg>
                      Himalayan Kitchen Marin
                    </h3>
                    <div className="flex flex-col items-center gap-2 w-full">
                      <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                        <svg className="w-4 h-4 text-yellow-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-4.418 0-8 3.582-8 8a8 8 0 0016 0c0-4.418-3.582-8-8-8z" /></svg>
                        227 3rd St, San Rafael, CA 94901
                      </span>
                      <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                        <svg className="w-4 h-4 text-yellow-200" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <a href="tel:(415) 526-3161" className="hover:text-yellow-200 transition-colors">(415) 526-3161</a>
                      </span>
                      <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white">
                        <svg className="w-4 h-4 text-yellow-200" fill="currentColor" viewBox="0 0 24 24"><path d="M16 12v1m0 4v1m-8-5v1m0 4v1m8-10V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2m12 0V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2m12 0V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2" /></svg>
                        <a href="mailto:himalayankitchenmarin@gmail.com" className="hover:text-yellow-200 transition-colors">himalayankitchenmarin@gmail.com</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
