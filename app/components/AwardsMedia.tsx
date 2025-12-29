"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const AwardsMedia = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust based on card width
      const newScrollPosition = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const images = [
    {
      src: "/images/awards/hk-rg1.jpg",
      alt: "Award Certificate",
      caption: "Certificate of Excellence"
    },
     {
      src: "/images/awards/nf-award.jpeg",
      alt: "Award Certificate",
      caption: "Certificate of Excellence"
    },
    {
      src: "/images/awards/hk-news.jpg",
      alt: "News Media",
      caption: "Local News Media Recognition"
    },
    {
      src: "/images/awards/hk-rg2.jpg",
      alt: "Google Guru Article",
      caption: "Featured in Google Guru"
    }
  ];

  const openModal = (src: string, alt: string) => {
    setModalImg(src);
    setModalAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section id="awards" aria-labelledby="awards-heading" className="relative  transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm" tabIndex={-1}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl" aria-hidden="true">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
  
      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-400 rounded-full text-gray-800 dark:text-yellow-100 font-semibold text-sm uppercase tracking-wider mb-6">
          Recognition and Press
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
          <h2 id="awards-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-800 dark:text-yellow-200 mb-6" tabIndex={0}>
            Awards & Media
          </h2>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 max-w-2xl mx-auto leading-relaxed font-[Georgia,'Times_New_Roman',Times,serif]">
            Honored by the community and featured in renowned publications for our culinary excellence and service.
          </p>
        </div>
        {/* Horizontal Scrollable Gallery */}
        <div className="relative w-full group/gallery">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-3 shadow-lg opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full p-3 shadow-lg opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
            role="list" 
            aria-label="Awards and media features"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {images.map((img) => (
              <div 
                key={img.src} 
                className="shrink-0 w-80 sm:w-96 snap-center" 
                role="listitem"
              >
                <button
                  className="focus:outline-none w-full group"
                  onClick={() => openModal(img.src, img.alt)}
                  aria-label={`View full ${img.alt}`}
                  tabIndex={0}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 p-3 bg-gradient-to-br from-yellow-100 via-white to-yellow-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-xl">
                    {/* Inner border frame */}
                    <div className="relative border-4 border-yellow-400/40 dark:border-yellow-600/40 rounded-lg overflow-hidden shadow-inner">
                      {/* Additional decorative border */}
                      <div className="absolute inset-0 border-2 border-white/60 dark:border-gray-600/60 rounded-lg pointer-events-none z-10"></div>
                      
                      <Image 
                        src={img.src} 
                        alt={img.alt} 
                        width={400} 
                        height={300} 
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer" 
                      />
                      
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-lg">
                          <svg 
                            className="w-6 h-6 text-gray-800 dark:text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-yellow-500 dark:border-yellow-400"></div>
                    <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-yellow-500 dark:border-yellow-400"></div>
                    <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-yellow-500 dark:border-yellow-400"></div>
                    <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-yellow-500 dark:border-yellow-400"></div>
                  </div>
                </button>
                <p className="text-gray-800 dark:text-gray-200 font-semibold text-center font-[Georgia,'Times_New_Roman',Times,serif] px-2">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-2 mb-4">
            {images.map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-orange-400/60 dark:bg-yellow-500/60"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Modal for full image view */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 dark:bg-black/95" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="awards-modal-title">
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()} tabIndex={-1} ref={el => { if (el) el.focus(); }}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-gray-900/60 dark:bg-gray-800/60 hover:bg-gray-900/80 dark:hover:bg-gray-800/80 rounded-full px-3 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              onClick={closeModal}
              aria-label="Close full image view"
            >
              &times;
            </button>
            <Image src={modalImg} alt={modalAlt} width={900} height={650} className="rounded-xl shadow-2xl w-full h-auto max-h-[80vh] object-contain" />
            <p id="awards-modal-title" className="mt-6 text-lg text-white font-semibold text-center drop-shadow-lg font-[Georgia,'Times_New_Roman',Times,serif]">
              {images.find(img => img.src === modalImg)?.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsMedia;
