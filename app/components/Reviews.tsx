"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  // Add ref for horizontal scroll
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  // Modal state for book-style review reading
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Helper to scroll reviews - scroll by one full review card width
  const scrollReviews = (dir: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const container = reviewsScrollRef.current;
      const firstItem = container.querySelector('article') as HTMLElement;
      
      if (firstItem) {
        // Get full card width including gap (16px = gap-4)
        const cardWidth = firstItem.offsetWidth;
        const gap = 16;
        const scrollAmount = cardWidth + gap;
        
        // Calculate new scroll position
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        let newScroll: number;
        
        if (dir === 'right') {
          newScroll = Math.min(currentScroll + scrollAmount, maxScroll);
        } else {
          newScroll = Math.max(currentScroll - scrollAmount, 0);
        }
        
        // Only scroll if we're not already at the boundary
        if (newScroll !== currentScroll) {
          container.scrollTo({
            left: newScroll,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  // Modal handlers
  const openModal = (index: number) => {
    setSelectedReviewIndex(index);
    setModalOpen(true);
    setIsExpanded(false); // Reset expansion when opening modal
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsExpanded(false);
  };

  const nextReview = () => {
    setSelectedReviewIndex((prev) => (prev + 1) % reviews.length);
    setIsExpanded(false); // Reset expansion when changing review
  };

  const prevReview = () => {
    setSelectedReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsExpanded(false); // Reset expansion when changing review
  };

  // Focus modal when opened
  useEffect(() => {
    if (modalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalOpen]);

  // Keyboard navigation for modal
  const handleModalKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!modalOpen) return;
    
    const focusable = Array.from(
      (modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) ?? []) as HTMLElement[]
    ).filter(el => !el.hasAttribute('disabled'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        closeModal();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        prevReview();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextReview();
        break;
      case 'Tab':
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
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "Wonderful Catering and Dining Experience",
      text: "We’ve eaten at Himalayan Kitchen twice and have had two events catered by them. The food is delicious, fresh, and we love Nepali food as it’s lighter and has more of a ‘homemade’ flavor than anywhere else.",
      author: "Cathy Ann T.",
      location: "Sausalito, CA",
      source: "yelp",
      date: "2025-10-17",
    },
    {
      id: 2,
      rating: 5,
      title: "We are big fans of Himalayan cuisine.",
      text: "So glad to find Himalayan Kitchen in San Rafael! My husband and I are big fans of Himalayan or Nepalese foods, and we thought everything here was flavorful and well made.",
      author: "Sanaz S.",
      location: "San Rafael, CA",
      source: "yelp",
      date: "2025-07-25",
    },
    {
      id: 3,
      rating: 5,
      title: "The food and service defines why this place is so popular.",
      text: "Came for dinner on a Wednesday night and it was almost a full house! As we ate, more people came and all tables were filled except one. What a popular place. I can see why because their food is absolutely delicious and flavorful.",
      author: "Bonnie N.",
      location: "Novato, CA",
      source: "yelp",
      date: "2025-12-07",
    },
    {
      id: 4,
      rating: 5,
      title: "A San Rafael hidden gem.",
      text: "Yummmm! Thank you for having delicious vegan food. The flavors are fantastic, and we've loved everything we've tried - from momos to noodles. The vegetables are always cooked perfectly. This place is a true hidden gem in the Montecito Center",
      author: "Jamie G",
      location: "San Rafael, CA",
      source: "google",
      date: "2025-05-01",
    },
    {
      id: 5,
      rating: 5,
      title:"Amazing food, service, and atmosphere.",
      text: "Himalayan Kitchen is so good! The food, service, and portions are great. Even though you wouldn't expect much from the outside, the inside is cute and has a warm, inviting atmosphere. Everything we ordered was delicious.",
      author: "Shawnee T.",
      location: "San Rafael, CA",
      source: "google",
      date: "2023-08-01",
    },
    {
      id: 6,
      rating: 5,
      title:"Incredible, authentic food!",
      text: "What a delight to discover this place. The chef and family who run it are actually Sherpas! The butter chicken curry had so many layers of flavor, the grilled meats and veggies were incredible, and the naan was prepared to perfection. The Himalayan hot ginger tea truly hit the spot.",
      author: "Lone S",
      location: "San Rafael, CA",
      source: "google",
      date: "2023-08-01",
    },
  ];

  return (
    <>
    <section
      ref={sectionRef}
      className="relative  transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-0 -left-48 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 font-headline">
        {/* Header Section */}
        <div
          className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
              <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-400/50 dark:border-yellow-300/50 rounded-full text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-6 font-headline">
           Customer Reviews
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-800 dark:text-yellow-200 mb-6">
      Dining Stories
    </h2>
     <p className="text-md sm:text-xs md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-900 dark:text-white mb-4 font-[Georgia,'Times_New_Roman',Times,serif]">
     Real experiences from guests who&#39;ve shared a meal—and a moment—with us.
    </p>

          {/* Rating Display */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 mb-3 flex-nowrap sm:flex-wrap font-headline">
          <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-gray-900 bg-gradient-to-br from-orange-500 to-red-500 dark:from-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
            4.8
          </div>
          <div className="flex flex-col items-start min-w-[140px] sm:min-w-0">
            <div className="flex text-yellow-800 dark:text-yellow-400 text-2xl sm:text-3xl mb-1 font-headline">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 sm:w-7 sm:h-7 fill-current drop-shadow-lg animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-900 dark:text-white text-xs sm:text-base font-medium italic font-body font-[Georgia,'Times_New_Roman',Times,serif]">
              Based on 500+ Google & Yelp Reviews
            </p>
            <p className="ttext-gray-900 dark:text-white text-xs sm:text-sm font-body font-[Georgia,'Times_New_Roman',Times,serif]">
              ⭐ Rated Excellent
            </p>
          </div>
        </div>
        </div>

        {/* Decorated container for review grid */}
        <div className="relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4 border-yellow-600 dark:border-orange-400/60 bg-gray-200 dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-yellow-200/10 before:via-orange-200/10 before:to-red-200/10 before:blur-2xl before:z-0 overflow-hidden">
          <div className="relative z-10">
            {/* Reviews: horizontal scroll on all screens, show 3 at a time on large screens */}
            <div
              ref={reviewsScrollRef}
              className="flex gap-4 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent snap-x snap-mandatory min-w-0 font-body focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/70"
              role="region"
              aria-live="polite"
              aria-label="Customer reviews carousel"
              style={{ scrollSnapType: 'x mandatory' }}
              tabIndex={0}
            >
              {reviews.map((review, index) => {
                // Remove unused expanded/see more logic
                return (
                  <article
                    key={review.id}
                    onClick={() => openModal(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(index);
                      }
                    }}
                    className={`group relative flex flex-col justify-between
                      h-[370px] sm:h-[400px] w-full
                      bg-white dark:bg-gray-800
                      border border-gray-300 dark:border-gray-700
                      hover:border-orange-400 dark:hover:border-yellow-500/50
                      shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-yellow-500/10
                      text-gray-900 dark:text-gray-200
                      hover:text-gray-900 dark:hover:text-white
                      backdrop-blur-sm
                      rounded-2xl transition-all duration-500 transform hover:-translate-y-2
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                      font-body
                      sm:p-8 p-4
                      sm:text-base text-sm
                      sm:rounded-2xl rounded-xl
                      sm:mb-0 mb-4
                      min-w-[85vw] max-w-xs snap-center md:min-w-[45vw] md:max-w-md lg:min-w-[32vw] lg:max-w-lg xl:min-w-[28vw] xl:max-w-xl
                      cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/70
                      `}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    aria-label={`Review by ${review.author} from ${review.location}. Click to read full review.`}
                    tabIndex={0}
                  >
                    {/* Date, stars, and source icon row */}
                    <div className="flex items-center gap-2 mb-6">
                    <time dateTime={review.date} className="text-xs text-gray-700 dark:text-gray-200 font-semibold font-body">
                      {review.date}
                    </time>
                    <span className="sr-only" id={`review-rating-${review.id}`}>{review.rating} out of 5 stars</span>
                    <div className="flex text-yellow-400 text-lg font-headline" aria-hidden="true" title={`${review.rating} star rating`}>
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    {/* Source icon with aria-label */}
                    <span className="ml-auto flex items-center gap-1 text-xs text-gray-700 dark:text-gray-200 font-semibold font-body" aria-label={`Source: ${review.source}`} title={`Source: ${review.source}`}>
                      {review.source === 'yelp' && (
                        <Image src="/images/logo/yelp.svg" alt="Yelp logo" width={20} height={20} className="inline-block w-5 h-5" />
                      )}
                      {review.source === 'google' && (
                        <Image src="/images/logo/google.svg" alt="Google logo" width={20} height={20} className="inline-block w-5 h-5" />
                      )}
                      {review.source.charAt(0).toUpperCase() + review.source.slice(1)}
                    </span>
                  </div>
                  {/* Review content with scroll for long text on desktop */}
                  <blockquote className="flex-1 font-body">
                    <div
                      className="font-bold text-md md:text-md mb-2 text-gray-900 dark:text-white transition-all duration-700 ease-in-out group-hover:text-orange-500 animate-fade-in font-headline"
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}
                      id={`review-title-${review.id}`}
                    >
                      {review.title}
                    </div>
                    <div className="relative flex-1 flex flex-col min-h-0">
                      <div className="flex-1 min-h-[100px] max-h-32 sm:max-h-36 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed italic font-poppins focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70 rounded" tabIndex={0} role="region" aria-label={`Full review text by ${review.author}`}>
                          {review.text}
                        </div>
                      </div>
                    </blockquote>
                    <footer className="mt-auto pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3 font-body">
                    {/* Author initial circle */}
                    <span className="flex items-center justify-center w-9 h-9 border-2 border-orange-200 dark:border-orange-600 rounded-full bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400 dark:bg-gradient-to-br dark:from-orange-500 dark:via-red-500 dark:to-yellow-500 text-white font-bold text-md shadow-md">
                      {review.author.trim().charAt(0)}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white font-headline">{review.author}</span>
                    <span className="text-xs text-gray-700 dark:text-gray-200 font-body">{review.location}</span>
                  </footer>
                </article>
                );
              })}
            </div>
            {/* Slide controls below reviews for all screens */}
            <div className="flex justify-between items-center mt-1 px-2">
              <button
                className="rounded-full p-2 bg-white/90 dark:bg-gray-800/90 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-300 dark:border-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 font-[Georgia,'Times_New_Roman',Times,serif]"
                onClick={() => scrollReviews('left')}
                aria-label="Scroll reviews left"
                type="button"
              >
                {/* Modern left arrow icon */}
                <svg className="w-8 h-8 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <path d="M14.5 8l-4 4 4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
            <span className="text-sm text-gray-800 text-center dark:text-gray-100 font-semibold tracking-wide">
               ← Swipe For More → 
              </span>
              <button
                className="rounded-full p-2 bg-white/90 dark:bg-gray-800/90 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-300 dark:border-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 font-[Georgia,'Times_New_Roman',Times,serif]"
                onClick={() => scrollReviews('right')}
                aria-label="Scroll reviews right"
                type="button"
              >
                {/* Modern right arrow icon */}
                <svg className="w-8 h-8 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <path d="M9.5 8l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
            </div>
            {/* Decorative bottom bar */}
            <div className="w-full flex justify-center items-center">
              <div className="h-1 w-2/3 sm:w-1/2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-md my-2 sm:my-4 opacity-80" />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div
          className={`text-center mt-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>
      </div>
    </section>

    {/* Book-Style Review Reading Modal */}
    {modalOpen && (
      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md focus:outline-none p-2 sm:p-4"
        onKeyDown={handleModalKeyDown}
        onClick={closeModal}
      >
        <div
          className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            maxHeight: '90vh',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Book binding spine effect */}
          <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-6 md:w-8 bg-gradient-to-r from-amber-700 to-amber-600 dark:from-orange-900 dark:to-orange-800 shadow-inner" />
          <div className="absolute left-3 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 sm:w-0.5 md:w-1 bg-gradient-to-b from-amber-800/50 via-amber-600/30 to-amber-800/50" />
          
          {/* Page content with book texture */}
          <div className="ml-4 sm:ml-8 md:ml-12 p-3 sm:p-6 md:p-8 lg:p-12 relative overflow-y-auto" style={{ maxHeight: '90vh' }}>
            {/* Page lines texture */}
            <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 31px, #00000015 31px, #00000015 32px)',
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              {/* Header with decorative elements */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 md:mb-6 pb-2 sm:pb-3 md:pb-4 border-b-2 border-amber-200 dark:border-gray-700">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2">
                    <div className="flex text-yellow-500 dark:text-yellow-400">
                      {[...Array(reviews[selectedReviewIndex].rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {reviews[selectedReviewIndex].source === 'yelp' && (
                        <Image src="/images/logo/yelp.svg" alt="Yelp" width={14} height={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                      {reviews[selectedReviewIndex].source === 'google' && (
                        <Image src="/images/logo/google.svg" alt="Google" width={14} height={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                      <time dateTime={reviews[selectedReviewIndex].date} className="font-serif">
                        {new Date(reviews[selectedReviewIndex].date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </time>
                    </span>
                  </div>
                  <h2 
                    id="review-modal-title" 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white font-serif mb-1 sm:mb-2"
                  >
                    {reviews[selectedReviewIndex].title}
                  </h2>
                </div>
              </div>

              {/* Review text with book-style typography */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <div className="relative">
                  <p className={`text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-800 dark:text-gray-200 font-serif italic indent-3 sm:indent-6 md:indent-8 first-letter:text-2xl sm:first-letter:text-3xl md:first-letter:text-4xl lg:first-letter:text-5xl first-letter:font-bold first-letter:text-orange-600 dark:first-letter:text-yellow-500 first-letter:float-left first-letter:mr-1 sm:first-letter:mr-1.5 md:first-letter:mr-2 first-letter:mt-0 sm:first-letter:mt-0.5 md:first-letter:mt-1 ${!isExpanded && reviews[selectedReviewIndex].text.length > 200 ? 'line-clamp-4 sm:line-clamp-5 md:line-clamp-none' : ''}`}>
                    {reviews[selectedReviewIndex].text}
                  </p>
                  {reviews[selectedReviewIndex].text.length > 200 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-2 text-xs sm:text-sm font-semibold text-orange-600 dark:text-yellow-500 hover:text-orange-700 dark:hover:text-yellow-400 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded md:hidden"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4 border-t-2 border-amber-200 dark:border-gray-700">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 dark:from-orange-500 dark:to-yellow-500 flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg flex-shrink-0">
                  {reviews[selectedReviewIndex].author.trim().charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-gray-900 dark:text-white font-serif text-sm sm:text-base md:text-lg truncate">
                    {reviews[selectedReviewIndex].author}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
                    {reviews[selectedReviewIndex].location}
                  </div>
                </div>
              </div>

              {/* Page number indicator */}
              <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-center text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 font-serif">
                Review {selectedReviewIndex + 1} of {reviews.length}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons - right below the modal */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-8 lg:gap-10 mt-3 sm:mt-4 px-2 sm:px-4" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevReview();
            }}
            aria-label="Previous review"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            aria-label="Close review"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextReview();
            }}
            aria-label="Next review"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:scale-110 transition-transform duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default Reviews;
