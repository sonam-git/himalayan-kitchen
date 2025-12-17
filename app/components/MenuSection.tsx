'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import MenuItemCard from './MenuItemCard';
import MenuHeading from './MenuHeading';


const MenuSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredDishesScrollRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Food modal text overlay state (delayed show, auto-hide)
  const [showModalText, setShowModalText] = useState(false);
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    if (modalOpen && selectedIndex !== null) {
      // Show text after 2 seconds
      showTimer = setTimeout(() => setShowModalText(true), 2000);
      // Hide text after 25 seconds total (2s delay + 23s visible)
      hideTimer = setTimeout(() => setShowModalText(false), 25000);
    }
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [modalOpen, selectedIndex]);

  const featuredDishes = [
    {
      name: 'Mo:Mo',
      description: 'Himalayan handmade dumplings with authentic Nepali taste. Available in Veg, Chicken, Pork & Paneer.',
      image: '/images/food/momo.jpeg',
      vegetarian: false,
      vegan: false,
      bothVegNonVeg: true,
      specialTag: 'favorite' as const,
    },
    {
      name: 'Tandoori Chicken',
      description: 'Juicy half chicken or whole chicken.',
      image: '/images/food/tandoori.jpg',
      vegetarian: false,
      vegan: false,
      bothVegNonVeg: false,
      specialTag: 'chef-choice' as const,
    },
    {
      name: 'Lunch Special',
      description: 'A traditional Nepali meal set with rice, daal, vegetables, and choice of protein. Available in both veg and non-veg.',
      image: '/images/food/thaliset.jpg',
      vegetarian: false,
      vegan: false,
      bothVegNonVeg: true,
      specialTag: 'popular' as const,
    },
    {
      name: 'Chicken 65',
      description: 'Boneless chicken marinated in special spices, ginger, garlic, egg, yogurt, lemon juice & soy sauce. Sautéed with curry leaves & mustard seeds.',
      image: '/images/food/chicken65.jpg',
      vegetarian: false,
      vegan: false,
      bothVegNonVeg: false,
      specialTag: 'chef-choice' as const,
    },
    {
      name: 'Chowmein',
      description: 'Nepalease style stir fired noodles with vegetables and other choice of protein.',
      image: '/images/food/chowmien.jpg',
      vegetarian: false,
      vegan: false,
      bothVegNonVeg: true,
      specialTag: 'popular' as const,
    },
    {
      name:'Lamb Kabab',
      description: 'Tender pieces of lamb marinated in a blend of spices and grilled to perfection.',
      image: '/images/food/lamb-kabab.jpeg',
      vegetarian: false,
      vegan: false,
      bothVegNonVeg: false,
      specialTag: 'chef-choice' as const,
    },
    {
      name: 'Sag Paneer',
      description: 'Fresh spinach and cheese cube cooked in creamy tomato and onion based sauce with touch of cream.',
      image: '/images/food/saag-panir.jpeg',
      vegetarian: true,
      vegan: false,
      bothVegNonVeg: false,
      specialTag: 'favorite' as const,
    },
    {
      name:'Briyani',
      description: 'Aromatic basmati rice caramelized with onion, house spices, herbs, and choice of meat or vegetables. Available in different meat options.',
      image: '/images/food/briyani.jpeg',
      vegetarian: false,
      vegan: false,
      bothVegNonVeg: true,
      specialTag: 'favorite' as const,
    },
        {
      name:'Chicken Tikka Masala',
      description: 'Aromatic chicken tikka cooked in a creamy tomato sauce with spices. Available in different meat options.',
      image: '/images/food/chicken-tikka.jpeg',
      vegetarian: false,
      vegan: false,
      bothVegNonVeg: false,
      specialTag: 'popular' as const,
    }
  ];

  const openModal = (idx: number) => {
    setSelectedIndex(idx);
    setModalOpen(true);
    setShowModalText(false); // Reset text visibility when opening modal
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
    setShowModalText(false); // Reset text visibility when closing modal
  };
  const prevItem = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + featuredDishes.length) % featuredDishes.length);
      setShowModalText(false); // Reset text when changing items
    }
  };
  const nextItem = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % featuredDishes.length);
      setShowModalText(false); // Reset text when changing items
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
   
        if (entry.isIntersecting) {
       
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

  return (
    <section 
      ref={sectionRef}
      id="menu" 
      aria-labelledby="menu-heading"
      className="relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto lg:px-8 w-full">
        <MenuHeading/>
        {/* Featured Dishes Section */}
        <div className="mt-4 mb-4">
          <div className="relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4 border-yellow-600 dark:border-orange-400/60 bg-white dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-yellow-200/10 before:via-orange-200/10 before:to-red-200/10 before:blur-2xl before:z-0 overflow-hidden">
            <div className="relative z-10">
              <div ref={featuredDishesScrollRef} className="flex gap-6 overflow-x-auto pb-2 px-2 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent featured-dishes-scroll focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/70" tabIndex={0} role="region" aria-label="Featured dishes carousel">
                {featuredDishes.map((dish, idx) => (
                  <div key={dish.name} className="min-w-[320px] max-w-sm w-full shrink-0">
                    <div onClick={() => openModal(idx)} className="cursor-zoom-in h-full">
                      <MenuItemCard
                        name={dish.name}
                        description={dish.description}
                        image={dish.image}
                        vegetarian={dish.vegetarian}
                        vegan={dish.vegan}
                        specialTag={dish.specialTag}
                        bothVegNonVeg={dish.bothVegNonVeg}
                        index={idx}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row items-center justify-center mt-2 mb-6 gap-2 w-full">
                <button
                  className="rounded-full p-2 md:p-3 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-yellow-100 dark:hover:bg-yellow-900 border-2 border-orange-300 dark:border-orange-700 transition w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group"
                  onClick={() => {
                    if (featuredDishesScrollRef.current) {
                      const container = featuredDishesScrollRef.current;
                      const firstItem = container.querySelector('div[class*="min-w-"]') as HTMLElement;
                      
                      if (firstItem) {
                        // Get full card width including gap (24px = gap-6)
                        const cardWidth = firstItem.offsetWidth;
                        const gap = 24;
                        const scrollAmount = cardWidth + gap;
                        
                        // Calculate new scroll position
                        const currentScroll = container.scrollLeft;
                        const newScroll = Math.max(currentScroll - scrollAmount, 0);
                        
                        // Only scroll if we're not already at the boundary
                        if (newScroll !== currentScroll) {
                          container.scrollTo({
                            left: newScroll,
                            behavior: 'smooth',
                          });
                        }
                      }
                    }
                  }}
                  aria-label="Show previous dish"
                  type="button"
                >
                  {/* Double line left arrow */}
                  <svg className="w-7 h-7 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 19l-7-7 7-7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="relative flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full bg-yellow-600 dark:bg-yellow-900/40 text-gray-100 dark:text-gray-900 text-sm md:text-lg font-extrabold shadow-xl border-2 border-white dark:border-gray-800 hover:bg-yellow-100 hover:text-yellow-800 dark:hover:bg-yellow-300 hover:border-orange-400 hover:[&>svg]:text-orange-500 hover:[&>svg]:stroke-orange-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-200 active:scale-95 cursor-pointer select-none group min-w-40 md:min-w-[200px] no-underline font-[Georgia,'Times_New_Roman',Times,serif]"
                  onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
                  tabIndex={0}
                  aria-label="Go to full menu ordering page"
                  type="button"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white dark:text-gray-900 hover:text-orange-800 transition-colors duration-300 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="drop-shadow font-extrabold tracking-wide group-hover:no-underline group-hover:decoration-orange-400 group-hover:decoration-2 group-hover:animate-[flip_0.6s_ease-in-out] transition-all duration-200 no-underline font-[Georgia,'Times_New_Roman',Times,serif]">View Full Menu</span>
                </button>
                <button
                  className="rounded-full p-2 md:p-3 bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-yellow-100 dark:hover:bg-yellow-900 border-2 border-orange-300 dark:border-orange-700 transition w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group"
                  onClick={() => {
                    if (featuredDishesScrollRef.current) {
                      const container = featuredDishesScrollRef.current;
                      const firstItem = container.querySelector('div[class*="min-w-"]') as HTMLElement;
                      
                      if (firstItem) {
                        // Get full card width including gap (24px = gap-6)
                        const cardWidth = firstItem.offsetWidth;
                        const gap = 24;
                        const scrollAmount = cardWidth + gap;
                        
                        // Calculate new scroll position
                        const currentScroll = container.scrollLeft;
                        const maxScroll = container.scrollWidth - container.clientWidth;
                        const newScroll = Math.min(currentScroll + scrollAmount, maxScroll);
                        
                        // Only scroll if we're not already at the boundary
                        if (newScroll !== currentScroll) {
                          container.scrollTo({
                            left: newScroll,
                            behavior: 'smooth',
                          });
                        }
                      }
                    }
                  }}
                  aria-label="Show next dish"
                  type="button"
                >
                  {/* Double line right arrow */}
                  <svg className="w-7 h-7 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 5l7 7-7 7" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for zoomed food item */}
      {modalOpen && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="menu-modal-title"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-lg focus:outline-none"
        >
          <h2 id="menu-modal-title" className="sr-only">Featured Dish Details</h2>
          <div className="relative max-w-lg w-full mx-4 rounded-3xl overflow-visible shadow-2xl flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Decorative Frame fits image */}
            <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl border-4 border-yellow-400/80 dark:border-orange-400/80 shadow-[0_0_40px_10px_rgba(255,186,0,0.15)] pointer-events-none" />
            {/* Zoomed image */}
            <Image
              src={featuredDishes[selectedIndex].image}
              alt={featuredDishes[selectedIndex].name}
              width={600}
              height={400}
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-contain z-10"
              style={{ maxHeight: '500px' }}
              loading="eager"
            />
            {/* Title & description overlay at bottom, styled like Gallery, delayed show and auto-hide */}
            {showModalText && (
              <div className="absolute bottom-0 left-0 right-0 mb-0 w-full px-4 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-b-2xl text-white text-center drop-shadow-lg flex flex-col items-center border-t border-yellow-300/40 z-30 animate-slide-up">
                <h2 id="modal-dish-title" className="text-lg sm:text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg font-headline">
                  {featuredDishes[selectedIndex].name}
                </h2>
                <p className="text-sm italic sm:text-base text-gray-100 mb-0 font-body font-[Georgia,'Times_New_Roman',Times,serif]">
                  {featuredDishes[selectedIndex].description}
                </p>
              </div>
            )}
          </div>
          {/* Modal controls always visible below the modal, outside the border/frame */}
          <div className="flex justify-center items-center gap-8 mt-10 z-50 relative"
            style={{ marginTop: '2.5rem' }}
            aria-label="Menu modal controls"
          >
            <button
              aria-label="Previous"
              onClick={e => { e.stopPropagation(); prevItem(); }}
              className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Close"
              onClick={e => { e.stopPropagation(); closeModal(); }}
              className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={e => { e.stopPropagation(); nextItem(); }}
              className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;
