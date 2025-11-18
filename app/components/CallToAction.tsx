'use client';
import React from 'react';

const CallToAction: React.FC = () => (
  <>
    {/* Additional Features Section */}
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="transform transition-all duration-1000 delay-700 translate-y-0 opacity-100"> 
        <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-red-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-linear-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Traditional Spices</h3>
          <p className="text-gray-600 dark:text-gray-100 text-sm">Imported directly from the Himalayan region for authentic flavors</p>
        </div>
      </div>
      <div className="transform transition-all duration-1000 delay-800 translate-y-0 opacity-100"> 
        <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-orange-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Made with Love</h3>
          <p className="text-gray-600 dark:text-gray-100 text-sm">Every dish is prepared with care by our family for yours</p>
        </div>
      </div>
      <div className="transform transition-all duration-1000 delay-900 translate-y-0 opacity-100"> 
        <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-yellow-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-linear-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fresh Daily</h3>
          <p className="text-gray-600 dark:text-gray-100 text-sm">All ingredients sourced fresh and prepared from scratch daily</p>
        </div>
      </div>
    </div>
    {/* Call to Action */}
    <div className="mt-16 sm:mt-20 text-center transition-all duration-1000 delay-500 opacity-100 translate-y-0">
      <div className="relative bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-700 dark:via-orange-700 dark:to-red-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative z-10">
          <div className="inline-block px-6 py-2 bg-white/30 dark:bg-white/20 rounded-full text-white font-semibold text-sm uppercase tracking-wider mb-6">
            Order Now
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 drop-shadow-lg">
            Ready to Order?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-red-100 max-w-2xl mx-auto leading-relaxed">
            Experience the taste of the Himalayas delivered straight to your door. Fresh, authentic, and absolutely delicious!
          </p>
          <button
            onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-red-600 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Order Online Now</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-red-100">
            🚀 Free delivery on orders over $30  •  ⏱️ Ready in 20-30 minutes
          </p>
        </div>
      </div>
    </div>
  </>
);

export default CallToAction;
