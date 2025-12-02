"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import GiftCard from "./components/GiftCard";
import Intro from "./components/Intro";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen transition-colors duration-300">
      <div className="relative">
        {/* Main content wrapper */}
        <main className="w-full">
          <Header />
          {/* Hero - Full width, edge to edge */}
          <Hero />

          {/* Content sections with side spacing and gaps between sections */}
          <div className="space-y-2 sm:space-y-10 lg:space-y-1 mx-4 sm:mx-4 lg:mx-8 xl:mx-12 2xl:mx-16 ">
            <Intro />
            <MenuSection />
            <Reviews />
            <Gallery />
          </div>
        </main>
        {/* Scroll-to-top icon, not visible at top or in hero/home */}
        {showScrollTop && (
          <div
            className="fixed right-6 bottom-24 sm:bottom-6 z-50 flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            <svg
              fill="#222"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
            >
              <path d="M7,3.70710678 L7,10.5 C7,10.7761424 6.77614237,11 6.5,11 C6.22385763,11 6,10.7761424 6,10.5 L6,3.70710678 L4.85355339,4.85355339 C4.65829124,5.04881554 4.34170876,5.04881554 4.14644661,4.85355339 C3.95118446,4.65829124 3.95118446,4.34170876 4.14644661,4.14644661 L6.14644661,2.14644661 C6.34170876,1.95118446 6.65829124,1.95118446 6.85355339,2.14644661 L8.85355339,4.14644661 C9.04881554,4.34170876 9.04881554,4.65829124 8.85355339,4.85355339 C8.65829124,5.04881554 8.34170876,5.04881554 8.14644661,4.85355339 L7,3.70710678 Z M14,9.5 L14,12.0474376 C14,12.3783481 13.8839855,12.698786 13.6721417,12.9529985 C13.1720143,13.5531514 12.2800608,13.6342381 11.6799078,13.1341106 L10.7560738,12.3642489 C10.4736449,12.1288916 10.11764,12 9.75,12 C9.48363526,12 9.24082605,12.1526146 9.12532205,12.3926334 L9.08962348,12.4668155 C8.95447865,12.7476481 8.99541029,13.0814869 9.19439734,13.321352 L13.607865,18.6414804 C14.3217788,19.502054 15.3818498,20 16.5,20 C18.9852814,20 21,17.9852814 21,15.5 L21,11.5 C21,11.2238576 20.7761424,11 20.5,11 C20.2238576,11 20,11.2238576 20,11.5 L20,12.5 C20,12.7761424 19.7761424,13 19.5,13 C19.2238576,13 19,12.7761424 19,12.5 L19,10.5 C19,10.2238576 18.7761424,10 18.5,10 C18.2238576,10 18,10.2238576 18,10.5 L18,12.5 C18,12.7761424 17.7761424,13 17.5,13 C17.2238576,13 17,12.7761424 17,12.5 L17,9.5 C17,9.22385763 16.7761424,9 16.5,9 C16.2238576,9 16,9.22385763 16,9.5 L16,12.5 C16,12.7761424 15.7761424,13 15.5,13 C15.2238576,13 15,12.7761424 15,12.5 L15,5.5 C15,5.22385763 14.7761424,5 14.5,5 C14.2238576,5 14,5.22385763 14,5.5 L14,9.5 Z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
