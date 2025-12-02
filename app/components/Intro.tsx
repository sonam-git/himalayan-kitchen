"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Intro() {
  const [textVisible, setTextVisible] = useState(false);
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
      className="relative flex flex-col items-center justify-center min-h-[420px] w-full max-w-5xl mx-auto my-4 px-0 py-0 overflow-hidden bg-white/10 dark:bg-black/30 rounded-2xl shadow-[0_8px_32px_0_rgba(255,255,200,0.25),0_0_0_8px_rgba(255,255,150,0.10)] drop-shadow-[0_0_32px_rgba(255,255,150,0.25)] border border-yellow-300/40 dark:border-yellow-200/30 backdrop-blur-md backdrop-saturate-150"
      style={{ background: 'none' }}
    >
      {/* Full background image with dark overlay */}
      <div className="absolute inset-0 w-full h-full z-0 rounded-2xl">
        <Image
          src="/images/gallery/dining1.jpeg"
          alt="Himalayan Kitchen Restaurant Interior"
          fill
          className="object-cover sm:cover object-center w-full h-full rounded-2xl"
          priority
        />
        {/* Enhanced dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80 mix-blend-multiply" aria-hidden="true"></div>
      </div>
      {/* Main content centered on top of bg */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-2 py-10">
        <div
          ref={textRef}
          className={`w-full flex flex-col items-center justify-center transition-all duration-700 ease-out
            ${textVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-10'}
          `}
        >
          <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 text-yellow-300 dark:text-yellow-200 font-serif drop-shadow-xl tracking-tight text-center transition-all duration-700 ease-out ${textVisible ? 'opacity-100 scale-100 translate-y-0 delay-100' : 'opacity-0 scale-90 translate-y-8'}`}>
            Welcome to Himalayan Kitchen
          </h2>
          <p className={`text-base xs:text-lg sm:text-xl md:text-2xl font-medium text-white dark:text-yellow-100 mb-6 mx-auto font-[Georgia,'Times_New_Roman',Times,serif] text-center transition-all duration-700 ease-out ${textVisible ? 'opacity-100 scale-100 translate-y-0 delay-300' : 'opacity-0 scale-90 translate-y-8'}`}>
            Authentic Himalayan flavors, warm hospitality, and a place to feel at home.
          </p>
          <Link
            href="/about"
            className="inline-block px-5 py-2.5 rounded-2xl bg-white border-2 border-yellow-400 text-yellow-800 font-extrabold shadow-2xl hover:scale-105 hover:shadow-yellow-400/40 hover:bg-yellow-50 transition-all duration-200 text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label="Know more about Himalayan Kitchen Marin"
          >
            Our Story
          </Link>
        </div>
      </div>
      {/* Remove decorative lines and circles for a cleaner look */}
      <style jsx>{`
        /* Slide-in animation handled by Tailwind classes and IntersectionObserver */
      `}</style>
    </section>
  );
}
