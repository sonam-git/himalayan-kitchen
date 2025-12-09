"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import PrayerFlagBorder from "./PrayerFlagBorder";

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
      className="relative w-full flex flex-col items-stretch justify-center overflow-hidden -mt-32 md:-mt-36 lg:-mt-44 xl:-mt-48"
    >
      {/* SEO-optimized heading */}
      <h1 id="hero-heading" className="sr-only">
        Himalayan Kitchen Marin - Authentic Sherpa Restaurant in San Rafael,
        California | Indian Nepalese & Tibetan Cuisine
      </h1>
      {/* Mobile: stacked, Desktop: overlay */}
      <div className="flex flex-col w-full gap-0">
        {/* Video Section */}
        <div className="relative w-full h-[45vh] xl:h-screen flex items-end justify-center shrink-0">
          {/* TV frame */}
          <div
            className="absolute inset-0 rounded-none xl:rounded-[3.5rem] border-18 xl:border-32 border-gray-100 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl tv-frame"
            aria-hidden="true"
          ></div>

          {/* Fallback Image - Shows when video fails */}
          {videoError && (
            <div className="absolute inset-0 w-full h-full rounded-none xl:rounded-[3rem] overflow-hidden">
              <Image
                src="/images/food/food.jpg"
                alt="Delicious Himalayan cuisine served at Himalayan Kitchen Restaurant"
                fill
                className="object-cover rotate-90 scale-150"
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
            src="/videos/introMov.mp4"
            poster="/images/gallery/dining1.jpeg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`object-cover w-full h-full rounded-none xl:rounded-[3rem] shadow-xl transition-opacity duration-500 ${
              videoLoaded && !videoError ? "opacity-100" : "opacity-0"
            }`}
            style={{ filter: "contrast(1.05) brightness(1.01) saturate(1.02)" }}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/videos/introMov.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay for video - Reduced opacity for less blur */}
          <div
            className="absolute inset-0 rounded-none xl:rounded-[3rem] bg-gradient-to-b from-black/30 via-black/15 to-black/30 pointer-events-none z-10"
            aria-hidden="true"
          ></div>
          {/* Scanline/overlay effect - Reduced opacity */}
          <div
            className="pointer-events-none absolute inset-0 rounded-none xl:rounded-[3rem] mix-blend-soft-light opacity-20 tv-scanlines"
            aria-hidden="true"
          ></div>
          {/* Subtle inner shadow for glass */}
          <div
            className="pointer-events-none absolute inset-0 rounded-none xl:rounded-[3rem] shadow-[inset_0_4px_16px_#0008,inset_0_-4px_16px_#0008]"
            aria-hidden="true"
          ></div>
        </div>
        <div className="block xl:hidden w-full">
          <PrayerFlagBorder />
        </div>
        {/* Content Section: below video on mobile, overlay on desktop */}
        <div className="relative w-full xl:absolute xl:inset-0 xl:flex xl:items-end xl:justify-center xl:pb-16 z-10 py-2 xl:py-0">
          <div className="flex flex-col items-center justify-start sm:px-8 xl:px-0 w-full pb-4 gap-4 xl:gap-6">
            <div className="flex flex-col items-center xl:backdrop-blur-lg xl:bg-black/20 xl:rounded-2xl xl:px-12 xl:py-8 xl:shadow-2xl">
              <Image
                src="/images/logo/mountain-sketch.png"
                alt="Himalayan Mountain Logo - Himalayan Kitchen Restaurant"
                width={280}
                height={60}
                className="w-full mb-2 h-12 sm:h-16 md:h-20 object-contain opacity-90 text-white"
                priority
                loading="eager"
              />
              <h2
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold text-gray-600 dark:text-white xl:text-white text-center drop-shadow-2xl leading-tight"
                aria-label="Taste From The Himalayas"
              >
                Taste From The
                <span
                  className="block text-yellow-700 dark:text-[#efc335] xl:text-[#efc335] tracking-wide text-[1.25em] md:text-[1.28em] uppercase font-bold"
                  aria-hidden="true"
                >
                  HIMALAYAS
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-gray-800 dark:text-white/90 xl:text-white text-center px-2 font-serif drop-shadow-lg">
                Sherpa-owned restaurant from Nepal serving authentic Himalayan
                flavors crafted with passion and tradition in San Rafael,
                California.
              </p>
            </div>
            {/* Action Button */}
            <button
              onClick={() =>
                window.open(
                  "https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="bg-yellow-600 hover:bg-white text-white hover:text-gray-900 border-2 border-white hover:border-yellow-500 font-bold py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 flex items-center justify-center gap-2 sm:gap-3 shadow-xl cursor-pointer"
              aria-label="Order food online for delivery or pickup"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
              <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wide text-inherit">
                Order Online
              </span>
              <div
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"
                aria-hidden="true"
              ></div>
            </button>
          </div>
        </div>
        {/* <PrayerFlagBorder/> */}
        {/* Remove extra margin below content on small screens */}
      </div>
    </section>
  );
};

export default Hero;
