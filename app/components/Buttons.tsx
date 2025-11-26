"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BUTTON_STYLE =
  "w-full sm:w-auto flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-md border-2 border-white bg-yellow-700 text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400/50 hover:bg-white hover:text-yellow-800 hover:border-yellow-700 active:scale-95 cursor-pointer";

export default function Buttons() {
  const [showContact, setShowContact] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("");
  const router = useRouter();

  return (
    <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mt-8">
      {/* Contact Button */}
      <button
        className={BUTTON_STYLE}
        onClick={() => setShowContact(true)}
        aria-label="Contact us"
        type="button"
      >
        Contact
      </button>
      {/* Catering Button */}
      <button
        className={BUTTON_STYLE}
        onClick={() => router.push("/catering")}
        aria-label="Go to catering page"
        type="button"
      >
        Catering
      </button>
      {/* Order Now Button */}
      <button
        className={BUTTON_STYLE}
        onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
        aria-label="Order food online"
        type="button"
      >
        Order Now
      </button>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowContact(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-yellow-700 text-2xl font-bold focus:outline-none"
              onClick={() => setShowContact(false)}
              aria-label="Close contact form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Contact Us</h2>
            <form className="flex flex-col gap-3" onSubmit={async (e) => {
              e.preventDefault();
              setContactStatus("Sending...");
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(contactForm),
                });
                if (res.ok) {
                  setContactStatus("Thank you for your message! We will reply shortly.");
                  setContactForm({ name: "", email: "", message: "" });
                  setTimeout(() => {
                    setShowContact(false);
                    setContactStatus("");
                  }, 2000);
                } else {
                  setContactStatus("Failed to send. Please try again.");
                }
              } catch {
                setContactStatus("Failed to send. Please try again.");
              }
            }}>
              <input type="text" placeholder="Your Name" className="border rounded px-3 py-2" required name="name" value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} />
              <input type="email" placeholder="Your Email" className="border rounded px-3 py-2" required name="email" value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} />
              <textarea placeholder="Your Message" className="border rounded px-3 py-2" rows={4} required name="message" value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} />
              <button type="submit" className="mt-2 px-4 py-2 rounded bg-yellow-700 text-white font-bold border-2 border-white hover:bg-white hover:text-yellow-800 hover:border-yellow-700 transition-all">Send</button>
              {contactStatus && (
                <div className={`mt-2 text-center font-semibold ${contactStatus.startsWith('Thank') ? 'text-green-600' : 'text-red-600'}`}>{contactStatus}</div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
