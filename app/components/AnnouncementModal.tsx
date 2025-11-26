"use client";
import { useEffect, useState } from "react";

export default function AnnouncementModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2200); // Show after 2.2s
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-500">
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg bg-black/80 dark:bg-black/90 rounded-3xl shadow-2xl border-4 border-yellow-300/80 dark:border-orange-400/80 p-6 sm:p-10 flex flex-col items-center animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-orange-500 text-2xl font-bold focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close announcement"
        >
          &times;
        </button>
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl sm:text-5xl mb-2">🦃</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-orange-600 dark:text-yellow-300 font-headline text-center drop-shadow-lg">
            Happy Thanksgiving!
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200 text-center text-base sm:text-lg font-body max-w-xs sm:max-w-sm">
            We’re grateful for your support. Enjoy a special offer this week only!
          </p>
          <button
            className="px-6 py-2 rounded-full bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-base sm:text-lg focus:outline-none"
            onClick={() => setOpen(false)}
          >
            Claim Offer
          </button>
        </div>
      </div>
    </div>
  );
}
