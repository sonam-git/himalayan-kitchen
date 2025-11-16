"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && systemTheme);
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-6">
      <div className="mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-200/30 dark:border-gray-700/30 rounded-b-xl sm:rounded-b-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo / Title */}
            <div className="flex items-center shrink-0 mr-4 md:mr-6 lg:mr-8">
              {/* Increased gap between logo image and heading */}
              <div className="flex items-center space-x-5 md:space-x-7 lg:space-x-10 xl:space-x-14 group cursor-pointer">
                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden ring-4 ring-gradient-to-r from-red-200/60 to-orange-200/60 dark:ring-red-800/40 shadow-2xl group-hover:shadow-red-500/50 dark:group-hover:shadow-red-400/50 transition-all duration-700 group-hover:ring-red-400/90 dark:group-hover:ring-red-600/70 group-hover:ring-8">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/40 to-orange-100/40 dark:from-red-900/40 dark:to-orange-900/40"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-spin blur-md"></div>
                <div className="relative w-full h-full group-hover:scale-110 transition-all duration-700 group-hover:rotate-360 transform-gpu perspective-1000">
                  <Image src="/images/hk-logo.jpg" alt="Himalayan Kitchen Logo" width={72} height={72} className="object-cover w-full h-full relative z-10 rounded-full shadow-inner" priority />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute top-3 right-1 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/30 via-orange-500/30 to-yellow-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              </div>
              <div className="flex flex-col justify-center space-y-0.5">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-black bg-gradient-to-r from-red-600 via-orange-600 to-red-700 dark:from-red-400 dark:via-orange-400 dark:to-red-500 bg-clip-text text-transparent leading-[1.05] tracking-tight group-hover:from-red-700 group-hover:via-yellow-600 group-hover:to-orange-700 dark:group-hover:from-red-300 dark:group-hover:via-yellow-300 dark:group-hover:to-orange-300 transition-all duration-700">HIMALAYAN</h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-script text-gray-700 dark:text-gray-200 -mt-1.5 tracking-wide font-bold group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-500">Kitchen Marin</p>
                <p className="text-xs md:text-xs lg:text-sm font-medium text-gray-500 dark:text-gray-400 -mt-1 tracking-widest opacity-90 group-hover:opacity-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all duration-500">ཧི་མ་ལ་ཡོན་གྱི་ཟས་ཁང་ མ་རིན།</p>
                <div className="w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-[width] duration-700 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-8">
            {/* Updated desktop navigation: icon above label, spaced apart */}
            <div className="flex items-center gap-8 xl:gap-10 2xl:gap-14">
              <a href="#home" className="group flex flex-col items-center justify-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
                <svg className="w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                <span className="relative text-sm xl:text-base font-medium tracking-wide">
                  Home
                  <span className="block mt-1 h-0.5 w-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </span>
              </a>
              <a href="#about" className="group flex flex-col items-center justify-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
                <svg className="w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="relative text-sm xl:text-base font-medium tracking-wide">
                  About
                  <span className="block mt-1 h-0.5 w-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </span>
              </a>
              <a href="#menu" className="group flex flex-col items-center justify-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
                <svg className="w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                <span className="relative text-sm xl:text-base font-medium tracking-wide">
                  Menu
                  <span className="block mt-1 h-0.5 w-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </span>
              </a>
              <a href="#services" className="group flex flex-col items-center justify-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
                {/* Replaced services icon with gear/cog for visibility */}
                <svg className="w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.89 3.31.876 2.42 2.42a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.89 1.543-.876 3.31-2.42 2.42a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.89-3.31-.876-2.42-2.42A1.724 1.724 0 004.61 13.725c-1.756-.426-1.756-2.924 0-3.35A1.724 1.724 0 005.676 7.8c-.89-1.543.876-3.31 2.42-2.42.996.575 2.254.24 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="relative text-sm xl:text-base font-medium tracking-wide">
                  Services
                  <span className="block mt-1 h-0.5 w-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </span>
              </a>
              <a href="#contact" className="group flex flex-col items-center justify-center px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
                <svg className="w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="relative text-sm xl:text-base font-medium tracking-wide">
                  Contact
                  <span className="block mt-1 h-0.5 w-0 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </span>
              </a>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8 shrink-0">
            <div className="hidden md:block">
              <a href="#reservation" className="group relative inline-flex items-center gap-3 px-6 lg:px-7 xl:px-9 py-2.5 lg:py-3 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 dark:from-yellow-400 dark:to-amber-500 dark:hover:from-yellow-500 dark:hover:to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 hover:scale-105 active:scale-95">
                <svg className="w-5 h-5 lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span className="text-sm lg:text-base xl:text-lg font-extrabold tracking-wide">Reservation</span>
              </a>
            </div>
            <button onClick={toggleDarkMode} aria-label="Toggle dark mode" aria-pressed={isDarkMode} className="relative inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200/60 dark:border-gray-700/60 hover:border-yellow-400/60 dark:hover:border-yellow-500/60 shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-yellow-400/50 hover:scale-110 active:scale-95">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/20 group-hover:to-orange-400/20 transition-colors duration-300"></div>
              {isDarkMode ? (
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-yellow-500 group-hover:text-yellow-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-gray-700 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 ring-yellow-400/40 transition-all duration-300"></div>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen} className="lg:hidden relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 border-2 border-red-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-red-400/50">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-orange-500/0 to-yellow-500/0 group-hover:from-red-500/20 group-hover:via-orange-500/20 group-hover:to-yellow-500/20 transition-colors duration-300"></div>
              <div className="flex flex-col w-7 space-y-2">
                <span className={`h-1 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`h-1 rounded-full bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 dark:from-orange-400 dark:via-yellow-400 dark:to-orange-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                <span className={`h-1 rounded-full bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 dark:from-yellow-400 dark:via-red-400 dark:to-yellow-400 transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-4 pt-6 pb-8 space-y-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/30 dark:border-gray-700/30 shadow-2xl rounded-b-xl">
            {['home','about','menu','services','contact'].map((id) => {
              const labels: Record<string,string> = { home:'Home', about:'About', menu:'Menu', services:'Services', contact:'Contact' };
              const icons: Record<string, React.ReactNode> = {
                home: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                about: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                menu: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                services: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.89 3.31.876 2.42 2.42a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.89 1.543-.876 3.31-2.42 2.42a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.89-3.31-.876-2.42-2.42A1.724 1.724 0 004.61 13.725c-1.756-.426-1.756-2.924 0-3.35A1.724 1.724 0 005.676 7.8c-.89-1.543.876-3.31 2.42-2.42.996.575 2.254.24 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                contact: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              };
              return (
                <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)} className="group flex items-center space-x-5 px-5 py-4 rounded-xl border border-transparent hover:border-red-200/50 dark:hover:border-red-800/50 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50/70 dark:hover:bg-red-900/20 transition-all duration-300">
                  <span className="transition-transform duration-300 group-hover:scale-110">{icons[id]}</span>
                  <span className="text-base font-semibold tracking-wide">{labels[id]}</span>
                  <div className="ml-auto w-2.5 h-2.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-gray-200/50 dark:border-gray-700/50">
              <a href="#reservation" onClick={() => setIsMenuOpen(false)} className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 dark:from-yellow-400 dark:to-amber-500 dark:hover:from-yellow-500 dark:hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/60">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span className="text-base font-bold">Make Reservation</span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
