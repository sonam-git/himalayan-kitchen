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

  const featuredDishes = [
    {
      name: 'Chicken 65',
      description: 'Boneless chicken marinated in special spices, ginger, garlic, egg, yogurt, lemon juice & soy sauce. Sautéed with curry leaves & mustard seeds.',
      image: '/images/food/tika masala.jpg',
      spicy: true,
    },
    {
      name: 'Veg Chowmein',
      description: 'Cabbage, carrot, green beans, onions, soy.',
      image: '/images/food/chowmien.jpg',
      vegetarian: true,
    },
    {
      name: 'Tandoori Chicken',
      description: 'Juicy half chicken or whole chicken.',
      image: '/images/food/tandoori.jpg',
    },
    {
      name: 'Chicken Momo',
      description: 'Dumplings filled with ground chicken breast, cabbage, onions, herbs & chef\'s spices.',
      image: '/images/food/momo.jpg',
    },
    {
      name: 'Thali Set',
      description: 'A traditional Nepali meal set with rice, daal, vegetables, and choice of protein.',
      image: '/images/food/thaliset.jpg',
    },
  ];

  const openModal = (idx: number) => {
    setSelectedIndex(idx);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };
  const prevItem = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + featuredDishes.length) % featuredDishes.length);
    }
  };
  const nextItem = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % featuredDishes.length);
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
      className="relative py-20 sm:py-24 lg:py-28 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
      {/* Image as Section Background with Blur Overlay */}
      {/* <div className="absolute inset-0 w-full h-full z-0 aspect-video sm:aspect-auto"> */}
        {/* <Image
          src="/images/other/backdrop.png"
          alt="Menu Background"
          fill
          priority
          className="object-cover sm:object-cover w-full h-full rounded-2xl sm:rounded-3xl opacity-100"
        /> */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl"></div>
      </div> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <MenuHeading/>
        {/* Featured Dishes Section */}
        <div className="mt-4 mb-4">
          <div ref={featuredDishesScrollRef} className="flex gap-6 overflow-x-auto pb-2 px-2 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent featured-dishes-scroll">
            {featuredDishes.map((dish, idx) => (
              <div key={dish.name} className="min-w-[320px] max-w-sm w-full shrink-0">
                <div onClick={() => openModal(idx)} className="cursor-zoom-in h-full">
                  <MenuItemCard
                    name={dish.name}
                    description={dish.description}
                    image={dish.image}
                    spicy={dish.spicy}
                    vegetarian={dish.vegetarian}
                    index={idx}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center mt-2 mb-1 gap-2 w-full">
            <button
              className="rounded-full p-1.5 md:p-2 bg-transparent shadow-none hover:bg-white hover:border-orange-400 border border-transparent transition w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
              onClick={() => {
                if (featuredDishesScrollRef.current) {
                  featuredDishesScrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
                }
              }}
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              className="relative flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-sm md:text-lg font-extrabold shadow-xl border-2 border-white hover:bg-white hover:text-gray-900 hover:border-orange-400 hover:bg-gradient-to-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-200 active:scale-95 cursor-pointer select-none group min-w-[160px] md:min-w-[200px]"
              onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
              tabIndex={0}
              aria-label="Go to full menu ordering page"
              type="button"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-orange-500 transition-colors duration-300 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="drop-shadow font-extrabold tracking-wide group-hover:underline group-hover:decoration-orange-400 group-hover:decoration-2 group-hover:animate-[flip_0.6s_ease-in-out] transition-all duration-200">Browse Full Selection</span>
            </button>
            <button
              className="rounded-full p-1.5 md:p-2 bg-transparent shadow-none hover:bg-white hover:border-orange-400 border border-transparent transition w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
              onClick={() => {
                if (featuredDishesScrollRef.current) {
                  featuredDishesScrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                }
              }}
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
           {/* <div className="relative w-full bg-linear-to-r from-orange-100 via-yellow-50 to-red-100 dark:bg-linear-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:shadow-orange-900/30 backdrop-blur-md border-0 rounded-3xl py-12 px-4 md:px-16 my-10 shadow-2xl flex flex-col items-center mx-auto max-w-7xl">
              <div className="absolute inset-0 w-full h-full z-0 rounded-3xl overflow-hidden">
                <Image
                  src="/images/other/stone.webp"
                  alt="Menu CTA Background"
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-full rounded-3xl blur-xs opacity-50"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-gray-900/70 via-gray-900/40 to-gray-900/70 dark:from-black/80 dark:via-gray-900/60 dark:to-black/80 rounded-3xl"></div>
              </div>
              <div className="relative z-10 w-full flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold mb-3 text-orange-100 dark:text-yellow-500 text-center drop-shadow-lg dark:drop-shadow-xl">
                  Experience the Authentic Taste of the Himalayas
                </h3>
                <p className="text-md md:text-xl text-gray-50 dark:text-gray-200 mb-4 max-w-3xl text-center">
                 You can order your favorite dishes by calling us or using our convenient online ordering system.<br className="hidden md:inline" /> Enjoy the flavors of the Himalayas from the comfort of your home!
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
                  <a
                    href="tel:(415) 526-3161"
                    className="group relative inline-flex items-center justify-center bg-yellow-600 hover:bg-white text-white hover:text-black border-2 border-white hover:border-yellow-500 font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl min-w-[220px] text-lg md:text-xl cursor-pointer w-full sm:w-auto text-center"
                  >
                    <span className="relative z-10 flex items-center group-hover:animate-[flip_0.6s_ease-in-out]">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Us
                    </span>
                  </a>
                  <a
                    href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center bg-yellow-600 hover:bg-white text-white hover:text-black border-2 border-white hover:border-yellow-500 font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl min-w-[220px] text-lg md:text-xl cursor-pointer w-full sm:w-auto text-center"
                  >
                    <span className="flex items-center group-hover:animate-[flip_0.6s_ease-in-out]">
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Order Online
                    </span>
                  </a>
                </div>
              </div>
            </div> */}
      </div>
      {/* Modal for zoomed food item */}
      {modalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300" role="dialog" aria-modal="true" aria-labelledby="modal-dish-title">
          <div className="relative max-w-lg w-full mx-4 rounded-3xl overflow-hidden shadow-2xl">
            {/* Zoomed image */}
            <Image
              src={featuredDishes[selectedIndex].image}
              alt={featuredDishes[selectedIndex].name}
              width={600}
              height={400}
              className="object-cover w-full h-[400px] sm:h-[500px]"
              priority
            />
            {/* Title & description overlay at bottom, styled like Gallery */}
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 via-black/40 to-transparent px-6 pt-6 pb-20">
              <h2 id="modal-dish-title" className="text-2xl md:text-3xl font-serif font-bold text-white mb-1 drop-shadow-lg">
                {featuredDishes[selectedIndex].name}
              </h2>
              <p className="text-md md:text-lg text-gray-100 mb-0">
                {featuredDishes[selectedIndex].description}
              </p>
            </div>
            {/* Modal controls at bottom center */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-20 z-30">
              <button
                aria-label="Previous"
                onClick={prevItem}
                className="bg-linear-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-2 md:p-3 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Close"
                onClick={closeModal}
                className="bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 text-white dark:text-gray-100 rounded-full p-2 md:p-3 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                aria-label="Next"
                onClick={nextItem}
                className="bg-linear-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-2 md:p-3 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;
