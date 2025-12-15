"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="intro-heading"
      className="relative flex flex-col items-center justify-center min-h-40 max-w-7xl mx-auto my-4 px-0 py-0 overflow-hidden bg-white/10 dark:bg-black/30 rounded-2xl shadow-[0_8px_32px_0_rgba(180,83,9,0.3),0_0_0_8px_rgba(202,138,4,0.15)] dark:shadow-[0_8px_32px_0_rgba(251,191,36,0.2),0_0_0_8px_rgba(251,191,36,0.08)] drop-shadow-[0_0_32px_rgba(180,83,9,0.25)] dark:drop-shadow-[0_0_32px_rgba(251,191,36,0.2)] border border-yellow-300/40 dark:border-yellow-200/30 backdrop-blur-md backdrop-saturate-150"
      style={{ background: 'none' }}
    >
      {/* Full background image with dark overlay */}
      <div className="absolute inset-0 w-full h-full z-0 max-w-7xl rounded-2xl" aria-hidden="true">
        <Image
          src="/images/gallery/dining1.jpeg"
          alt=""
          fill
          className="object-fill sm:cover object-center w-full h-full rounded-2xl"
          priority
        />
        {/* Enhanced dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/80 mix-blend-multiply" aria-hidden="true"></div>
      </div>
      {/* Main content centered on top of bg */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 py-6">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Header */}
          <div className="w-full flex flex-col items-center justify-center px-4 py-2">
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 ">
              <h2 id="intro-heading" className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-600 dark:text-yellow-300 font-serif drop-shadow-xl tracking-tight text-center">
                Welcome to Himalayan Kitchen Marin
              </h2>
            </div>
          </div>

          {/* Content - Always visible, no dropdown animation */}
          <div className="w-full mt-2 sm:mt-4 lg:mt-6">
            {/* Responsive Layout: 
                Mobile: Images side by side on top, text below
                Desktop: Three columns (Boy | Text | Girl) */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-2 sm:gap-3 lg:gap-6 px-2 w-full">
              
              {/* Mobile: Both Images Side by Side - Hidden on Desktop */}
              <div className="w-full flex lg:hidden items-center justify-center gap-2 sm:gap-3 order-1">
                {/* Left Image: Sherpa Boy - Slide from left */}
                <div className={`w-1/2 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}>
                  <div className="relative w-full aspect-[3/4] transition-all duration-300 hover:scale-105">
                    <Image
                      src="/images/other/namasteBoy.png"
                      alt="Sherpa boy welcoming you to our restaurant"
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                
                {/* Right Image: Sherpa Girl - Slide from right */}
                <div className={`w-1/2 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}>
                  <div className="relative w-full aspect-[3/4] transition-all duration-300 hover:scale-105">
                    <Image
                      src="/images/other/namasteGirl.png"
                      alt="Sherpa girl welcoming you to our restaurant"
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Desktop: Left Image - Sherpa Boy - Slide from left */}
              <div className={`hidden lg:flex w-full lg:w-1/3 flex-col items-center justify-center order-1 transition-all duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}>
                <div className="relative w-full aspect-[3/4] max-w-xs mx-auto transition-all duration-300 hover:scale-105">
                  <Image
                    src="/images/other/namasteBoy.png"
                    alt="Sherpa boy welcoming you to our restaurant"
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Center Column: Text and Button - Below images on mobile */}
              <div className="w-full lg:w-2/3 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 lg:space-y-4 order-2 lg:order-2 py-1 sm:py-2">
                {/* Decorative top flourish */}
                <div className="flex items-center gap-1 sm:gap-1.5 w-full justify-center">
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
                </div>

                {/* Welcome text in a warm card */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-orange-900/40 dark:to-gray-900/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-1.5 sm:p-2 lg:p-4 shadow-lg border border-yellow-300/50 sm:border-2 dark:border-yellow-500/30">
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-gray-800 dark:text-white font-[Georgia,'Times_New_Roman',Times,serif] text-center leading-relaxed">
                    From the <span className="font-bold text-yellow-800 dark:text-yellow-400">Himalayas</span> to <span className="font-bold text-yellow-800 dark:text-yellow-400">Marin</span>, our flavors travel far. Authentic Himalayan cuisine, warm hospitality, and a place to feel at home.
                  </p>
                  <p className="text-[10px] sm:text-xs lg:text-sm xl:text-base font-semibold text-yellow-800 dark:text-yellow-300 font-[Georgia,'Times_New_Roman',Times,serif] text-center mt-0.5 sm:mt-1 lg:mt-2 italic">
                    🙏 Come in as a guest, leave as family 🙏
                  </p>
                </div>

                {/* Our Story Button with warm styling */}
                <Link
                  href="/about"
                  className="group relative hover:no-underline inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 dark:from-yellow-600 dark:to-orange-600 dark:hover:from-yellow-700 dark:hover:to-orange-700 text-white font-bold shadow-[0_4px_16px_rgba(251,146,60,0.4)] sm:shadow-[0_6px_20px_rgba(251,146,60,0.4)] hover:shadow-[0_8px_24px_rgba(251,146,60,0.6)] hover:scale-105 transition-all duration-300 text-xs sm:text-sm lg:text-base focus:outline-none focus-visible:ring-2 sm:focus-visible:ring-4 focus-visible:ring-yellow-400/50 "
                  aria-label="Read our story on the About page"
                >
                  <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                    Our Story
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                  </span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                </Link>

                {/* Decorative bottom flourish */}
                <div className="flex items-center gap-1 sm:gap-1.5 w-full justify-center">
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
                </div>
              </div>

              {/* Desktop: Right Image - Sherpa Girl - Slide from right */}
              <div className={`hidden lg:flex w-full lg:w-1/3 flex-col items-center justify-center order-3 transition-all duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}>
                <div className="relative w-full aspect-[3/4] max-w-xs mx-auto transition-all duration-300 hover:scale-105">
                  <Image
                    src="/images/other/namasteGirl.png"
                    alt="Sherpa girl welcoming you to our restaurant"
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
