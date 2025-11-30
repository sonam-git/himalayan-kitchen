'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // Play a bit faster and smoother
    }
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] w-full flex flex-col items-stretch justify-center overflow-hidden"
    >
      {/* Visually hidden heading for screen readers */}
      <h1 id="hero-heading" className="sr-only">Welcome to Himalayan Kitchen Marin</h1>
      {/* Skip to menu anchor for accessibility */}
      <a href="#menu" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-yellow-200 text-black px-4 py-2 rounded shadow-lg">Skip to Menu</a>
      {/* Mobile: stacked, Desktop: overlay */}
      <div className="flex flex-col w-full gap-0">
        {/* Video Section */}
        <div className="relative w-full h-[50vh] xl:h-screen flex items-end justify-center shrink-0">
          {/* TV frame */}
          <div className="absolute inset-0 rounded-none xl:rounded-[3.5rem] border-18 xl:border-32 border-gray-900 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl tv-frame" aria-hidden="true"></div>
          {/* Video with TV glass effect */}
          <video
            ref={videoRef}
            src="/videos/herovideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-none xl:rounded-[3rem] shadow-xl tv-glass"
            style={{ filter: 'contrast(1.15) brightness(0.98) saturate(1.1)' }}
            aria-hidden="true"
            tabIndex={-1}
          />
          {/* Dark overlay for video */}
          <div className="absolute inset-0 rounded-none xl:rounded-[3rem] bg-linear-to-b from-black/70 via-black/40 to-black/70 pointer-events-none z-10" aria-hidden="true"></div>
          {/* Scanline/overlay effect */}
          <div className="pointer-events-none absolute inset-0 rounded-none xl:rounded-[3rem] mix-blend-soft-light opacity-60 tv-scanlines" aria-hidden="true"></div>
          {/* Subtle inner shadow for glass */}
          <div className="pointer-events-none absolute inset-0 rounded-none xl:rounded-[3rem] shadow-[inset_0_8px_32px_#000a,inset_0_-8px_32px_#000a]" aria-hidden="true"></div>
        </div>
        {/* Content Section: below video on mobile, overlay on desktop */}
        <div className="relative w-full h-auto xl:h-auto xl:absolute xl:inset-0 xl:flex xl:items-start xl:justify-center z-10 p-0 xl:pt-25">
          <div className="flex flex-col items-center justify-start px-4 sm:px-8 xl:px-0 w-full bg-black/80 xl:bg-transparent m-0 xl:mt-16 pb-4 drop-shadow-2xl shadow-amber-500">
            <h2 className="w-full max-w-3xl mx-auto text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white text-center drop-shadow-2xl mb-2 leading-tight flex items-center justify-center gap-2">
              {/* Spoon Image (vertical, before text) */}
              <span className="inline-flex items-center h-[2em] sm:h-[2.5em] md:h-[3em] lg:h-[4em]">
                <Image src="/images/logo/spoon.png" alt="Spoon" height={128} width={128} className="h-full w-auto object-contain filter invert brightness-200" />
              </span>
              <span className="block w-full ">
                Taste From The
                <span className="block w-full text-[#f3d573] stroke-2 stroke-white tracking-normal text-[1.25em] md:text-[1.28em] lg:text-[1.38em] uppercase" style={{letterSpacing: '0.01em'}}>
                  HIMALAYAS
                </span>
              </span>
              {/* Fork Image (vertical, after text) */}
              <span className="inline-flex items-center h-[2em] sm:h-[2.5em] md:h-[3em] lg:h-[4em]">
                <Image src="/images/logo/fork.png" alt="Fork" height={128} width={128} className="h-full w-auto object-contain filter invert brightness-200" />
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 text-center max-w-4xl mb-4 font-serif drop-shadow-lg ">
              Experience authentic Himalayan flavors, crafted with passion and tradition.
            </p>
            {/* Action Buttons - always below subtext, never overlapping */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-5 justify-center items-stretch sm:items-center hero-buttons w-full max-w-2xl mx-auto mb-0 mt-2">
              {/* Only CTA - Order Now */}
              <button
                onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
                className="group relative overflow-hidden bg-yellow-600 hover:bg-white text-white hover:text-black border-2 border-white hover:border-yellow-500 font-bold py-4 sm:py-5 lg:py-6 px-6 sm:px-8 lg:px-10 rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-40 sm:min-w-[180px] lg:min-w-[200px] shadow-xl cursor-pointer"
                aria-label="Order food online for delivery or pickup"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-wide group-hover:animate-[flip_0.6s_ease-in-out]">Order Online</span>
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50 ml-2" aria-hidden="true"></div>
              </button>
            </div>
          </div>
        </div>
        {/* Remove extra margin below content on small screens */}
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
