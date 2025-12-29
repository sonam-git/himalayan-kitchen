"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.playbackRate = 0.75; // Play a bit faster and smoother

      // Optimize video loading
      const handleLoadedData = () => {
        setVideoLoaded(true);
        setVideoError(false);
      };

      const handleError = () => {
        setVideoError(true);
        setVideoLoaded(false);
      };

      videoEl.addEventListener("loadeddata", handleLoadedData);
      videoEl.addEventListener("error", handleError);

      return () => {
        videoEl.removeEventListener("loadeddata", handleLoadedData);
        videoEl.removeEventListener("error", handleError);
      };
    }
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden pt-0 pb-6 sm:pt-2 sm:pb-8 md:pt-3 md:pb-10 lg:pt-4 lg:pb-12"
    >
      {/* SEO-optimized heading */}
      <h1 id="hero-heading" className="sr-only">
        Himalayan Kitchen Marin - Authentic Sherpa Restaurant in San Rafael,
        California | Indian Nepalese & Tibetan Cuisine
      </h1>

      {/* Content Container */}
      <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-3 sm:gap-4 md:gap-4 lg:gap-3">
        
        {/* Top Section: Logo + Heading */}
        <div className="flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-3 lg:gap-2">
          {/* Mountain Logo */}
          <Image
            src="/images/logo/mountain-sketch.png"
            alt="Himalayan Mountain Logo - Himalayan Kitchen Restaurant"
            width={320}
            height={70}
            className="w-56 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
            priority
            loading="eager"
          />
          
          {/* Main Heading */}
          <div>
            <h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black text-gray-800 dark:text-white text-center leading-tight tracking-tight"
              aria-label="Taste From The Himalayas"
            >
              <span className="block lg:inline mb-1 lg:mb-0 whitespace-nowrap">
                TASTE FROM THE{" "}
              </span>
              <span className="block lg:inline text-yellow-800 dark:text-yellow-100 whitespace-nowrap">
                HIMALAYAS
              </span>
            </h2>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-300">
          {/* TV frame */}
          <div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl border-6 sm:border-8 md:border-10 border-gray-800 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
            aria-hidden="true"
          ></div>

          {/* Video Container */}
          <div className="relative w-full pb-[56.25%] sm:pb-[45%]">
            {/* Fallback Image - Shows when video fails */}
            {videoError && (
              <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/food/food.jpg"
                  alt="Delicious Himalayan cuisine served at Himalayan Kitchen Restaurant"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 bg-black/40"
                  aria-hidden="true"
                ></div>
              </div>
            )}

            {/* Optimized Video with preload and poster */}
            <video
              ref={videoRef}
              src="/videos/hero.mp4"
              poster="/images/gallery/dining1.jpeg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full rounded-xl object-cover shadow-xl transition-opacity duration-500 ${
                videoLoaded && !videoError ? "opacity-100" : "opacity-0"
              }`}
              style={{ filter: "contrast(1.05) brightness(1.01) saturate(1.02)" }}
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src="/videos/introMov.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay for video */}
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-b from-black/20 via-black/10 to-black/20 pointer-events-none"
              aria-hidden="true"
            ></div>
          </div>
        </div>

        {/* Bottom Section: Description + Buttons */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-5 lg:gap-3">
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 dark:text-white font-light tracking-wide max-w-4xl mx-auto px-4 leading-relaxed">
            Sherpa-owned restaurant from Nepal serving authentic Himalayan
            flavors crafted with passion and tradition in San Rafael, California.
          </p>
          
          {/* Action Button */}
          <div className="flex items-center justify-center w-full px-4">
            <button
              onClick={() =>
                window.open(
                  "https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="group relative bg-yellow-700 hover:bg-yellow-800 text-white font-bold text-base sm:text-lg lg:text-xl py-4 sm:py-5 px-8 sm:px-10 lg:px-12 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-yellow-600/60 border-2 border-white cursor-pointer"
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
        </div>

        {/* Prayer Flag Border at bottom */}
        <div className="w-full mt-4">
          {/* Horizontal Divider */}
          <hr className="border-t border-gray-600 dark:border-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
