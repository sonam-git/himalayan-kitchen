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

interface CustomerGalleryProps {
  items?: GalleryItem[];
  title?: string;
  description?: string;
}

const CustomerGallery = ({ 
  items = [], 
  title = "Smiles & Satisfaction",
  description = "A glimpse into the joy and happiness our customers experience at Himalayan Kitchen. From family gatherings to casual dinners with friends, every visit is a celebration of great food and warm hospitality."
}: CustomerGalleryProps) => {
  // Use items with fallback
  const galleryItems = items || [];
  
  // Modal State
  const [customerModalOpen, setCustomerModalOpen] = useState(false);
  const [customerModalIndex, setCustomerModalIndex] = useState(0);
  const [showCustomerModalText, setShowCustomerModalText] = useState(false);
  const [showFullCustomerDesc, setShowFullCustomerDesc] = useState(false);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const customerGalleryRef = useRef<HTMLDivElement>(null);

  // Focus modal when opened
  useEffect(() => {
    if (customerModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [customerModalOpen]);

  // Delay showing modal text by 2s, hide after 25s
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    if (customerModalOpen) {
      showTimer = setTimeout(() => setShowCustomerModalText(true), 2000);
      hideTimer = setTimeout(() => setShowCustomerModalText(false), 25000);
    }
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [customerModalOpen, customerModalIndex]);

  // Modal functions
  const openCustomerModal = (index: number) => {
    setCustomerModalIndex(index);
    setCustomerModalOpen(true);
    setShowCustomerModalText(false);
  };

  const closeCustomerModal = () => {
    setCustomerModalOpen(false);
    setShowCustomerModalText(false);
  };

  const nextCustomerModal = () => {
    setCustomerModalIndex((i) => (i + 1) % galleryItems.length);
    setShowCustomerModalText(false);
  };

  const prevCustomerModal = () => {
    setCustomerModalIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
    setShowCustomerModalText(false);
  };

  // Early return if no items
  if (!galleryItems || galleryItems.length === 0) {
    return null;
  }

  // Helper to scroll gallery
  const scrollGallery = (ref: RefObject<HTMLDivElement | null>, dir: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: dir === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Modal Keyboard Accessibility
  function handleModalKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!customerModalOpen) return;
    const focusable = Array.from(
      (modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) ?? []) as HTMLElement[]
    ).filter((el) => !el.hasAttribute("disabled"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        closeCustomerModal();
        break;
      case "ArrowLeft":
        e.preventDefault();
        prevCustomerModal();
        break;
      case "ArrowRight":
        e.preventDefault();
        nextCustomerModal();
        break;
      case "Tab":
        if (focusable.length === 0) return;
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4 border-yellow-600 dark:border-orange-400/60 bg-white dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-yellow-200/10 before:via-orange-200/10 before:to-red-200/10 before:blur-2xl before:z-0 overflow-hidden">
        <div className="relative z-10">
          {/* Heading and description for Main Gallery */}
          <div className="mb-4 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-gray-800 dark:text-white font-black bg-clip-text pt-4 mb-2">
              {title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-100 font-[Georgia,'Times_New_Roman',Times,serif]">
              {description}
            </p>
          </div>

          {/* Customer Gallery - horizontal scroll */}
          <div
            ref={customerGalleryRef}
            className="flex gap-6 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent snap-x snap-mandatory min-w-0 border-t-2 border-yellow-200 dark:border-gray-700 pt-2"
          >
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:-translate-y-2 min-w-[80vw] max-w-xs snap-center md:min-w-[45vw] md:max-w-md lg:min-w-[32vw] lg:max-w-lg xl:min-w-[28vw] xl:max-w-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex flex-col justify-end">
                  <button
                    className="w-full h-full focus:outline-none"
                    onClick={() => openCustomerModal(index)}
                    aria-label={`View full ${item.title}`}
                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                  ></button>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-3xl"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, (max-width: 1280px) 32vw, 28vw"
                    quality={85}
                    priority={index < 3}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  {/* Title at bottom of image */}
                  <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 dark:bg-black/70 text-white text-center">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery horizontal scroll controls */}
          <div className="flex justify-between items-center mt-1 px-2">
            <button
              className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-200 dark:border-orange-700"
              onClick={() => scrollGallery(customerGalleryRef, "left")}
              aria-label="Scroll left"
            >
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" />
                <path
                  d="M14.5 8l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>
            <span className="text-sm text-gray-800 dark:text-gray-100 text-center font-semibold tracking-wide">
              | Discover more images by sliding |
            </span>
            <button
              className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-200 dark:border-orange-700"
              onClick={() => scrollGallery(customerGalleryRef, "right")}
              aria-label="Scroll right"
            >
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" />
                <path
                  d="M9.5 8l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Customer Gallery Modal */}
      {customerModalOpen && typeof document !== 'undefined' && createPortal(
        <div
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="customer-modal-title"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/70 backdrop-blur-lg focus:outline-none"
          onKeyDown={handleModalKeyDown}
        >
          <div
            className="relative max-w-3xl w-full mx-4 rounded-3xl overflow-visible shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Frame */}
            <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl border-4 border-yellow-400/80 dark:border-orange-400/80 shadow-[0_0_40px_10px_rgba(255,186,0,0.15)] pointer-events-none" />
            {/* Zoomed image */}
            <Image
              src={galleryItems[customerModalIndex].image}
              alt={galleryItems[customerModalIndex].title}
              width={1200}
              height={800}
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-contain z-10"
              style={{ maxHeight: "80vh" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={90}
              priority
            />
            {/* Title and Description overlay */}
            {showCustomerModalText && (
              <div className="absolute bottom-0 left-0 right-0 mb-0 w-full px-4 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-b-2xl text-white text-center drop-shadow-lg flex flex-col items-center border-t border-yellow-300/40 z-30 animate-slide-up">
                <h2
                  id="customer-modal-title"
                  className="text-lg sm:text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg font-headline"
                >
                  {galleryItems[customerModalIndex].title}
                </h2>
                <p className="text-sm italic sm:text-base text-gray-100 mb-0 font-body font-[Georgia,'Times_New_Roman',Times,serif]">
                  {showFullCustomerDesc || galleryItems[customerModalIndex].description.length <= 180
                    ? galleryItems[customerModalIndex].description
                    : `${galleryItems[customerModalIndex].description.slice(0, 180)}...`}
                  {galleryItems[customerModalIndex].description.length > 180 && (
                    <button
                      className="ml-2 text-yellow-300 underline text-sm font-bold focus:outline-none"
                      onClick={() => setShowFullCustomerDesc((v) => !v)}
                    >
                      {showFullCustomerDesc ? "Less" : "More"}
                    </button>
                  )}
                </p>
              </div>
            )}
          </div>
          {/* Controls */}
          <div
            className="flex justify-center items-center gap-8 mt-10 z-50 relative"
            style={{ marginTop: "2.5rem" }}
            aria-label="Gallery modal controls"
          >
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prevCustomerModal();
              }}
              className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                closeCustomerModal();
              }}
              className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                nextCustomerModal();
              }}
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

export default CustomerGallery;
