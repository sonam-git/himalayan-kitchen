"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-all duration-300 w-full max-w-full rounded-lg sm:rounded-xl md:rounded-2xl my-2 sm:my-3 md:my-4">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-lg sm:rounded-xl md:rounded-2xl dark:bg-gray-900">
        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-red-100/40 to-transparent dark:from-red-900/20"></div>
        
        {/* Floating Prayer Flags - Adjusted for mobile */}
        <div className="absolute top-20 -right-10 w-2 h-20 bg-linear-to-b from-red-400 via-orange-400 to-yellow-400 opacity-30 transform rotate-12 animate-pulse hidden md:block"></div>
        <div className="absolute top-32 -right-20 md:-right-32 w-2 h-16 bg-linear-to-b from-blue-400 via-green-400 to-purple-400 opacity-20 transform -rotate-12 animate-pulse hidden md:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-16 -right-32 md:-right-64 w-2 h-24 bg-linear-to-b from-yellow-400 via-red-400 to-orange-400 opacity-25 transform rotate-6 animate-pulse hidden lg:block" style={{ animationDelay: '2s' }}></div>
        
        {/* Decorative Patterns - Kept within bounds */}
        <div className="absolute top-0 -left-32 w-64 h-64 bg-gradient-radial from-orange-200/20 via-transparent to-transparent dark:from-orange-800/10 rounded-full"></div>
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-gradient-radial from-red-200/20 via-transparent to-transparent dark:from-red-800/10 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 ">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-red-700 to-orange-700 dark:from-white dark:via-red-300 dark:to-orange-300 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-lg">
              Tastes from the
              <br />
              <span >
                Himalayas
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full opacity-60"></div>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-50 max-w-3xl mx-auto leading-relaxed ">
              Where ancient traditions meet modern culinary excellence in the heart of San Rafael
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Greeting Card */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl border border-orange-200/50 dark:border-red-500/50 mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text">
                  Hello! Namaste! & Tashi Delek!
                </span>
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-lg text-gray-700 dark:text-white italic">
                &quot;A warm welcome from our Sherpa family to yours&quot;
              </div>
            </div>

            <div className="prose prose-lg text-gray-700 dark:text-white space-y-6">
              <p className="text-xl leading-relaxed">
                Welcome to <span className="font-bold text-red-700 dark:text-red-400">Himalayan Kitchen</span>, owned and run by a Sherpa family from the majestic Himalayan region of Nepal. While Sherpas are renowned worldwide as mountain guides and porters, we are proudly an ethnic group with rich culinary traditions from northern Nepal.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border-l-4 border-orange-500 dark:border-red-500">
                <p className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  Our Philosophy
                </p>
                <p className="text-gray-700 dark:text-gray-100">
                  We believe real food is better for you, your health, and our planet. That&apos;s why we craft everything from scratch with authentic ingredients and techniques passed down through generations.
                </p>
                <p className="text-red-700 dark:text-red-400 font-bold mt-3 text-lg">
                  &quot;Simply Fresh and Made With Love&quot;
                </p>
              </div>

              {/* Chef Spotlight */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 border border-red-200/50 dark:border-red-500/50 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Meet Chef Nawang Sherpa
                    </h3>
                    <p className="text-gray-700 dark:text-gray-100 leading-relaxed">
                      Our Head Chef and co-owner <span className="font-bold text-red-700 dark:text-red-400">Nawang Sherpa</span> conquered Mt. Everest in 1998 and has brought that same determination to mastering authentic Himalayan cuisine for over <span className="font-semibold">2 decades</span>.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg">
                We opened our doors on <span className="font-bold text-orange-600 dark:text-orange-400">February 24, 2023</span>, and have been serving authentic Himalayan cuisine with passion, tradition, and love ever since.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:(415) 526-3161"
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 dark:from-red-500 dark:to-red-600 dark:hover:from-red-600 dark:hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-300/20 to-orange-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-md scale-110"></div>
                
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative z-10 text-lg">Call (415) 526-3161</span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
              </a>
              
              <a
                href="https://www.google.com/maps/search/227%203rd%20St,%20San%20Rafael,%20CA%2094901"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center border-3 border-orange-300 dark:border-orange-600 hover:border-orange-500 dark:hover:border-orange-400 bg-white dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">Get Directions</span>
              </a>
            </div>
          </div>

          {/* Enhanced Visual Section */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Prayer Flags above the card */}
            <div className="flex justify-center items-end mb-4 pb-2">
              <div className="flex items-end space-x-1">
                {/* Blue Flag */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                  <div className="w-14 h-12 bg-blue-500 border-2 border-blue-700 flex items-center justify-center text-white text-sm font-bold shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="opacity-80">॰</span>
                  </div>
                </div>
                {/* White Flag */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-20 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                  <div className="w-14 h-12 bg-white border-2 border-gray-400 flex items-center justify-center text-gray-800 text-sm font-bold shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <span className="opacity-80">॰</span>
                  </div>
                </div>
                {/* Red Flag */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-14 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                  <div className="w-14 h-12 bg-red-500 border-2 border-red-700 flex items-center justify-center text-white text-sm font-bold shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                    <span className="opacity-80">॰</span>
                  </div>
                </div>
                {/* Green Flag */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-18 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                  <div className="w-14 h-12 bg-green-600 border-2 border-green-800 flex items-center justify-center text-white text-sm font-bold shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <span className="opacity-80">॰</span>
                  </div>
                </div>
                {/* Yellow Flag */}
                <div className="flex flex-col items-center">
                  <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                  <div className="w-14 h-12 bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center text-gray-800 text-sm font-bold shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <span className="opacity-80">॰</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mt. Everest Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              {/* Background Image */}
              <div className="relative h-[400px] w-full">
                <Image 
                  src="/images/everest.jpg" 
                  alt="Mt. Everest - World's Highest Peak" 
                  fill
                  className="object-contain bg-gray-900"
                  priority
                />
              </div>

              {/* Content Below Image */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black p-6 md:p-8">
                <div className="text-white">
                  {/* Summit Badge */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 px-5 py-2 rounded-full border-2 border-yellow-400 shadow-lg">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22l-9-12z"/>
                      </svg>
                      <span className="font-black text-base">Mt. Everest Summit 2024</span>
                    </div>
                  </div>
                  
                  {/* Main Story */}
                  <div className="text-center mb-5">
                    <h4 className="text-xl md:text-2xl font-black mb-3 text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-orange-400 bg-clip-text">
                      A Historic Achievement
                    </h4>                      <div className="bg-white/10 dark:bg-white/5 rounded-2xl p-5 border border-white/10">
                      <p className="text-base md:text-lg leading-relaxed mb-3 text-gray-100">
                        In <span className="font-black text-yellow-400">2024</span>, renowned climber <span className="font-bold text-red-400">Pasang Sherpa</span> proudly waved the <span className="font-bold text-orange-400">Himalayan Kitchen logo</span> at the summit of Mt. Everest, the world&apos;s highest peak at <span className="font-semibold">8,849 meters</span>.
                      </p>
                      
                      <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl p-3 mb-3 border-l-4 border-yellow-400">
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                          <span className="font-bold text-yellow-300">Pasang Sherpa</span> has successfully scaled the world&apos;s top mountain an incredible <span className="font-black text-xl text-red-400">24 times</span>, making him one of the most accomplished climbers in history.
                        </p>
                      </div>
                      
                      <p className="text-base italic text-gray-300 border-t border-white/20 pt-3">
                        We are deeply honored and grateful to Pasang Sherpa for being part of this monumental achievement and for carrying our legacy to the top of the world. 🙏
                      </p>
                    </div>
                  </div>
                  
                  {/* Stats Grid - Smaller Size */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="text-center bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 hover:scale-105 transition-transform duration-300">
                      <div className="text-xl md:text-2xl font-black text-blue-300">8,849m</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-90 text-blue-200">Elevation</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-lg p-3 border border-red-400/30 hover:scale-105 transition-transform duration-300">
                      <div className="text-xl md:text-2xl font-black text-red-300">24th</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-90 text-red-200">Summit</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm rounded-lg p-3 border border-orange-400/30 hover:scale-105 transition-transform duration-300">
                      <div className="text-xl md:text-2xl font-black text-orange-300">2024</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-90 text-orange-200">Year</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-lg p-3 border border-green-400/30 hover:scale-105 transition-transform duration-300">
                      <div className="text-xl md:text-2xl font-black text-green-300">🏔️</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-90 text-green-200">Legend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-red-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Traditional Spices</h3>
              <p className="text-gray-600 dark:text-gray-100 text-sm">Imported directly from the Himalayan region for authentic flavors</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-orange-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Made with Love</h3>
              <p className="text-gray-600 dark:text-gray-100 text-sm">Every dish is prepared with care by our family for yours</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-yellow-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fresh Daily</h3>
              <p className="text-gray-600 dark:text-gray-100 text-sm">All ingredients sourced fresh and prepared from scratch daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
