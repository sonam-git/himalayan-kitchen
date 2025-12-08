"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth < 640) {
          setIsVisible(true);
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const greetings = [
    "🙏 Hello 🙏",
    "🙏 Namaste 🙏",
    "🙏 Tashi Delek 🙏",
    "🙏 བཀྲ་ཤིས་བདེ་ལེགས། 🙏",
  ];
  const [greetingIndex, setGreetingIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <section
      id="about"
      className="relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 ">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
             <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-400 rounded-full text-gray-800 dark:text-yellow-100 font-semibold text-sm uppercase tracking-wider mb-6">
           Our Story
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-orange-600 dark:text-yellow-300 mb-6">
               From the Himalayas to Marin{" "}
              </h2>
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
                Where ancient traditions meet modern culinary excellence in
                the heart of San Rafael.
              </p>
            </div>
          </div>

          {/* Greeting Card - Full Width */}
          <div
            className={`transform transition-all duration-1000 delay-300 w-full mb-12 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative rounded-2xl p-8 shadow-xl border border-yellow-200/50 dark:border-yellow-500/50 transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden bg-white dark:bg-gray-800 w-full">
              <div className="absolute inset-0 w-full h-full z-0 rounded-2xl shadow-[0_4px_32px_0_rgba(255,255,255,0.5)]">
                <Image
                  src="/images/other/aboutSketch.png"
                  alt="Decorative sketch representing the Himalayas"
                  fill
                  className="object-fill w-full h-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gray-800 dark:bg-gray-700 opacity-80 blur-md rounded-2xl"></div>
              </div>
              
              {/* Left Image - Namaste Boy */}
              <div className="absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 md:w-40 lg:w-48">
                <div className="relative h-full">
                  <Image
                    src="/images/other/namasteBoy.png"
                    alt="Boy greeting with Namaste"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              
              {/* Right Image - Namaste Girl */}
              <div className="absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 md:w-40 lg:w-48">
                <div className="relative h-full">
                  <Image
                    src="/images/other/namasteGirl.png"
                    alt="Girl greeting with Namaste"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center items-end mb-4 pb-2">
                  <div className="flex items-end space-x-1">
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                      <div className="w-14 h-12 bg-blue-500 border-2 border-blue-700 flex items-center justify-center text-white text-sm font-bold shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                        <span className="opacity-80">॰</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-20 bg-gradient-to-b from-gray-100 to-gray-200"></div>
                      <div className="w-14 h-12 bg-gray-200 border-2 border-gray-400 flex items-center justify-center text-gray-800 text-sm font-bold shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                        <span className="opacity-80">॰</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-14 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                      <div className="w-14 h-12 bg-red-500 border-2 border-red-700 flex items-center justify-center text-white text-sm font-bold shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                        <span className="opacity-80">॰</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-18 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                      <div className="w-14 h-12 bg-green-600 border-2 border-green-800 flex items-center justify-center text-white text-sm font-bold shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <span className="opacity-80">॰</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                      <div className="w-14 h-12 bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center text-gray-800 text-sm font-bold shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                        <span className="opacity-80">॰</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-4 justify-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <div className="relative w-[260px] h-10 flex items-center justify-center overflow-hidden">
                    <span
                      key={greetingIndex}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-md font-bold text-center text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 dark:from-yellow-300 dark:to-yellow-500 bg-clip-text transition-all duration-700 ease-in-out animate-slide-horizontal"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {greetings[greetingIndex]}
                    </span>
                  </div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-md text-center text-yellow-100 dark:text-gray-200 italic px-5 sm:px-0">
                  &quot;From our Sherpa family to yours, we warmly welcome you.&quot;
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout - Text Content & Everest Summit */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="prose prose-lg space-y-6">
                <p className="text-md leading-relaxed text-gray-800 dark:text-gray-200 font-[Georgia,'Times_New_Roman',Times,serif]">
                  <span className="font-bold text-orange-600 dark:text-yellow-400">
                    Himalayan Kitchen Marin
                  </span>{" "}
                  is a Sherpa-owned restaurant born in the mountains of Nepal and brought with love to the heart of San Rafael. Our story begins high in the Himalayas, where our family grew up surrounded by snow peaks, prayer flags, and warm kitchens filled with the aroma of momo, slow-cooked curries, and freshly ground spices. Food was never just food—it was culture, comfort, and connection, prepared with patience and shared with generosity.
                </p>

                <p className="text-md leading-relaxed text-gray-800 dark:text-gray-200 font-[Georgia,'Times_New_Roman',Times,serif]">
                  When we came to Marin, we carried a simple dream: to share the flavors and hospitality we were raised with. On{" "}
                  <span className="font-bold text-orange-600 dark:text-yellow-400">
                    February 24, 2023
                  </span>
                  , we opened our doors and welcomed our first guests, beginning a journey that has since connected our Himalayan roots to the vibrant community of Marin. What started as a small family effort has become a place where guests feel at home, where authentic Himalayan cuisines are made the traditional way, and where every plate is prepared with the same care we learned from our parents and grandparents.
                </p>

                <div className="rounded-xl p-6 border-l-4 border-orange-500 dark:border-yellow-400 bg-orange-50/50 dark:bg-yellow-900/20">
                  <p className="text-gray-800 dark:text-gray-200 font-[Georgia,'Times_New_Roman',Times,serif]">
                    The momo you enjoy here is hand-rolled just like back home. Our curries are slow-simmered with house-ground masalas, and our chutneys, tandoori marinades, and spices are prepared fresh to honor true Himalayan flavor.
                  </p>
                </div>

                <p className="text-md leading-relaxed text-gray-800 dark:text-gray-200 font-[Georgia,'Times_New_Roman',Times,serif]">
                  Over the years, Himalayan Kitchen has grown into a gathering place for both locals and the Himalayan community. We&apos;ve had the honor of welcoming Everest climbers, community leaders, families, and friends who all bring their own stories into ours. We proudly support local events and teams like Himalayan Sonoma FC, believing that food is one of the most powerful ways to build connection and belonging.
                </p>

                <p className="text-md leading-relaxed text-gray-800 dark:text-gray-200 font-[Georgia,'Times_New_Roman',Times,serif]">
                  Everything we serve—from our thukpa to our chow mein to curry specials—is inspired by the recipes and traditions we carried across continents. Our hope is that every guest experiences not just a meal, but the warmth, heart, and heritage of a Himalayan kitchen.
                </p>

                <p className="text-md leading-relaxed text-orange-700 dark:text-yellow-400 font-semibold italic font-[Georgia,'Times_New_Roman',Times,serif]">
                  From the mountains of Nepal to Marin County, thank you for being part of our journey. We are grateful to welcome you to our table and share a taste of home with you.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:(415) 526-3161"
                  className="group relative inline-flex items-center justify-center bg-yellow-800 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-md scale-110"></div>
                  <svg
                    className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="relative z-10 text-lg font-[Georgia,'Times_New_Roman',Times,serif]">
                    Call (415) 526-3161
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                </a>

                <a
                  href="https://www.google.com/maps/search/227%203rd%20St,%20San%20Rafael,%20CA%2094901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center border-3 border-yellow-400 dark:border-yellow-500 hover:border-yellow-500 dark:hover:border-yellow-400 bg-white dark:bg-gray-800 hover:bg-yellow-50 dark:hover:bg-gray-700 text-yellow-700 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-bold py-2 px-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-lg font-[Georgia,'Times_New_Roman',Times,serif]">Get Directions</span>
                </a>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 bg-gray-100 dark:border-2-gray-50">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/images/gallery/everest.JPG"
                    alt="Mt. Everest - World's Highest Peak"
                    fill
                    className="object-contain bg-white dark:bg-gray-900 shadow-[0_8px_32px_0_rgba(255,255,255,0.25)] "
                    priority
                  />
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 md:p-8">
                  <div className="text-gray-900 dark:text-white">
                    <div className="flex items-center justify-center mb-4">
                      <div className="inline-flex items-center bg-yellow-600 dark:bg-yellow-500 px-5 py-2 rounded-full border-2 border-yellow-400 dark:border-yellow-300 shadow-lg">
                        <svg
                          className="w-5 h-5 mr-2 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22l-9-12z" />
                        </svg>
                        <span className="font-black text-white text-base">
                          Mt. Everest Summit 2024
                        </span>
                      </div>
                    </div>
                    <div className="text-center mb-5">
                      <h4 className="text-xl md:text-2xl font-black mb-3 text-yellow-600 dark:text-yellow-400">
                        A Historic Achievement
                      </h4>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                        <p className="text-base md:text-md leading-relaxed mb-3 text-gray-900 dark:text-white font-[Georgia,'Times_New_Roman',Times,serif]">
                          In{" "}
                          <span className="font-black text-yellow-600 dark:text-yellow-400">
                            2024
                          </span>
                          , renowned climber{" "}
                          <span className="font-bold text-yellow-600 dark:text-yellow-400">
                            Pema Chhiring Sherpa
                          </span>
                          , a close relative of the HK family, proudly
                          displayed the{" "}
                          <span className="font-bold text-yellow-600 dark:text-yellow-400">
                            Himalayan Kitchen logo
                          </span>{" "}
                          to the summit of Mt. Everest, the world&apos;s highest
                          peak at{" "}
                          <span className="font-semibold">8,848 meters</span>.
                        </p>
                        <div className="bg-yellow-50 dark:bg-gray-800/50 rounded-xl p-3 mb-3 border-l-4 border-yellow-500 dark:border-yellow-400">
                          <p className="text-sm md:text-base text-gray-900  leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
                            <span className="font-bold text-yellow-600 dark:text-yellow-400">
                              Pema Chhiring Sherpa
                            </span>{" "}
                            <span className=" text-gray-800 dark:text-white ">
                              has successfully scaled the world&apos;s top
                            {" "}
                            mountain an incredible{" "}</span>
                            <span className="font-black text-xl text-yellow-600 dark:text-yellow-400">
                              24 times
                            </span>
                            <span className=" text-gray-800 dark:text-white ">
                            , making him one of the most accomplished climbers
                            in history.</span>
                          </p>
                        </div>
                        <p className="text-base italic text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-3 font-[Georgia,'Times_New_Roman',Times,serif]">
                          We are deeply honored and grateful to Mr Sherpa for
                          being part of this monumental achievement and for
                          carrying our legacy to the top of the world. 🙏
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="text-center bg-yellow-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-yellow-400/30 hover:scale-105 transition-transform duration-300">
                        <div className="text-xl md:text-2xl font-black text-yellow-600 dark:text-yellow-400">
                          8,848m
                        </div>
                        <div className="text-[10px] uppercase tracking-wider opacity-90 text-gray-800 dark:text-gray-100">
                          Elevation
                        </div>
                      </div>
                      <div className="text-center bg-yellow-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-yellow-400/30 hover:scale-105 transition-transform duration-300">
                        <div className="text-xl md:text-2xl font-black text-yellow-600 dark:text-yellow-400">
                          24th
                        </div>
                        <div className="text-[10px] uppercase tracking-wider opacity-90 text-gray-800 dark:text-gray-100">
                          Summit
                        </div>
                      </div>
                      <div className="text-center bg-yellow-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-yellow-400/30 hover:scale-105 transition-transform duration-300">
                        <div className="text-xl md:text-2xl font-black text-yellow-600 dark:text-yellow-400">
                          2024
                        </div>
                        <div className="text-[10px] uppercase tracking-wider opacity-90 text-gray-800 dark:text-gray-100">
                          Year
                        </div>
                      </div>
                      <div className="text-center bg-yellow-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-yellow-400/30 hover:scale-105 transition-transform duration-300">
                        <div className="text-xl md:text-2xl font-black text-yellow-600 dark:text-yellow-400">
                          🏔️
                        </div>
                        <div className="text-[10px] uppercase tracking-wider opacity-90 text-gray-800 dark:text-gray-100">
                          Legend
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
                          {/* Facebook Link */}
                    <div className="mt-6 text-center">
                      <a
                        href="https://www.facebook.com/pema.sherpa.632855"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span className="text-sm md:text-base font-[Georgia,'Times_New_Roman',Times,serif]">
                          Connect with Pema Chhiring Sherpa
                        </span>
                      </a>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
