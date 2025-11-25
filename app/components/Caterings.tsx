"use client";

import { useState } from "react";
import Image from "next/image";

const Caterings = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    datetime: "",
    numPeople: "",
    deliveryType: "Pickup",
    address: "",
    order: "",
    dietary: "",
    details: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "deliveryType") setForm({ ...form, deliveryType: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Thank you! Your catering request has been sent.");
        setForm({
          fullName: "",
          email: "",
          phone: "",
          datetime: "",
          numPeople: "",
          deliveryType: "Pickup",
          address: "",
          order: "",
          dietary: "",
          details: ""
        });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <section
      id="catering"
      className="relative bg-white dark:bg-gray-900 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm transition-colors duration-300"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
      {/* Image as Section Background with Blur Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/other/backdrop3.png"
          alt="Menu Background"
          fill
          priority
          className="object-cover w-full h-full rounded-2xl sm:rounded-3xl  opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 items-center z-10">
        {/* Section Header Styled Like Services */}
        <div className="text-center mb-16">
             <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-4 bg-linear-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-100 rounded-full text-white dark:text-white font-semibold text-sm uppercase tracking-wider mb-6">
            Caterings and Services
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-6">
            Catering{" "}
            <span className="bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
              Service
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let us bring authentic Himalayan flavors to your next event. Fill
            out the form below and our team will contact you to confirm your
            catering request.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>
          </div>
        </div>
        {/* Form - Second Row, Full Width */}
        <form className="w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700" onSubmit={handleSubmit} role="form" aria-describedby="catering-form-desc">
          <h2 className="text-xl font-bold sm:text-xl mb-6 text-gray-900 dark:text-white text-center">Catering Request</h2>
          <div id="catering-form-desc" className="sr-only">Catering request form for Himalayan Kitchen. All fields are required unless marked optional.</div>
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                aria-label="Full Name"
                placeholder="first and last name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>
            {/* Email and Phone in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  aria-label="Email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  aria-label="Phone Number"
                  placeholder="000-000-0000"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Date and Number of Guests in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="datetime" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Date & Time</label>
                <input
                  id="datetime"
                  type="datetime-local"
                  name="datetime"
                  required
                  aria-label="Date and Time"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={form.datetime}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="numPeople" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Number of Guests</label>
                <input
                  id="numPeople"
                  type="number"
                  name="numPeople"
                  min="1"
                  required
                  aria-label="Number of People"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={form.numPeople}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Delivery Type and Address */}
            <div>
              <label htmlFor="deliveryType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Delivery Type</label>
              <select
                id="deliveryType"
                name="deliveryType"
                value={form.deliveryType}
                onChange={handleChange}
                aria-label="Delivery Type"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Pickup">Pickup</option>
                <option value="Delivery">Delivery</option>
              </select>
            </div>
            {form.deliveryType === "Delivery" && (
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Delivery Address</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  aria-label="Delivery Address"
                  placeholder="123 Main St, City, State, ZIP"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
            )}
            {/* Order, Dietary, Details, Button, Status */}
            <div>
              <label htmlFor="order" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Order</label>
              <textarea
                id="order"
                name="order"
                required
                aria-label="Your Order"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={2}
                value={form.order}
                onChange={handleChange}
                placeholder="List menu items, quantities, or any requests..."
              ></textarea>
            </div>
            <div>
              <label htmlFor="dietary" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Dietary Restrictions</label>
              <textarea
                id="dietary"
                name="dietary"
                aria-label="Dietary restrictions or allergies"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={2}
                value={form.dietary}
                onChange={handleChange}
                placeholder="Allergies, preferences, etc. (optional)"
              ></textarea>
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Additional Details</label>
              <textarea
                id="details"
                name="details"
                aria-label="Additional details or special instructions"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={2}
                value={form.details}
                onChange={handleChange}
                placeholder="Anything else we should know? (optional)"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
            >
              Send Catering Request
            </button>
            <div aria-live="polite">
              {status && (
                <p className={`mt-4 text-green-600 dark:text-green-400 font-semibold`}>{status}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Caterings;
