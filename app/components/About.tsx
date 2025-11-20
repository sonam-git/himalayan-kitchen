"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Always set visible true on small screens to avoid animation hiding content
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
  }, []);

  return (
    <>
      <section
        id="about"
        className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
        </div>
        {/* Image as Section Background with Blur Overlay */}
        <div className="absolute inset-0 w-full h-full sm:h-full aspect-video sm:aspect-auto z-0">
          <Image
            src="/images/other/backdrop2.png"
            alt="About Background"
            fill
            priority
            className="object-content object-center w-full h-full rounded-2xl sm:rounded-3xl opacity-80"
          />
          <div className="absolute inset-0 bg-black/70 dark:bg-black/80 rounded-2xl sm:rounded-3xl"></div>
        </div>
        <div className="relative ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16 ">
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <span className="inline-block px-6 py-2 mt-4 bg-linear-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-6">
                  Taste From{" "}
                  <span className="bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">
                    The Himalayas
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-50 max-w-3xl mx-auto leading-relaxed ">
                  Where ancient traditions meet modern culinary excellence in
                  the heart of San Rafael
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Enhanced Content */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                {/* Greeting Card */}
                <div className="relative rounded-2xl p-8 shadow-xl border border-orange-200/50 dark:border-red-500/50 mb-8 transform hover:scale-105 transition-transform duration-300 overflow-hidden bg-white dark:bg-gray-700">
                  {/* Background image and dark overlay */}
                  <div className="absolute inset-0 w-full h-full z-0 rounded-2xl shadow-[0_4px_32px_0_rgba(255,255,255,0.5)]">
                    <Image
                      src="/images/other/aboutSketch.png"
                      alt="About Sketch"
                      fill
                      className="object-cover w-full h-full rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gray-800 dark:bg-gray-700 opacity-80 blur-md rounded-2xl"></div>
                  </div>
                  {/* Content above background */}
                  <div className="relative z-10">
                    {/* Prayer Flags above the card */}
                    <div className="flex justify-center items-end mb-4 pb-2">
                      <div className="flex items-end space-x-1">
                        {/* Blue Flag */}
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-16 bg-linear-to-b from-gray-400 to-gray-600"></div>
                          <div className="w-14 h-12 bg-blue-500 border-2 border-blue-700 flex items-center justify-center text-white text-sm font-bold shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            <span className="opacity-80">॰</span>
                          </div>
                        </div>
                        {/* White Flag */}
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-20 bg-linear-to-b from-gray-400 to-gray-600"></div>
                          <div className="w-14 h-12 bg-white border-2 border-gray-400 flex items-center justify-center text-gray-800 text-sm font-bold shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <span className="opacity-80">॰</span>
                          </div>
                        </div>
                        {/* Red Flag */}
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-14 bg-linear-to-b from-gray-400 to-gray-600"></div>
                          <div className="w-14 h-12 bg-red-500 border-2 border-red-700 flex items-center justify-center text-white text-sm font-bold shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <span className="opacity-80">॰</span>
                          </div>
                        </div>
                        {/* Green Flag */}
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-18 bg-linear-to-b from-gray-400 to-gray-600"></div>
                          <div className="w-14 h-12 bg-green-600 border-2 border-green-800 flex items-center justify-center text-white text-sm font-bold shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <span className="opacity-80">॰</span>
                          </div>
                        </div>
                        {/* Yellow Flag */}
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-16 bg-linear-to-b from-gray-400 to-gray-600"></div>
                          <div className="w-14 h-12 bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center text-gray-800 text-sm font-bold shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                            <span className="opacity-80">॰</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4 justify-center">
                      <div className="w-3 h-3 bg-linear-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
                      <div className="relative w-[260px] h-10 flex items-center justify-center overflow-hidden">
                        <span
                          key={greetingIndex}
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-md font-bold text-center text-transparent bg-linear-to-r from-yellow-100 to-yellow-200 dark:from-yellow-100 dark:to-orange-400 bg-clip-text transition-all duration-700 ease-in-out animate-slide-horizontal"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {greetings[greetingIndex]}
                        </span>
                      </div>
                      <div className="w-3 h-3 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-md text-center text-gray-200 dark:text-white italic">
                      &quot;From our Sherpa family to yours, we warmly welcome
                      you.&quot;
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg text-gray-700 dark:text-white space-y-6">
                  <p className="text-md leading-relaxed text-white">
                    Welcome to{" "}
                    <span className="font-bold text-red-300 dark:text-red-400">
                      Himalayan Kitchen
                    </span>
                    , a family-owned restaurant operated by a Sherpa family from
                    the majestic Himalayan region of Nepal. Although Sherpas are
                    widely recognized for their achievements as mountain guides
                    and porters, we take pride in highlighting that Sherpa is,
                    first and foremost, an ethnic group with a rich cultural
                    identity and a vibrant culinary tradition rooted in northern
                    Nepal.
                  </p>

                  <div className=" from-orange-50 to-red-50 dark:from-gray-700 dark:bg-gray-600 rounded-xl p-6 border-l-4 border-orange-500 dark:border-red-500">
                    <p className="text-lg font-medium  text-gray-50 dark:text-gray-50 mb-2">
                      Our Philosophy
                    </p>
                    <p className="text-gray-200 dark:text-gray-100">
                      We believe real, wholesome food is better for you, your
                      well-being, and the planet. That&apos;s why we prepare
                      every dish from scratch, using authentic ingredients and
                      time-honored techniques passed down through generations.
                    </p>
                    <p className="text-yellow-200 dark:text-yellow-400 font-bold mt-3 text-lg">
                      &quot;Simply Fresh & Made With Love&quot;
                    </p>
                  </div>

                  <p className="text-md text-gray-50">
                    We opened our doors on{" "}
                    <span className="font-bold text-orange-200 dark:text-orange-400">
                      February 24, 2023
                    </span>
                    , and have been proudly serving authentic Himalayan
                    cuisine—rooted in passion, tradition, and care—ever since.
                  </p>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:(415) 526-3161"
                    className="group relative inline-flex items-center justify-center bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl overflow-hidden"
                  >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-red-300/20 to-orange-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-md scale-110"></div>

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
                    <span className="relative z-10 text-lg">
                      Call (415) 526-3161
                    </span>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/227%203rd%20St,%20San%20Rafael,%20CA%2094901"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center border-3 border-orange-300 dark:border-orange-600 hover:border-orange-500 dark:hover:border-orange-400 bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
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
                    <span className="text-lg">Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Enhanced Visual Section */}
              <div
                className={`relative transform transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                {/* Mt. Everest Image Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 bg-gray-100 dark:border-2-gray-50">
                  {/* Background Image */}
                  <div className="relative h-[400px] w-full">
                    <Image
                      src="/images/gallery/everest.JPG"
                      alt="Mt. Everest - World's Highest Peak"
                      fill
                      className="object-contain bg-white dark:bg-gray-900 rounded-3xl shadow-[0_8px_32px_0_rgba(255,255,255,0.25)]"
                      priority
                    />
                  </div>

                  {/* Content Below Image */}
                  <div className="bg-white dark:bg-gray-900 p-6 md:p-8">
                    <div className="text-gray-900 dark:text-white">
                      {/* Summit Badge */}
                      <div className="flex items-center justify-center mb-4">
                        <div className="inline-flex items-center bg-linear-to-r from-red-600 to-orange-600 px-5 py-2 rounded-full border-2 border-yellow-400 shadow-lg">
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
                      {/* Main Story */}
                      <div className="text-center mb-5">
                        <h4 className="text-xl md:text-2xl font-black mb-3 text-transparent bg-linear-to-r from-yellow-400 via-red-400 to-orange-400 bg-clip-text">
                          A Historic Achievement
                        </h4>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                          <p className="text-base md:text-md leading-relaxed mb-3 text-gray-900 dark:text-white">
                            In{" "}
                            <span className="font-black dark:text-yellow-400">
                              2024
                            </span>
                            , renowned climber{" "}
                            <span className="font-bold text-red-400">
                              Pema Chhiring Sherpa
                            </span>
                            , a close relative of the HK family, proudly
                            displayed the{" "}
                            <span className="font-bold text-orange-400">
                              Himalayan Kitchen logo
                            </span>{" "}
                            to the summit of Mt. Everest, the world’s highest
                            peak at{" "}
                            <span className="font-semibold">8,849 meters</span>.
                          </p>
                          <div className="bg-linear-to-r from-red-600/20 to-orange-600/20 rounded-xl p-3 mb-3 border-l-4 border-yellow-400">
                            <p className="text-sm md:text-base text-gray-900 dark:text-white leading-relaxed">
                              <span className="font-bold dark:text-yellow-300">
                                Pema Chhiring Sherpa
                              </span>{" "}
                              has successfully scaled the world&apos;s top
                              mountain an incredible{" "}
                              <span className="font-black text-xl text-red-400">
                                24 times
                              </span>
                              , making him one of the most accomplished climbers
                              in history.
                            </p>
                          </div>
                          <p className="text-base italic text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-3">
                            We are deeply honored and grateful to Mr Sherpa for
                            being part of this monumental achievement and for
                            carrying our legacy to the top of the world. 🙏
                          </p>
                        </div>
                      </div>
                      {/* Stats Grid - Smaller Size */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="text-center bg-blue-50 dark:bg-blue-900/30 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-blue-200">
                          <div className="text-xl md:text-2xl font-black text-blue-600 dark:text-blue-300">
                            8,849m
                          </div>
                          <div className="text-[10px] uppercase tracking-wider opacity-90 text-blue-800 dark:text-blue-200">
                            Elevation
                          </div>
                        </div>
                        <div className="text-center bg-red-50 dark:bg-red-900/30 backdrop-blur-sm rounded-lg p-3 border border-red-400/30 hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-red-200">
                          <div className="text-xl md:text-2xl font-black text-red-600 dark:text-red-300">
                            24th
                          </div>
                          <div className="text-[10px] uppercase tracking-wider opacity-90 text-red-800 dark:text-red-200">
                            Summit
                          </div>
                        </div>
                        <div className="text-center bg-orange-50 dark:bg-orange-900/30 backdrop-blur-sm rounded-lg p-3 border border-orange-400/30 hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-orange-200">
                          <div className="text-xl md:text-2xl font-black text-orange-600 dark:text-orange-300">
                            2024
                          </div>
                          <div className="text-[10px] uppercase tracking-wider opacity-90 text-orange-800 dark:text-orange-200">
                            Year
                          </div>
                        </div>
                        <div className="text-center bg-green-50 dark:bg-green-900/30 backdrop-blur-sm rounded-lg p-3 border border-green-400/30 hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-green-200">
                          <div className="text-xl md:text-2xl font-black text-green-600 dark:text-green-300">
                            🏔️
                          </div>
                          <div className="text-[10px] uppercase tracking-wider opacity-90 text-green-800 dark:text-green-200">
                            Legend
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
