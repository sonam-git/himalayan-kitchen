"use client";

import { useState, useEffect } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services');
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
    <section id="services" className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-800 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-lg sm:rounded-xl md:rounded-2xl">
        {/* Geometric Patterns */}
        <div className="absolute top-20 -left-20 w-32 h-32 bg-linear-to-br from-red-200/20 to-orange-200/20 dark:from-red-800/10 dark:to-orange-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-40 h-40 bg-linear-to-bl from-orange-200/25 to-yellow-200/25 dark:from-orange-800/15 dark:to-yellow-800/15 rounded-full blur-3xl"></div>
        
        {/* Floating Service Icons */}
        <div className="absolute top-32 -right-20 w-8 h-8 border-2 border-red-300/30 dark:border-red-600/30 rounded-lg rotate-12 animate-pulse opacity-40 hidden md:block"></div>
        <div className="absolute bottom-40 -left-20 w-6 h-6 border-2 border-orange-300/30 dark:border-orange-600/30 rounded-full animate-pulse opacity-30 hidden md:block" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-linear-to-r from-red-400/20 to-orange-400/20 dark:from-red-600/20 dark:to-orange-600/20 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-6 py-2 bg-linear-to-r from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20 border border-orange-200/50 dark:border-orange-700/50 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">
              What We Offer
            </span>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-linear-to-r from-gray-900 via-red-700 to-orange-700 dark:from-white dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent leading-tight mb-8 drop-shadow-lg">
              Our Services
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Including our dine-in experience, we offer comprehensive catering and event services to bring authentic Himalayan flavors to your special occasions.
            </p>
            
            {/* Decorative Line */}
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 w-full">
          
          {/* Dine-In Experience */}
          <div className={`group transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative bg-linear-to-br from-red-50 via-orange-50 to-red-50/50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-red-900/20 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-red-100/50 dark:border-red-800/30 overflow-hidden backdrop-blur-sm">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-red-200/20 to-transparent dark:from-red-700/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>
              
              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 bg-linear-to-br from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                <svg className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2-5.5v.01M7 8h3v8H7V8z" />
                </svg>
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-red-400/30 to-orange-400/30 opacity-80 transition-opacity duration-500 rounded-2xl blur-md scale-110"></div>
                {/* Floating Particles */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-80 animate-ping transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors duration-300">
                Dine-In Experience
              </h3>
              
              <p className="text-md text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Immerse yourself in authentic Himalayan cuisine within our warm, welcoming atmosphere designed to transport you to the heart of Nepal.
              </p>
              
              {/* Enhanced Time Information */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-red-500 to-orange-500 rounded-full"></div>
                  <span className="font-bold">Lunch:</span>
                  <span>11:30 AM - 2:30 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                  <span className="font-bold">Dinner:</span>
                  <span>4:30 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-red-600 dark:text-red-400 font-bold">
                  <div className="w-2 h-2 bg-linear-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
                  <span>Open Daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* Takeout */}
          <div className={`group transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative bg-linear-to-br from-blue-50 via-indigo-50 to-blue-50/50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-blue-900/20 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-blue-100/50 dark:border-blue-800/30 overflow-hidden backdrop-blur-sm">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-blue-200/20 to-transparent dark:from-blue-700/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>
              
              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 bg-linear-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                <svg className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-400/30 to-indigo-400/30 opacity-80 transition-opacity duration-500 rounded-2xl blur-md scale-110"></div>
                {/* Floating Particles */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-80 animate-ping transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                Takeout
              </h3>
              
              <p className="text-md text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Order your favourite food from anywhere by calling or using our online ordering system.
                You can also preorder your meal and get it ready once you arrive.
              </p>
              
                {/* Enhanced Time Information */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                  <span className="font-bold">Lunch:</span>
                  <span>11:30 AM - 2:30 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                  <span className="font-bold">Dinner:</span>
                  <span>4:30 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-red-600 dark:text-red-400 font-bold">
                  <div className="w-2 h-2 bg-linear-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
                  <span>Open Daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* Catering */}
          <div className={`group transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative bg-linear-to-br from-green-50 via-emerald-50 to-green-50/50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-green-900/20  rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-green-100/50 dark:border-green-800/30 overflow-hidden backdrop-blur-sm md:col-span-2 lg:col-span-1">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-green-200/20 to-transparent dark:from-green-700/20 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>
              
              {/* Enhanced Icon */}
              <div className="relative w-20 h-20 bg-linear-to-br from-green-600 to-emerald-700 dark:from-green-500 dark:to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                <svg className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                {/* Icon Glow */}
                <div className="absolute inset-0 bg-linear-to-r from-green-400/30 to-emerald-400/30 opacity-80 transition-opacity duration-500 rounded-2xl blur-md scale-110"></div>
                {/* Floating Particles */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-lime-400 rounded-full opacity-80 animate-ping transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">
                Catering
              </h3>
              
              <p className="text-md text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Bring our exceptional Himalayan flavors to your location with professional catering services and convenient takeout party trays.
              </p>
              
              {/* Enhanced Catering Information */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  <span className="font-bold">Catering:</span>
                  <span>Any size events</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                  <span className="font-bold">Party Trays:</span>
                  <span>Perfect for gatherings</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-green-600 dark:text-green-400 font-bold">
                  <div className="w-2 h-2 bg-linear-to-r from-green-500 to-green-600 rounded-full animate-pulse"></div>
                  <span>Tailored menus • Fresh ingredients</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
