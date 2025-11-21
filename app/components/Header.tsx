"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PrayerFlagBorder from './PrayerFlagBorder';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme, mounted } = useTheme();

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'gallery', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          // Only change active section if we're clearly in the new section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Handle click to immediately update active section
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo / Title */}
            <div className="flex items-center shrink-0">
              <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 group cursor-pointer">
                <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden ring-4 ring-red-500/60 dark:ring-red-600/40 shadow-2xl group-hover:shadow-red-500/50 dark:group-hover:shadow-red-400/50 transition-all duration-700 group-hover:ring-red-400/90 dark:group-hover:ring-red-600/70 group-hover:ring-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100/40 to-orange-100/40 dark:from-red-900/40 dark:to-orange-900/40"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-spin blur-md"></div>
                  <div className="relative w-full h-full group-hover:scale-110 transition-all duration-700 group-hover:rotate-360 transform-gpu perspective-1000">
                    <Image src="/images/hk-logo.jpg" alt="Himalayan Kitchen Logo" width={72} height={72} className="object-cover w-full h-full relative z-10 rounded-full shadow-inner" priority />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/30 via-orange-500/30 to-yellow-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                </div>
                <div className="flex flex-col justify-center space-y-0.5">
                  <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-black bg-gradient-to-r from-red-500 via-orange-500 to-red-600 dark:from-red-300 dark:via-orange-300 dark:to-red-400 bg-clip-text text-transparent leading-[1.05] tracking-tight group-hover:from-red-600 group-hover:via-yellow-500 group-hover:to-orange-600 dark:group-hover:from-red-200 dark:group-hover:via-yellow-200 dark:group-hover:to-orange-200 transition-all duration-700">HIMALAYAN</h1>
                  <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-script text-gray-700 dark:text-white -mt-1.5 tracking-wide font-bold group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">Kitchen Marin</p>
                  <p className="text-xs md:text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-300 -mt-1 tracking-widest opacity-90 group-hover:opacity-100 group-hover:text-red-500 dark:group-hover:text-red-400 transition-all duration-500">ཧི་མ་ལ་ཡོན་གྱི་ཟས་ཁང་ མ་རིན།</p>
                  <div className="w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-[width] duration-700 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center justify-center flex-1 px-4 xl:px-8" aria-label="Primary Navigation" role="navigation">
              <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
                {[
                  { id: 'home', label: 'Home', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
                  { id: 'about', label: 'About', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                  { id: 'menu', label: 'Menu', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                  { id: 'gallery', label: 'Gallery', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
                  // { id: 'services', label: 'Services', icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.89 3.31.876 2.42 2.42a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.89 1.543-.876 3.31-2.42 2.42a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.89-3.31-.876-2.42-2.42A1.724 1.724 0 004.61 13.725c-1.756-.426-1.756-2.924 0-3.35A1.724 1.724 0 005.676 7.8c-.89-1.543.876-3.31 2.42-2.42.996.575 2.254.24 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></> },
                  { id: 'catering', label: 'Caterings', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 17l4-4 4 4m0 0V7a4 4 0 00-8 0v10z" /> },
                  { id: 'contact', label: 'Contact', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> }
                ].map(({ id, label, icon }) => (
                  <a 
                    key={id} 
                    href={`#${id}`}
                    onClick={() => handleNavClick(id)
                    }
                    className={`group flex flex-col items-center justify-center px-2 py-2 transition-colors duration-300 ${
                      activeSection === id 
                        ? 'text-red-500 dark:text-red-400' 
                        : 'text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-400'
                    }`}
                  >
                    <svg className={`w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${activeSection === id ? 'scale-110' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                    <span className="relative text-sm xl:text-base font-medium tracking-wide">
                      {label}
                      <span className={`block mt-1 h-0.5 bg-linear-to-r from-red-500 to-orange-500 rounded-full transition-all duration-300 ${
                        activeSection === id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 shrink-0">
              {/* Call Us Button */}
              <a 
                href="tel:(415) 526-3161" 
                className="hidden md:flex items-center gap-2 lg:gap-3 px-4 lg:px-5 py-2.5 lg:py-3 bg-red-600 hover:bg-white dark:bg-red-500 dark:hover:bg-white text-white hover:text-black dark:hover:text-black font-bold rounded-xl shadow-lg hover:shadow-2xl border-4 border-white hover:border-black dark:border-white dark:hover:border-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/60 hover:scale-105 active:scale-95 pop-up-call-btn"
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              >
                <svg className="w-5 h-5 lg:w-5 lg:h-5 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm lg:text-base font-extrabold tracking-wide">Call Us</span>
              </a>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                aria-label="Toggle dark mode" 
                aria-pressed={isDarkMode} 
                className={`relative inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gray-800 dark:bg-yellow-400 hover:bg-gray-700 dark:hover:bg-yellow-600 border-2 border-gray-700 dark:border-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-yellow-400/50 hover:scale-105 active:scale-95 ${isDarkMode ? 'group' : ''}`}
              >
                {!mounted ? (
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white dark:text-gray-800 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : isDarkMode ? (
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 transition-all duration-500 animate-pulse group-hover:text-white text-yellow-200" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} 
                aria-expanded={isMenuOpen} 
                aria-controls="mobile-menu" 
                className="xl:hidden relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-600 border-2 border-gray-300 dark:border-white shadow-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400/50"
              >
                <div className="flex flex-col w-7 space-y-2">
                  <span className={`h-1 rounded-full bg-gray-800 dark:bg-white transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                  <span className={`h-1 rounded-full bg-gray-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                  <span className={`h-1 rounded-full bg-gray-800 dark:bg-white transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                </div>
              </button>
            </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div id="mobile-menu" className={`xl:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} md:rounded-bl-2xl md:rounded-br-2xl lg:rounded-bl-3xl lg:rounded-br-3xl`}>
            <div className="relative px-4 pt-6 pb-8 space-y-3 bg-gray-50 dark:bg-gray-700 backdrop-blur-md border-t border-gray-200 dark:border-gray-700/30 shadow-2xl">
              {/* Background image for mobile menu */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src="/images/other/stone.webp"
                  alt="Menu Background"
                  fill
                  className="object-cover w-full h-full rounded-xl opacity-20"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-gray-700/60 dark:from-gray-900/60 dark:to-gray-900/80 "></div>
              </div>
              <div className="relative z-10">
                {[
                  { id: 'home', label: 'Home', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
                  { id: 'about', label: 'About', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                  { id: 'menu', label: 'Menu', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                  { id: 'gallery', label: 'Gallery', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
                  { id: 'services', label: 'Services', icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.89 3.31.876 2.42 2.42a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.89 1.543-.876 3.31-2.42 2.42a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.89-3.31-.876-2.42-2.42A1.724 1.724 0 004.61 13.725c-1.756-.426-1.756-2.924 0-3.35A1.724 1.724 0 005.676 7.8c-.89-1.543.876-3.31 2.42-2.42.996.575 2.254.24 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></> },
                  { id: 'catering', label: 'Caterings', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M8 17l4-4 4 4m0 0V7a4 4 0 00-8 0v10z" /> },
                  { id: 'contact', label: 'Contact', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> }
                ].map(({ id, label, icon }, idx, arr) => (
                  <React.Fragment key={id}>
                    <a 
                      href={`#${id}`} 
                      onClick={() => handleNavClick(id)} 
                      className={`group flex items-center space-x-5 px-5 py-4 rounded-xl border border-transparent transition-all duration-300 ${
                        activeSection === id
                          ? 'border-red-500/50 dark:border-red-400/50 text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
                          : 'hover:border-red-300/50 dark:hover:border-red-800/50 text-gray-700 dark:text-white hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                      }`}
                    >
                      <svg className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${activeSection === id ? 'scale-110' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {icon}
                      </svg>
                      <span className="text-base font-semibold tracking-wide">{label}</span>
                      <div className={`ml-auto w-2.5 h-2.5 bg-red-500 rounded-full transition-opacity duration-300 ${activeSection === id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                    </a>
                    {/* Divider under each menu item except last */}
                    {idx < arr.length && (
                      <div className="w-full border-b border-gray-200 dark:border-gray-300 "></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {isMenuOpen && (
              <PrayerFlagBorder />
            )}
          </div>
        </div>
        
        {/* Prayer Flag Colors Bottom Border */}
        <PrayerFlagBorder />

        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-[100] bg-white dark:bg-gray-900 text-red-700 dark:text-yellow-300 font-bold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200">Skip to main content</a>
      </header>
    );
  };
  
  export default Header;
