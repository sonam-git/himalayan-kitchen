"use client";

import { useState } from "react";
import Image from "next/image";

const Caterings = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    datetime: "",
    time: "",
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
          time: "",
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
      className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-900 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm transition-colors duration-300"
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
          <span className="inline-block px-6 py-2 mt-4 bg-linear-to-r from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20 border border-orange-200/50 dark:border-orange-700/50 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Catering & Events
          </span>
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
        <form className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-orange-100 dark:border-orange-900/30" onSubmit={handleSubmit}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-orange-700 dark:text-orange-300 mb-2 text-center">
            Catering Request
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
            Please complete the form to send us a catering request. Your order
            will be confirmed once we accept it by calling you or email you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              aria-label="Full Name"
              className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
              value={form.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-label="Email"
              className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              aria-label="Phone Number"
              className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="datetime-local"
              name="datetime"
              placeholder="Date "
              required
              aria-label="Date "
              className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
              value={form.datetime}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              required
              aria-label="Time"
              placeholder="Time"
              className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
              value={form.time}
              onChange={handleChange}
            />
            <input
              type="number"
              name="numPeople"
              min="1"
              placeholder="Number of People"
              required
              aria-label="Number of People"
              className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
              value={form.numPeople}
              onChange={handleChange}
            />
            <select
              name="deliveryType"
              value={form.deliveryType}
              onChange={handleChange}
              aria-label="Delivery Type"
              className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
            >
              <option value="Pickup">Pickup</option>
              <option value="Delivery">Delivery</option>
            </select>
            {form.deliveryType === "Delivery" && (
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                aria-label="Delivery Address"
                className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800 md:col-span-2"
                value={form.address}
                onChange={handleChange}
              />
            )}
          </div>
          <textarea
            name="order"
            placeholder="Your Order"
            required
            aria-label="Your Order"
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
            rows={2}
            value={form.order}
            onChange={handleChange}
          ></textarea>
          <textarea
            name="dietary"
            placeholder="Dietary restrictions or allergies"
            aria-label="Dietary restrictions or allergies"
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
            rows={2}
            value={form.dietary}
            onChange={handleChange}
          ></textarea>
          <textarea
            name="details"
            placeholder="Additional details or special instructions"
            aria-label="Additional details or special instructions"
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800"
            rows={2}
            value={form.details}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-linear-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-orange-400/50 mt-2 cursor-pointer"
          >
            Send Catering Request
          </button>
          {status && (
            <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Caterings;
