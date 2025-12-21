"use client";

import MenuSection from "../components/MenuSection";

export default function MenuPage() {
  return <div className="px-4 mt-25 lg:mt-0">
    <MenuSection />
      {/* Action Button */}
          <div className="flex items-center justify-center w-full  ">
            <button
              onClick={() =>
                window.open(
                  "https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="group relative bg-yellow-700 hover:bg-yellow-800 mb-4 text-white font-bold text-base sm:text-lg lg:text-xl py-4 sm:py-5 px-8 sm:px-10 lg:px-12 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-yellow-600/60 border-2 border-white cursor-pointer"
              aria-label="Order food online for delivery or pickup"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="font-extrabold tracking-wide uppercase">
                Order Online
              </span>
              <div
                className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/60"
                aria-hidden="true"
              ></div>
            </button>
          </div>
  </div>;
}
