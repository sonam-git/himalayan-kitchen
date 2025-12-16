"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { StoryblokGalleryItem } from "../lib/storyblok";
import { getResponsiveSizes } from "../lib/storyblok-image";

interface StoryblokGalleryProps {
  items: StoryblokGalleryItem[];
  title?: string;
  category?: "food" | "restaurant" | "customer";
}

const StoryblokGallery = ({ items, title }: StoryblokGalleryProps) => {
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [mainModalIndex, setMainModalIndex] = useState(0);
  const [showMainModalText, setShowMainModalText] = useState(false);
  const [showFullMainDesc, setShowFullMainDesc] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Open modal
  const openMainModal = (index: number) => {
    setMainModalIndex(index);
    setMainModalOpen(true);
    setShowMainModalText(false);
    setShowFullMainDesc(false);
    setTimeout(() => setShowMainModalText(true), 300);
    setTimeout(() => setShowMainModalText(false), 6000);
  };

  // Close modal
  const closeMainModal = () => {
    setMainModalOpen(false);
    setShowMainModalText(false);
    setShowFullMainDesc(false);
  };

  // Navigate modal
  const nextMainImage = () => {
    setMainModalIndex((prev) => (prev + 1) % items.length);
    setShowMainModalText(true);
    setTimeout(() => setShowMainModalText(false), 5000);
  };

  const prevMainImage = () => {
    setMainModalIndex((prev) => (prev - 1 + items.length) % items.length);
    setShowMainModalText(true);
    setTimeout(() => setShowMainModalText(false), 5000);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!mainModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMainModal();
      if (e.key === "ArrowRight") nextMainImage();
      if (e.key === "ArrowLeft") prevMainImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainModalOpen]);

  // Focus trap
  useEffect(() => {
    if (mainModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [mainModalOpen]);

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">No gallery items available.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Title */}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          {title}
        </h2>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={item._uid}
            className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            onClick={() => openMainModal(index)}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.image.filename}
                alt={item.image.alt || item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={getResponsiveSizes('gallery')}
                quality={85}
                priority={index < 3}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg drop-shadow-lg">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-white/90 text-sm line-clamp-2 mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {mainModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={closeMainModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="main-modal-title"
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-6xl mx-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Close button */}
            <button
              onClick={closeMainModal}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-50"
              aria-label="Close modal"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevMainImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-50 bg-black/50 rounded-full p-3"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextMainImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors z-50 bg-black/50 rounded-full p-3"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full">
              <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl border-4 border-yellow-400/80 dark:border-orange-400/80 shadow-[0_0_40px_10px_rgba(255,186,0,0.15)] pointer-events-none" />
              <Image
                src={items[mainModalIndex].image.filename}
                alt={items[mainModalIndex].image.alt || items[mainModalIndex].title}
                width={1200}
                height={800}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-contain z-10"
                style={{ maxHeight: '80vh' }}
                sizes={getResponsiveSizes('modal')}
                quality={90}
                priority
              />
              
              {/* Title and description overlay */}
              {showMainModalText && (
                <div className="absolute bottom-0 left-0 right-0 mb-0 w-full px-4 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-b-2xl text-white text-center drop-shadow-lg flex flex-col items-center border-t border-yellow-300/40 z-30 animate-slide-up">
                  <h2 id="main-modal-title" className="text-lg sm:text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg">
                    {items[mainModalIndex].title}
                  </h2>
                  <p className="text-sm italic sm:text-base text-gray-100 mb-0">
                    {showFullMainDesc || items[mainModalIndex].description.length <= 100
                      ? items[mainModalIndex].description
                      : `${items[mainModalIndex].description.slice(0, 100)}...`}
                  </p>
                  {items[mainModalIndex].description.length > 100 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowFullMainDesc(!showFullMainDesc);
                      }}
                      className="text-yellow-300 hover:text-yellow-400 text-sm mt-2 underline"
                    >
                      {showFullMainDesc ? "Show less" : "Read more"}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Counter */}
            <div className="mt-4 text-white text-center">
              <span className="text-lg">
                {mainModalIndex + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryblokGallery;
