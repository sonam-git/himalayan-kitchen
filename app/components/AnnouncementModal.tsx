"use client";
import { useEffect, useState } from "react";

export default function AnnouncementModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000); // Show after 1s
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const trapFocus = (e: KeyboardEvent) => {
      const focusableElements = 'a[href], area[href], iframe,[tabindex]:not([tabindex="-1"]), button:not([disabled]), [contenteditable], [draggable]';
      const firstElement = (document.querySelector(focusableElements) as HTMLElement);
      const lastElement = (document.querySelectorAll(focusableElements).item(-1) as HTMLElement);

      if (e.key === "Tab") {
        if (e.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("keydown", trapFocus);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("keydown", trapFocus);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcement-modal-title"
      tabIndex={-1}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-500"
    >
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg bg-black/80 dark:bg-black/90 rounded-3xl shadow-2xl border-4 border-yellow-300/80 dark:border-orange-400/80 p-6 sm:p-10 flex flex-col items-center animate-fade-in">
        <h2 id="announcement-modal-title" className="sr-only">
          Announcement
        </h2>
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-orange-500 text-2xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          onClick={() => setOpen(false)}
          aria-label="Close announcement"
          type="button"
        >
          &times;
        </button>
        <div className="flex flex-col items-center gap-2">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 drop-shadow-lg mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M6.343 6.343l-1.414-1.414m12.728 0l-1.414 1.414M6.343 17.657l-1.414 1.414"
            />
          </svg>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-yellow-400 dark:text-yellow-300 font-headline text-center drop-shadow-lg">
            Welcome to Himalayan Kitchen Marin!
          </h2>
          <p className="mb-4 text-gray-100 dark:text-gray-200 text-center text-lg sm:text-xl font-body max-w-xs sm:max-w-sm">
            We’re delighted to have you here. Enjoy authentic Himalayan flavors, heartfelt hospitality, and traditions passed down through generations. <br></br>Thank you for visiting us—your culinary adventure begins now!
          </p>
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            onClick={() => setOpen(false)}
            aria-label="Close welcome message"
            type="button"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}
