import React from "react";

export default function GiftCard() {
  return (
    <section className="relative w-full max-w-md mx-auto  px-1 sm:px-2">
      <div className="relative rounded-2xl bg-transparent border-2 border-yellow-300/70 dark:border-orange-400/60 shadow-xl p-4 sm:p-5 flex flex-col items-center text-center overflow-hidden">
   
        <h2 className="text-lg sm:text-xl font-bold font-serif text-yellow-500 dark:text-yellow-300 mb-2 drop-shadow-lg">Gift the Taste of the Himalayas</h2>
        <p className="text-sm sm:text-base text-gray-900 dark:text-gray-100 mb-4 font-medium w-full max-w-none mx-0">
          Delight your loved ones with a gift that’s always in good taste—make their day memorable with the authentic flavors of Himalayan cuisine.
        </p>
        <a
          href="https://order.toasttab.com/egiftcards/himalayan-kitchen-227-3rd-st"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-bold text-sm shadow-md border-2 border-white dark:border-yellow-200 hover:from-yellow-500 hover:to-red-500 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
          aria-label="Buy Gift Card (opens in new tab)"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="10" rx="2" fill="currentColor" className="text-yellow-300/80" />
            <path d="M2 9h20M12 7v10M7 12h.01M17 12h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Buy Gift Card
        </a>
      </div>
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-4 -left-4 w-14 h-14 bg-yellow-300/20 rounded-full blur-2xl z-0" />
      <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-red-400/10 rounded-full blur-2xl z-0" />
    </section>
  );
}
