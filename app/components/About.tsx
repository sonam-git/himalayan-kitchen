"use client";

import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    <section id="about" className="relative py-24 bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-all duration-1000 w-full max-w-full rounded-lg sm:rounded-xl md:rounded-2xl my-2 sm:my-3 md:my-4">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-lg sm:rounded-xl md:rounded-2xl">
        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-red-100/40 to-transparent dark:from-red-900/20"></div>
        
        {/* Floating Prayer Flags - Adjusted for mobile */}
        <div className="absolute top-20 -right-10 w-2 h-20 bg-gradient-to-b from-red-400 via-orange-400 to-yellow-400 opacity-30 transform rotate-12 animate-pulse hidden md:block"></div>
        <div className="absolute top-32 -right-20 md:-right-32 w-2 h-16 bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 opacity-20 transform -rotate-12 animate-pulse hidden md:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-16 -right-32 md:-right-64 w-2 h-24 bg-gradient-to-b from-yellow-400 via-red-400 to-orange-400 opacity-25 transform rotate-6 animate-pulse hidden lg:block" style={{ animationDelay: '2s' }}></div>
        
        {/* Decorative Patterns - Kept within bounds */}
        <div className="absolute top-0 -left-32 w-64 h-64 bg-gradient-radial from-orange-200/20 via-transparent to-transparent dark:from-orange-800/10 rounded-full"></div>
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-gradient-radial from-red-200/20 via-transparent to-transparent dark:from-red-800/10 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-red-700 to-orange-700 dark:from-white dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-lg">
              Tastes from the
              <br />
              <span className="relative">
                Himalayas
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full opacity-60"></div>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where ancient traditions meet modern culinary excellence in the heart of San Rafael
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Greeting Card */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-200/50 dark:border-orange-700/30 mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text">
                  Hello! Namaste! & Tashi Delek!
                </span>
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-lg text-gray-700 dark:text-gray-300 italic">
                &quot;A warm welcome from our Sherpa family to yours&quot;
              </div>
            </div>

            <div className="prose prose-lg text-gray-700 dark:text-gray-300 space-y-6">
              <p className="text-xl leading-relaxed">
                Welcome to <span className="font-bold text-red-700 dark:text-red-400">Himalayan Kitchen</span>, owned and run by a Sherpa family from the majestic Himalayan region of Nepal. While Sherpas are renowned worldwide as mountain guides and porters, we are proudly an ethnic group with rich culinary traditions from northern Nepal.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border-l-4 border-orange-500">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Our Philosophy
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We believe real food is better for you, your health, and our planet. That&apos;s why we craft everything from scratch with authentic ingredients and techniques passed down through generations.
                </p>
                <p className="text-red-700 dark:text-red-400 font-bold mt-3 text-lg">
                  &quot;Simply Fresh and Made With Love&quot;
                </p>
              </div>

              {/* Chef Spotlight */}
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-red-200/50 dark:border-red-700/30 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      Meet Chef Nawang Sherpa
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
                className="group relative inline-flex items-center justify-center border-3 border-orange-300 dark:border-orange-600 hover:border-orange-500 dark:hover:border-orange-400 bg-white/80 dark:bg-gray-800/80 hover:bg-orange-50 dark:hover:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl backdrop-blur-sm"
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
            {/* Main Stats Card */}
            <div className="relative bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 dark:from-red-600 dark:via-orange-700 dark:to-yellow-600 rounded-3xl p-10 text-white shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-6 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Prayer Flag Pattern */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  <div className="w-2 h-8 bg-white/20 rounded"></div>
                  <div className="w-2 h-6 bg-white/15 rounded"></div>
                  <div className="w-2 h-10 bg-white/25 rounded"></div>
                  <div className="w-2 h-7 bg-white/20 rounded"></div>
                </div>
              </div>

              <div className="relative z-10 text-center">
                {/* Mountain Peak Icon */}
                <div className="w-28 h-28 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center relative overflow-hidden group">
                  <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22l-9-12z"/>
                  </svg>
                  {/* Rotating Border */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black mb-4 drop-shadow-lg">
                  Award Winning
                </h3>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Recognized for exceptional Himalayan cuisine and outstanding service in the heart of Marin County
                </p>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center group">
                    <div className="relative">
                      <div className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                        20<span className="text-3xl">+</span>
                      </div>
                      <div className="absolute -inset-2 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-lg font-semibold opacity-90">Years Experience</div>
                    <div className="text-sm opacity-75 mt-1">Master Chef Legacy</div>
                  </div>
                  <div className="text-center group">
                    <div className="relative">
                      <div className="text-5xl md:text-6xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                        4.8<span className="text-yellow-300">★</span>
                      </div>
                      <div className="absolute -inset-2 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-lg font-semibold opacity-90">Star Rating</div>
                    <div className="text-sm opacity-75 mt-1">Customer Reviews</div>
                  </div>
                </div>

                {/* Additional Achievement Badges */}
                <div className="mt-10 flex justify-center space-x-6">
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Authentic</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Fresh</span>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2 group-hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Family</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 right-8 w-3 h-3 bg-yellow-300/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-orange-200/50 dark:border-orange-700/30 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">🏔️</div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">Everest Veteran</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Mt. Everest 1998</div>
                </div>
              </div>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-red-200/50 dark:border-red-700/30 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">🏃‍♂️</div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">Sherpa Pride</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Traditional Heritage</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-red-200/30 dark:border-red-700/30 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Traditional Spices</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Imported directly from the Himalayan region for authentic flavors</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-orange-200/30 dark:border-orange-700/30 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Made with Love</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Every dish is prepared with care by our family for yours</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-yellow-200/30 dark:border-yellow-700/30 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fresh Daily</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">All ingredients sourced fresh and prepared from scratch daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
