"use client";

import React, { useEffect, useRef, useState, RefObject } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

// Gallery item type
interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface FoodGalleryProps {
  items: GalleryItem[];
  title?: string;
  description?: string;
}

const FoodGallery = ({ 
  items, 
  title = "A Feast For Your Eyes",
  description = "A showcase of our most popular, authentic & mouth-watering Himalayan dishes. Let the gallery inspire your next dining experience!"
}: FoodGalleryProps) => {
  // Food Modal State
  const [foodModalOpen, setFoodModalOpen] = useState(false);
  const [foodModalIndex, setFoodModalIndex] = useState(0);
  const [showFoodModalText, setShowFoodModalText] = useState(false);
  const [showFullFoodDesc, setShowFullFoodDesc] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Ref for scroll container
  const foodGalleryRef = useRef<HTMLDivElement>(null);

  const openFoodModal = (idx: number) => {
    setFoodModalIndex(idx);
    setFoodModalOpen(true);
    setShowFoodModalText(false); // Reset text when opening
    setImageLoading(true);
  };

  const closeFoodModal = () => {
    setFoodModalOpen(false);
    setShowFoodModalText(false); // Reset text when closing
  };

  const nextFoodModal = () => {
    setFoodModalIndex((i) => (i + 1) % items.length);
    setShowFoodModalText(false); // Reset text when changing items
    setImageLoading(true);
  };

  const prevFoodModal = () => {
    setFoodModalIndex(
      (i) => (i - 1 + items.length) % items.length
    );
    setShowFoodModalText(false); // Reset text when changing items
    setImageLoading(true);
  };

  // Food modal text overlay state (delayed show, auto-hide)
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    if (foodModalOpen) {
      showTimer = setTimeout(() => setShowFoodModalText(true), 2000);
      hideTimer = setTimeout(() => setShowFoodModalText(false), 25000);
    }
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [foodModalOpen, foodModalIndex]);

  // Helper to scroll gallery - scroll by one full card width
  const scrollGallery = (
    ref: RefObject<HTMLDivElement | null>,
    dir: "left" | "right"
  ) => {
    if (ref.current) {
      // Get the first gallery item to determine its width
      const firstItem = ref.current.querySelector('div[class*="group relative"]') as HTMLElement;
      if (firstItem) {
        // Scroll by the full width of one card including gap (24px = gap-6)
        const scrollAmount = firstItem.offsetWidth + 24;
        ref.current.scrollBy({
          left: dir === "right" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Food Gallery Section */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-6 sm:my-10 rounded-3xl shadow-2xl border-4 border-yellow-600 dark:border-orange-400/60 bg-white dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-yellow-200/10 before:via-orange-200/10 before:to-red-200/10 before:blur-2xl before:z-0 overflow-hidden">
        <div className="relative z-10">
          {/* Heading and description for Food Gallery */}
          <div className="mb-4 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-gray-800 dark:text-white font-black bg-clip-text pt-4 mb-2">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-800 dark:text-gray-300 font-medium font-[Georgia,'Times_New_Roman',Times,serif]">
              {description}
            </p>
          </div>
          <div
            ref={foodGalleryRef}
            className="flex gap-6 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent snap-x snap-mandatory min-w-0 border-t-2 border-yellow-200 dark:border-gray-700 pt-2"
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-500 min-w-[80vw] max-w-xs snap-center md:min-w-[45vw] md:max-w-md lg:min-w-[32vw] lg:max-w-lg xl:min-w-[28vw] xl:max-w-xl"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <button
                    className="w-full h-full focus:outline-none"
                    onClick={() => openFoodModal(idx)}
                    aria-label={`View full ${item.title}`}
                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                  ></button>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 32vw, 28vw"
                    quality={85}
                    priority={idx < 3}
                  />
                  <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 dark:bg-black/70 text-white text-center">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Food gallery scroll controls below gallery - always visible */}
          <div className="flex justify-between items-center mt-1 px-2">
            <button
              className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40"
              onClick={() => scrollGallery(foodGalleryRef, "left")}
              aria-label="Scroll left"
            >
              <svg
                className="w-7 h-7 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-sm text-gray-800 text-center dark:text-gray-100 font-semibold tracking-wide">
              | Discover more images by sliding |
            </span>
            <button
              className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40"
              onClick={() => scrollGallery(foodGalleryRef, "right")}
              aria-label="Scroll right"
            >
              <svg
                className="w-7 h-7 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Food Modal */}
      {foodModalOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/70 backdrop-blur-lg transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="food-modal-title"
        >
          <div
            className="relative max-w-lg w-full mx-4 rounded-3xl overflow-visible shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading Spinner */}
            {imageLoading && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 rounded-2xl sm:rounded-3xl">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-400"></div>
              </div>
            )}
            {/* Decorative Frame fits image */}
            <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl border-4 border-yellow-400/80 dark:border-orange-400/80 shadow-[0_0_40px_10px_rgba(255,186,0,0.15)] pointer-events-none" />
            {/* Zoomed image */}
            <Image
              src={items[foodModalIndex].image}
              alt={items[foodModalIndex].title}
              width={1200}
              height={800}
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-contain z-10"
              style={{ maxHeight: '80vh' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={90}
              priority
              onLoadingComplete={() => setImageLoading(false)}
            />
            {/* Title and Description overlay at bottom, delayed show and auto-hide with slide-up animation */}
            {showFoodModalText && (
              <div className="absolute bottom-0 left-0 right-0 mb-0 w-full px-4 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-b-2xl text-white text-center drop-shadow-lg flex flex-col items-center border-t border-yellow-300/40 z-30 animate-slide-up">
                <h2 id="food-modal-title" className="text-lg sm:text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg font-headline">
                  {items[foodModalIndex].title}
                </h2>
                <p className="text-sm italic sm:text-base text-gray-100 mb-0 font-body font-[Georgia,'Times_New_Roman',Times,serif]">
                  {showFullFoodDesc ||
                  items[foodModalIndex].description.length <= 180
                    ? items[foodModalIndex].description
                    : `${items[foodModalIndex].description.slice(0, 180)}...`}
                  {items[foodModalIndex].description.length > 180 && (
                    <button
                      className="ml-2 text-yellow-300 underline text-sm font-bold focus:outline-none"
                      onClick={() => setShowFullFoodDesc((v) => !v)}
                    >
                      {showFullFoodDesc ? "Less" : "More"}
                    </button>
                  )}
                </p>
              </div>
            )}
          </div>
          {/* Controls always below the modal box */}
          <div className="flex justify-center items-center gap-10 mt-10 z-50 relative"
            style={{ marginTop: '2.5rem' }}
            aria-label="Food modal controls"
            onClick={e => e.stopPropagation()}
          >
            <button
              aria-label="Previous"
              onClick={e => { e.stopPropagation(); prevFoodModal(); }}
              className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Close"
              onClick={closeFoodModal}
              className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={e => { e.stopPropagation(); nextFoodModal(); }}
              className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default FoodGallery;
