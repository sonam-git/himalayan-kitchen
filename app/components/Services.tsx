"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("services");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="services"
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
               src="/images/other/backdrop.png"
               alt="Menu Background"
               fill
               priority
               className="object-cover w-full h-full rounded-2xl sm:rounded-3xl opacity-100"
             />
         <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-2 sm:px-8 lg:px-12 flex flex-col gap-12 items-center z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="inline-block px-6 py-2 bg-linear-to-r from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20 border border-orange-200/50 dark:border-orange-700/50 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-6">
              Our{" "}
              <span className="bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Including our dine-in experience, we offer comprehensive catering
              and event services to bring authentic Himalayan flavors to your
              special occasions.
            </p>

            {/* Decorative Line */}
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20 w-full max-w-6xl mx-auto ">
          {/* Dine-In Experience */}
          <div
            className={`group h-full flex flex-col justify-stretch transition-all duration-1000 delay-200 rounded-3xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } shadow-[0_4px_24px_0_rgba(255,255,255,0.25)] border-2 border-white`}
          >
            <div className="relative h-full flex flex-col justify-between  dark:bg-[rgba(220,38,38,0.18)] rounded-3xl p-8 text-center shadow-xl dark:shadow-[0_4px_32px_0_rgba(255,255,255,0.12)] hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-red-100/50 dark:border-red-800/30 overflow-hidden backdrop-blur-sm">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-red-200/20 to-transparent dark:from-red-700/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>

              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 bg-linear-to-br from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                <svg
                  className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2-5.5v.01M7 8h3v8H7V8z"
                  />
                </svg>
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-red-400/30 to-orange-400/30 opacity-80 transition-opacity duration-500 rounded-2xl blur-md scale-110"></div>
                {/* Floating Particles */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80 animate-ping transition-opacity duration-300"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black  text-white mb-6 group-hover:text-red-300 dark:group-hover:text-red-400 transition-colors duration-300">
                Dine-In
              </h3>

              <p className="text-md text-gray-200 dark:text-gray-300 mb-8 leading-relaxed">
                Immerse yourself in authentic Himalayan cuisine within our warm,
                welcoming atmosphere designed to transport you to the heart of
                Nepal.
              </p>

              {/* Enhanced Time Information */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-3 text-gray-200 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-red-500 to-orange-500 rounded-full"></div>
                  <span className="font-bold">Lunch:</span>
                  <span>11:30 AM - 2:30 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-200 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                  <span className="font-bold">Dinner:</span>
                  <span>4:30 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-red-600 dark:text-red-400 font-bold">
                  <div className="w-2 h-2 bg-linear-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
                  <span>Open Daily</span>
                </div>
              </div>
              {/* CTA Button for Dine-In */}
              <a
                href="tel:(415) 526-3161"
                className="mt-8 group relative inline-flex items-center justify-center bg-linear-to-r from-red-500 to-orange-500 dark:from-orange-900 dark:to-red-700 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-500/40 min-w-[180px] overflow-hidden text-base cursor-pointer border-2 border-transparent hover:border-white"
                aria-label="Call Himalayan Kitchen"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Us
              </a>
            </div>
          </div>

          {/* Takeout */}
          <div
            className={`group h-full flex flex-col justify-stretch transition-all duration-1000 delay-400 rounded-3xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } shadow-[0_4px_24px_0_rgba(255,255,255,0.25)] border-2 border-white`}
          >
            <div className="relative h-full flex flex-col justify-between dark:bg-[rgba(37,99,235,0.18)] rounded-3xl p-8 text-center shadow-xl dark:shadow-[0_4px_32px_0_rgba(255,255,255,0.12)] hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-blue-100/50 dark:border-blue-800/30 overflow-hidden backdrop-blur-sm">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-blue-200/20 to-transparent dark:from-blue-700/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>

              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 bg-linear-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                <svg
                  className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-400/30 to-indigo-400/30 opacity-80 transition-opacity duration-500 rounded-2xl blur-md scale-110"></div>
                {/* Floating Particles */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-ping transition-opacity duration-300"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black  text-white mb-6 group-hover:text-blue-300 dark:group-hover:text-blue-400 transition-colors duration-300">
                Take-out
              </h3>

              <p className="text-md text-gray-200 mb-8 leading-relaxed">
                Order your favourite food from anywhere by calling or using our
                online ordering system. You can also preorder your meal and get
                it ready once you arrive.
              </p>

              {/* Enhanced Time Information */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-3 text-gray-200 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-red-500 to-orange-500 rounded-full"></div>
                  <span className="font-bold">Lunch:</span>
                  <span>11:30 AM - 2:30 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-200 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                  <span className="font-bold">Dinner:</span>
                  <span>4:30 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-red-600 dark:text-red-400 font-bold">
                  <div className="w-2 h-2 bg-linear-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
                  <span>Open Daily</span>
                </div>
              </div>
              {/* CTA Button for Takeout */}
              <a
                href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 group relative inline-flex items-center justify-center border-2 border-yellow-500/70 hover:border-white bg-linear-to-r from-yellow-200 to-orange-200 dark:from-yellow-900 dark:to-orange-900 hover:from-yellow-400 hover:to-orange-400 text-orange-900 dark:text-yellow-200 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/40 min-w-[180px] text-base cursor-pointer"
                aria-label="Order food online for delivery or pickup"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                Order Online
              </a>
            </div>
          </div>

          {/* Catering */}
          <div
            className={`group h-full flex flex-col justify-stretch transition-all duration-1000 delay-600 rounded-3xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } shadow-[0_4px_24px_0_rgba(255,255,255,0.25)] border-2 border-white`}
          >
            <div className="relative h-full flex flex-col justify-between dark:bg-[rgba(16,185,129,0.18)] rounded-3xl p-8 text-center shadow-xl dark:shadow-[0_4px_32px_0_rgba(255,255,255,0.12)] hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-green-100/50 dark:border-green-800/30 overflow-hidden backdrop-blur-sm md:col-span-2 lg:col-span-1">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-green-200/20 to-transparent dark:from-green-700/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>

              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 bg-linear-to-br from-green-600 to-emerald-700 dark:from-green-500 dark:to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                <svg
                  className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-green-400/30 to-emerald-400/30 opacity-80 transition-opacity duration-500 rounded-2xl blur-md scale-110"></div>
                {/* Floating Particles */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-lime-400 rounded-full opacity-80 animate-ping transition-opacity duration-300"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-6 group-hover:text-green-300 dark:group-hover:text-green-400 transition-colors duration-300">
                Catering
              </h3>

              <p className="text-md text-gray-200 dark:text-gray-300 mb-8 leading-relaxed">
                Bring our exceptional Himalayan flavors to your location with
                professional catering services and convenient takeout party
                trays.
              </p>

              {/* Enhanced Catering Information */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-3 text-gray-200 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  <span className="font-bold">Catering:</span>
                  <span>Any size events</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-200 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                  <span className="font-bold">Party Trays:</span>
                  <span>Perfect for gatherings</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-green-600 dark:text-green-400 font-bold">
                  <div className="w-2 h-2 bg-linear-to-r from-green-500 to-green-600 rounded-full animate-pulse"></div>
                  <span>Tailored menus • Fresh ingredients</span>
                </div>
              </div>
              <Link
                href="/#catering"
                className="mt-8 group relative inline-flex items-center justify-center border-2 border-green-500/70 hover:border-white bg-linear-to-r from-green-200 to-emerald-200 dark:from-green-900 dark:to-emerald-900 hover:from-green-400 hover:to-emerald-400 text-green-900 dark:text-green-200 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-green-500/40 min-w-[180px] text-base cursor-pointer"
                aria-label="Request catering services"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                Catering Request
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
