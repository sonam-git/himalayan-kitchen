"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Intro() {
  const [textVisible, setTextVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);
  
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-40 w-full max-w-5xl mx-auto my-4 px-0 py-0 overflow-hidden bg-white/10 dark:bg-black/30 rounded-2xl shadow-[0_8px_32px_0_rgba(255,255,200,0.25),0_0_0_8px_rgba(255,255,150,0.10)] drop-shadow-[0_0_32px_rgba(255,255,150,0.25)] border border-yellow-300/40 dark:border-yellow-200/30 backdrop-blur-md backdrop-saturate-150"
      style={{ background: 'none' }}
    >
      {/* Full background image with dark overlay */}
      <div className="absolute inset-0 w-full h-full z-0 rounded-2xl">
        <Image
          src="/images/gallery/dining1.jpeg"
          alt="Himalayan Kitchen Restaurant Interior"
          fill
          className="object-fill sm:cover object-center w-full h-full rounded-2xl"
          priority
        />
        {/* Enhanced dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80 mix-blend-multiply" aria-hidden="true"></div>
      </div>
      {/* Main content centered on top of bg */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 py-6">
        <div
          ref={textRef}
          className={`w-full flex flex-col items-center justify-center transition-all duration-700 ease-out
            ${textVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-10'}
          `}
        >
          {/* Clickable Header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex flex-col items-center justify-center gap-2 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg px-4 py-2"
            aria-expanded={isExpanded}
            aria-label="Toggle welcome message details"
          >
            <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-300 dark:text-yellow-200 font-serif drop-shadow-xl tracking-tight text-center transition-all duration-700 ease-out ${textVisible ? 'opacity-100 scale-100 translate-y-0 delay-100' : 'opacity-0 scale-90 translate-y-8'}`}>
              Welcome to Himalayan Kitchen Marin
            </h2>
            {/* Expand/Collapse Icon Below */}
            <svg
              className={`w-8 h-8 sm:w-10 sm:h-10 text-yellow-300 dark:text-yellow-200 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'} group-hover:scale-110`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Expandable Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
              isExpanded ? 'max-h-[600px] lg:max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            {/* Two Column Layout for Large Screens */}
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 px-4 w-full">
              {/* Left Column: Sherpa Kid Image */}
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md lg:max-w-none aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 bg-yellow-100 border-yellow-600 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
                  <Image
                    src="/images/other/sherpakid.png"
                    alt="Sherpa child representing our cultural heritage"
                    fill
                    className="object-fit"
                  />
                </div>
              </div>

              {/* Right Column: Text and Button */}
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-6">
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium text-white dark:text-yellow-100 font-[Georgia,'Times_New_Roman',Times,serif] text-left leading-relaxed">
                  From the Himalayas to Marin, Our flavors travel far. Authentic Himalayan flavors, warm hospitality, and a place to feel at home owned by Sherpa family. Come in as a guest, leave as family.
                </p>

                {/* Our Story Button */}
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 border border-yellow-300 text-white font-extrabold shadow-2xl hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-200 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  aria-label="Read our story on the About page"
                >
                  Our Story
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Remove decorative lines and circles for a cleaner look */}
      <style jsx>{`
        /* Slide-in animation handled by Tailwind classes and IntersectionObserver */
      `}</style>
    </section>
  );
}
