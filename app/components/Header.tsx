"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import PrayerFlagBorder from './PrayerFlagBorder';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a nav item is active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" role="banner">
        <div className="w-full bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
          <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="flex items-center justify-between h-24 md:h-28 lg:h-32 py-4 md:py-5 lg:py-6">
              {/* Logo / Title */}
              <div className="flex items-center shrink-0 py-2">
                <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 group cursor-pointer">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full overflow-hidden ring-4 ring-red-500/60 dark:ring-red-600/40 shadow-2xl group-hover:shadow-red-500/50 dark:group-hover:shadow-red-400/50 transition-all duration-700 group-hover:ring-red-400/90 dark:group-hover:ring-red-600/70 group-hover:ring-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100/40 to-orange-100/40 dark:from-red-900/40 dark:to-orange-900/40"></div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-spin blur-md"></div>
                    <div className="relative w-full h-full group-hover:scale-110 transition-all duration-1000 group-hover:rotate-[360deg] transform-gpu perspective-1000">
                      <Image src="/images/hk-logo.jpg" alt="Himalayan Kitchen Logo" width={72} height={72} className="object-cover w-full h-full relative z-10 rounded-full shadow-inner" priority />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/30 via-orange-500/30 to-yellow-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  </div>
                  <div className="flex flex-col justify-center space-y-0.5 pb-1">
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-black bg-gradient-to-r from-red-700 via-red-600 to-red-800 dark:text-yellow-300 bg-clip-text text-transparent leading-[1.05] tracking-[0.055em] md:tracking-[0.058em] lg:tracking-[0.062em] xl:tracking-[0.065em] group-hover:from-red-900 group-hover:via-red-700 group-hover:to-red-900 dark:group-hover:from-red-200 dark:group-hover:via-yellow-300 dark:group-hover:to-orange-300 transition-all duration-700">
                      HIMALAYAN
                    </h1>
                    <p className=" pb-1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-script text-gray-700 dark:text-white -mt-1.5 tracking-[0.20em] md:tracking-[0.21em] lg:tracking-[0.22em] xl:tracking-[0.26em] font-bold group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500">Kitchen Marin</p>
                    <div className="relative">
                      <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-600 dark:text-gray-300 -mt-1 tracking-[0.01em] md:tracking-[0.012em] lg:tracking-[0.015em] xl:tracking-[0.018em] opacity-90 group-hover:opacity-100 group-hover:text-red-500 dark:group-hover:text-red-400 transition-all duration-500">ཧི་མ་ལ་ཡོན་གྱི་ཟས་ཁང་ མ་རིན།</p>
                      <div className="w-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 group-hover:w-full transition-[width] duration-700 rounded-full mt-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center justify-center flex-1 px-4 xl:px-8 py-2" aria-label="Primary Navigation" role="navigation">
                <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10 py-1">
                  {[
                    { id: 'home', label: 'Home', href: '/', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
                    { id: 'about', label: 'About', href: '/about', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                    { id: 'menu', label: 'Menu | Order', href: '/menu', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
                    { id: 'gallery', label: 'Gallery', href: '/gallery', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
                    { id: 'catering', label: 'Catering', href: '/catering', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 17l4-4 4 4m0 0V7a4 4 0 00-8 0v10z" /> },
                    { id: 'contact', label: 'Contact', href: '/contact', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> }
                  ].map(({ id, label, href, icon }) => {
           if (id === 'menu') {
                      return (
                        <div key={id} className="relative">
                          <button
                            onClick={e => { e.preventDefault(); setIsMenuDropdownOpen(open => !open); }}
                            onBlur={() => setTimeout(() => setIsMenuDropdownOpen(false), 150)}
                            aria-haspopup="true"
                            aria-expanded={isMenuDropdownOpen}
                            className="group flex flex-col items-center justify-center px-2 py-2 transition-colors duration-300 text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-400 focus:outline-none"
                            tabIndex={0}
                            role="button"
                            aria-label="Menu and Order options"
                            type="button"
                          >
                            <svg className="w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                            <span className="relative text-sm xl:text-base font-medium tracking-wide">
                              {label}
                              <span className="block mt-1 h-0.5 rounded-full transition-all duration-300 w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-orange-500"></span>
                            </span>
                          </button>
                          {isMenuDropdownOpen && (
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 flex flex-col animate-dropdown">
                              <a
                                href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 text-base font-semibold text-gray-800 dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-red-800 rounded-t-xl focus:outline-none focus:bg-red-100 dark:focus:bg-red-700 transition-colors duration-200"
                                tabIndex={0}
                                aria-label="Order Online (opens in new tab)"
                                onMouseDown={e => e.preventDefault()}
                                onClick={() => setIsMenuDropdownOpen(false)}
                              >Order Online</a>
                              <a
                                href="https://order.toasttab.com/egiftcards/himalayan-kitchen-227-3rd-st"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-3 text-base font-semibold text-gray-800 dark:text-white hover:bg-green-600 hover:text-white dark:hover:bg-green-900 rounded-b-xl focus:outline-none focus:bg-green-100 dark:focus:bg-green-800 transition-colors duration-200"
                                tabIndex={0}
                                aria-label="Buy Gift Card (opens in new tab)"
                                onMouseDown={e => e.preventDefault()}
                                onClick={() => setIsMenuDropdownOpen(false)}
                              >Gift Card</a>
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <Link key={id} href={href}>
                        <span
                          className={`group flex flex-col items-center justify-center px-2 py-2 transition-colors duration-300 ${
                            isActive(href)
                              ? 'font-bold text-red-600 dark:text-yellow-300 scale-110'
                              : 'text-gray-600 dark:text-white hover:text-red-500 dark:hover:text-red-400'
                          }`}
                          aria-current={isActive(href) ? 'page' : undefined}
                          tabIndex={0}
                          role="link"
                        >
                          <svg className={`w-7 h-7 mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${isActive(href) ? 'text-red-600 dark:text-yellow-300' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {icon}
                          </svg>
                          <span className="relative text-sm xl:text-base font-medium tracking-wide">
                            {label}
                            <span className={`block mt-1 h-0.5 rounded-full transition-all duration-300 ${isActive(href) ? 'w-full bg-gradient-to-r from-red-500 to-orange-500' : 'w-0 group-hover:w-full bg-gradient-to-r from-red-500 to-orange-500'}`}></span>
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 shrink-0 py-2">
                {/* Theme Toggle - always visible on xl+ */}
                <button 
                  onClick={toggleTheme} 
                  aria-label="Toggle dark mode" 
                  aria-pressed={isDarkMode} 
                  className="hidden xl:inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gray-800 dark:bg-yellow-900 hover:bg-gray-700 dark:hover:bg-yellow-600 border-2 border-white dark:border-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-yellow-400/50 hover:scale-105 active:scale-95"
                >
                  {isDarkMode ? (
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 transition-all duration-500 animate-pulse group-hover:text-white text-yellow-200" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
                {/* Theme Toggle - mobile only (icon only, left of hamburger) */}
                <button 
                  onClick={toggleTheme} 
                  aria-label="Toggle dark mode" 
                  aria-pressed={isDarkMode} 
                  className="xl:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800 dark:bg-yellow-900 hover:bg-gray-700 dark:hover:bg-yellow-600 border-2 border-gray-300 dark:border-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-yellow-400/50 hover:scale-105 active:scale-95"
                >
                  {isDarkMode ? (
                    <svg className="w-6 h-6 transition-all duration-500 animate-pulse text-yellow-200" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
                {/* Hamburger menu button - visible only below xl */}
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
        </div>
        <div className="w-full">
          <div className="hidden xl:block w-full">
            <PrayerFlagBorder />
          </div>
          <hr className="block xl:hidden border-t border-white w-full" />
        </div>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-100 bg-white dark:bg-gray-900 text-red-700 dark:text-yellow-300 font-bold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200">Skip to main content</a>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile Navigation"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            className="xl:hidden absolute left-0 right-0 top-full z-60 bg-white text-gray-800 dark:bg-gray-900 shadow-2xl border-b-2 border-red-500/20 dark:border-red-400/20 animate-slide-down overflow-visible"
            // style={{ backgroundImage: 'url(/images/other/aboutSketch)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(255,255,255,0.7)' }}
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-white text-gray-800 dark:bg-gray-900/40 backdrop-blur-md backdrop-saturate-150 pointer-events-none z-0" />
            <div className="relative flex flex-col py-3 px-6 gap-1 z-10">
              {[
                { id: 'home', label: 'Home', icon: (
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                ), href: '/' },
                { id: 'about', label: 'About', icon: (
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ), href: '/about' },
                { id: 'menu', label: 'Menu | Order Online', icon: (
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                ), href: 'https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st' },
                {
                  id:'gift-card', label: 'Gift Card', icon: (
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 9V7a4 4 0 00-8 0v2m-4 0h16v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
                ), href: 'https://order.toasttab.com/egiftcards/himalayan-kitchen-227-3rd-st' },
                { id: 'gallery', label: 'Gallery', icon: (
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                ), href: '/gallery' },
                { id: 'catering', label: 'Caterings', icon: (
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 17l4-4 4 4m0 0V7a4 4 0 00-8 0v10z" /></svg>
                ), href: '/catering' },
                { id: 'contact', label: 'Contact', icon: (
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ), href: '/contact' }
              ].map(({ id, label, icon, href }) => {
                // External links (menu, gift-card)
                if (id === 'menu' || id === 'gift-card') {
                  return (
                    <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                      <span
                        className="flex items-center w-full text-left px-4 py-2 rounded-lg font-semibold text-lg transition-colors duration-200 border-b-2 border-gray-300 dark:border-white/30 dark:text-white hover:bg-red-50 dark:hover:bg-red-800 hover:text-red-600 dark:hover:text-red-300"
                        tabIndex={0}
                        role="link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {icon}
                        <span className="ml-1">{label}</span>
                      </span>
                    </a>
                  );
                }
                // Internal links
                return (
                  <Link key={id} href={href}>
                    <span
                      className={`flex items-center w-full text-left px-4 py-2 rounded-lg font-semibold text-lg transition-colors duration-200 border-b-2 border-gray-300 dark:border-white/30 ${isActive(href) ? 'text-red-600 dark:text-yellow-300 bg-red-50 dark:bg-red-800' : 'dark:text-white hover:bg-red-50 dark:hover:bg-red-800 hover:text-red-600 dark:hover:text-red-300'}`}
                      tabIndex={0}
                      aria-current={isActive(href) ? 'page' : undefined}
                      role="link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {icon}
                      <span className="ml-1">{label}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
            {/* Prayer Flag Border at bottom of dropdown, always visible and not cut off */}
            <div className="relative w-full z-20">
              <PrayerFlagBorder />
            </div>
          </nav>
        )}
      </header>
     
    </>
  );
};

export default Header;