'use client';

import { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 w-full">
      {/* Hero Background Video */}
      <div className="absolute inset-0 z-0 w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/heroclip.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl"
        />
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/40 to-black/60 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-tight hero-title">
            <span className="block bg-linear-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent drop-shadow-2xl">
              TASTES FROM THE
            </span>
            <span className="block text-white drop-shadow-2xl">
              HIMALAYAS
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="mt-6 max-w-3xl mx-auto hero-subtitle">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-100 leading-relaxed backdrop-blur-sm bg-black/20 rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 border border-white/10">
              SERVING AND SHARING THE HIMALAYAN CUISINES & CULTURES 
              <span className="block text-orange-300 font-medium mt-2">in the heart of San Rafael</span>
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons - Positioned at bottom where scroll indicator was */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center items-stretch sm:items-center hero-buttons">
          {/* Primary CTA - Explore Menu */}
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-linear-to-r from-orange-500 via-red-500 to-red-600 hover:bg-sky-400 text-white font-bold py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-400/50 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-40 sm:min-w-[180px] lg:min-w-[200px] cursor-pointer"
            aria-label="Explore our restaurant menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wide group-hover:animate-[flip_0.6s_ease-in-out]">Explore Menu</span>
          </button>
          
          {/* Secondary CTA - Order Now */}
          <button
            onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
            className="group relative overflow-hidden bg-white hover:bg-sky-400 hover:text-white backdrop-blur-sm text-gray-900 font-bold py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-40 sm:min-w-[180px] lg:min-w-[200px] border-2 border-white/30 hover:border-white cursor-pointer"
            aria-label="Order food online for delivery or pickup"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wide group-hover:animate-[flip_0.6s_ease-in-out]">Order Online</span>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
          </button>

          {/* Tertiary CTA - Reservation */}
          <a
            href="#reservation"
            className="group relative overflow-hidden bg-linear-to-r from-yellow-500 via-amber-500 to-amber-600 hover:bg-sky-400 text-white font-bold py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-40 sm:min-w-[180px] lg:min-w-[200px] cursor-pointer"
            aria-label="Make a reservation"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wide group-hover:animate-[flip_0.6s_ease-in-out]">Reservation</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
