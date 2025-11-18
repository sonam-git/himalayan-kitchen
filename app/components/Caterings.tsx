"use client";

import { useState } from "react";
import Image from "next/image";

const Caterings = () => {
  const [deliveryType, setDeliveryType] = useState("Pickup");

  return (
    <section id="catering" className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-900 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
      {/* Image as Section Background with Blur Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/images/food/food.jpg" alt="Catering" fill priority className="object-cover w-full h-full rounded-2xl sm:rounded-3xl blur-sm opacity-80" />
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/90 dark:via-gray-900/80 dark:to-black/90 rounded-2xl sm:rounded-3xl"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 items-center z-10">
        {/* Section Header Styled Like Services */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-linear-to-r from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20 border border-orange-200/50 dark:border-orange-700/50 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Catering & Events
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-linear-to-r from-gray-50 via-red-200 to-orange-700 dark:from-white dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent leading-tight mb-8 drop-shadow-lg">
            Catering Request
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let us bring authentic Himalayan flavors to your next event. Fill out the form below and our team will contact you to confirm your catering request.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>
          </div>
        </div>
        {/* Form - Second Row, Full Width */}
        <form className="w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-orange-100 dark:border-orange-900/30">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-orange-700 dark:text-orange-300 mb-2 text-center">Catering Request</h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">Please complete the form to send us a catering request. Your order will be confirmed once we accept it by calling you or email you.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="fullName" placeholder="Full Name" required aria-label="Full Name" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" />
            <input type="email" name="email" placeholder="Email" required aria-label="Email" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" />
            <input type="tel" name="phone" placeholder="Phone Number" required aria-label="Phone Number" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" />
            <input type="datetime-local" name="datetime" required aria-label="Date and Time" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" />
            <input type="time" name="time" required aria-label="Time" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" />
            <input type="number" name="numPeople" min="1" placeholder="Number of People" required aria-label="Number of People" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" />
            <select name="deliveryType" value={deliveryType} onChange={e => setDeliveryType(e.target.value)} aria-label="Delivery Type" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800">
              <option value="Pickup">Pickup</option>
              <option value="Delivery">Delivery</option>
            </select>
            {deliveryType === "Delivery" && (
              <input type="text" name="address" placeholder="Delivery Address" aria-label="Delivery Address" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800 md:col-span-2" />
            )}
          </div>
          <textarea name="order" placeholder="Your Order" required aria-label="Your Order" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" rows={2}></textarea>
          <textarea name="dietary" placeholder="Dietary restrictions or allergies" aria-label="Dietary restrictions or allergies" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" rows={2}></textarea>
          <textarea name="details" placeholder="Additional details or special instructions" aria-label="Additional details or special instructions" className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 text-lg focus:ring-2 focus:ring-orange-400 outline-none bg-white dark:bg-gray-800" rows={2}></textarea>
          <button type="submit" className="w-full bg-linear-to-r from-orange-500 via-red-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 rounded-lg shadow-lg transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-orange-400/50 mt-2 cursor-pointer">Send Catering Request</button>
        </form>
      </div>
    </section>
  );
};

export default Caterings;
