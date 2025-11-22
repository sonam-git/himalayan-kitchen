'use client';

import { useRef, useEffect, useState } from 'react';
import PrayerFlagBorder from './PrayerFlagBorder';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeading(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // Play a bit faster and smoother
    }
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 w-full"
    >
      {/* Visually hidden heading for screen readers */}
      <h1 id="hero-heading" className="sr-only">Welcome to Himalayan Kitchen Marin</h1>
      {/* Skip to menu anchor for accessibility */}
      <a href="#menu" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-yellow-200 text-black px-4 py-2 rounded shadow-lg">Skip to Menu</a>
      {/* Hero Background Video styled as a TV screen */}
      <div className="absolute inset-0 z-0 w-full flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* TV frame */}
          <div className="absolute inset-0 rounded-4xl md:rounded-[3.5rem] border-18 md:border-32 border-gray-900 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl tv-frame" aria-hidden="true"></div>
          {/* Video with TV glass effect */}
          <video
            ref={videoRef}
            src="/videos/HeroMovie.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-4xl md:rounded-[3rem] shadow-xl tv-glass"
            style={{ filter: 'contrast(1.15) brightness(0.98) saturate(1.1)' }}
            aria-hidden="true"
            tabIndex={-1}
          />
          {/* Scanline/overlay effect */}
          <div className="pointer-events-none absolute inset-0 rounded-4xl md:rounded-[3rem] mix-blend-soft-light opacity-60 tv-scanlines" aria-hidden="true"></div>
          {/* Subtle inner shadow for glass */}
          <div className="pointer-events-none absolute inset-0 rounded-4xl md:rounded-[3rem] shadow-[inset_0_8px_32px_#000a,inset_0_-8px_32px_#000a]" aria-hidden="true"></div>
        </div>
      </div>

      {/* Content: Logo BG + Heading overlay, fade/zoom in/out */}
      {/* Removed showLogoText and animated heading overlay */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Heading visually hidden, replaced by sr-only above for aria-labelledby */}
        <div className="mb-8 flex justify-center items-center" aria-hidden="true">
          <span
            className={`inline-flex items-center gap-4 flex-col sm:flex-row group-hero-animate ${showHeading ? 'hero-zoom-in opacity-100' : 'hero-zoom-out opacity-0'}`}
            style={{ transition: 'opacity 1.5s, transform 1.5s' }}
          >
            {/* Food Icon (e.g. steaming bowl) */}
            <span className="inline-block group-hero-animate-child" aria-hidden="true">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-orange-400 drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21c-4.97 0-9-2.24-9-5v-1h18v1c0 2.76-4.03 5-9 5zm7-7H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1zm-2.5-7c0-1.1-.9-2-2-2s-2 .9-2 2c0 .88.58 1.63 1.38 1.89.13.04.22.16.22.3v.31c0 .18-.14.32-.32.32-.09 0-.17-.03-.23-.09C11.34 9.13 11 8.6 11 8c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .6-.34 1.13-.83 1.43-.06.06-.14.09-.23.09-.18 0-.32-.14-.32-.32v-.31c0-.14.09-.26.22-.3C16.92 8.63 17.5 7.88 17.5 7z"/>
              </svg>
            </span>
            <h2
              className="relative text-center text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight hero-title stylish-hero-text fancy-hero-text"
              style={{ fontFamily: 'var(--font-tibetan)' , WebkitTextStroke: '2px #fff' }}
            >
              <span className="block animate-hero-text group-hero-animate-child fancy-gradient-text drop-shadow-[0_4px_32px_#fbbf24,0_2px_8px_#ef4444,0_1px_1px_#fff]">HIMALAYAN KITCHEN</span>
            </h2>
            {/* Mountain Icon */}
            <span className="inline-block group-hero-animate-child" aria-hidden="true">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-200 dark:text-gray-100 drop-shadow-xl" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 48 48">
                <path d="M4 40L24 8l8 12 12 20H4z" fill="currentColor" stroke="currentColor"/>
                <path d="M24 8l8 12 4 8" stroke="#fff" strokeWidth="2"/>
              </svg>
            </span>
          </span>
        </div>
      </div>

      {/* Prayer Flag Border */}
      <div className="absolute top-0 left-0 w-full z-20 flex flex-col items-center">
        <PrayerFlagBorder />
      </div>

      {/* Action Buttons - Positioned at bottom where scroll indicator was */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center items-stretch sm:items-center hero-buttons">
          {/* Primary CTA - Explore Menu */}
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-linear-to-r from-orange-500 via-red-500 to-red-600 text-white font-bold py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-400/50 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-40 sm:min-w-[180px] lg:min-w-[200px] cursor-pointer border-2 border-white shadow-xl hover:bg-gray-900 hover:border-gray-900"
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
            className="group relative overflow-hidden bg-black text-white border-2 border-white font-bold py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-40 sm:min-w-[180px] lg:min-w-[200px] shadow-xl hover:bg-white hover:text-black hover:border-gray-900 cursor-pointer"
            aria-label="Order food online for delivery or pickup"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wide group-hover:animate-[flip_0.6s_ease-in-out]">Order Online</span>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" aria-hidden="true"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* Add this to your CSS (e.g. globals.css or in a style tag):
@keyframes hero-zoom-in {
  0% { opacity: 0; transform: scale(0.8) translateY(40px); }
  20% { opacity: 1; transform: scale(1.05) translateY(0); }
  80% { opacity: 1; transform: scale(1.1) translateY(0); }
  100% { opacity: 0; transform: scale(1.2) translateY(-20px); }
}
.hero-zoom-in {
  animation: hero-zoom-in 6.5s cubic-bezier(0.4,0,0.2,1) forwards;
}
.hero-zoom-out {
  opacity: 0;
  transform: scale(1.2) translateY(-20px);
  transition: opacity 1.5s, transform 1.5s;
}
@keyframes hero-text {
  0% { letter-spacing: 0.1em; filter: blur(8px); opacity: 0; }
  20% { letter-spacing: 0.2em; filter: blur(0); opacity: 1; }
  80% { letter-spacing: 0.25em; filter: blur(0); opacity: 1; }
  100% { letter-spacing: 0.1em; filter: blur(8px); opacity: 0; }
}
.animate-hero-text {
  animation: hero-text 6.5s cubic-bezier(0.4,0,0.2,1) forwards;
}
.group-hero-animate {
  will-change: opacity, transform;
}
.group-hero-animate-child {
  will-change: opacity, transform;
  animation: hero-zoom-in 6.5s cubic-bezier(0.4,0,0.2,1) forwards;
}
.stylish-hero-text {
  text-shadow: 0 4px 32px #fbbf24, 0 2px 8px #ef4444, 0 1px 1px #fff;
  letter-spacing: 0.15em;
}
.fancy-gradient-text {
  background: linear-gradient(90deg, #fff 0%, #fbbf24 30%, #ef4444 70%, #fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  filter: drop-shadow(0 2px 16px #fff8) drop-shadow(0 1px 8px #fbbf24cc);
}
.fancy-hero-text {
  text-shadow: 0 0 32px #fff8, 0 2px 8px #fbbf24cc, 0 1px 1px #fff;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
@media (max-width: 640px) {
  .group-hero-animate {
    flex-direction: column !important;
  }
}
.tv-frame {
  box-shadow: 0 8px 48px 0 #000a, 0 1.5px 0 0 #fff4 inset;
}
.tv-glass {
  box-shadow: 0 2px 32px #fff4, 0 1.5px 0 0 #fff4 inset;
}
.tv-scanlines {
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.04) 0px,
    rgba(255,255,255,0.04) 1.5px,
    transparent 1.5px,
    transparent 4px
  );
}
*/
