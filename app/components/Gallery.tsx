"use client";

import React, { useEffect, useRef, useState, RefObject } from "react";
import Image from "next/image";


const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Accessibility: focus trap for modal, keyboard navigation, aria-live for dynamic content
  const modalRef = useRef<HTMLDivElement>(null);
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [mainModalIndex, setMainModalIndex] = useState(0);

  useEffect(() => {
    if (mainModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [mainModalOpen]);

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

  const galleryItems = [
    {
      image: "/images/gallery/everestman.jpg",
      title: "Everest Man Kami Rita Sherpa (Right)",
      description:
        "The only person to have summited Mount Everest 31 times holding Guinness World Record visiting our restaurant.",
    },
       {
      image: "/images/gallery/appa.jpeg",
      title: "Appa Sherpa (Middle) | Ang D Sherpa (Left) | Tamding Sherpa (2nd from left)",
      description:
        "Legendary mountaineer Appa Sherpa along with another two renowned mountaineers visiting our restaurant. Ang D Sherpa with most sibling to have summited Mt K2 and Mt Makalu respectively.",
    },
    {
      image: "/images/gallery/hkitchen.jpg",
      title: "Himalayan Kitchen",
      description:
        "Himalayan Kitchen's cozy and inviting ambiance, perfect for enjoying authentic meals with family and friends.",
    },
    {
      image: "/images/gallery/everestsummiter.jpeg",
      title: "Everest Summiter",
      description:
        "Dawa Yangzum Sherpa ( Middle) | First woman to become an international mountain guide from Nepal, and First Nepalese woman to summit all 14 peaks above 8 thousands meters along with her husband renowned Mountaineer Mingma T Sherpa (right), and another mountaineer Mingma Sherpa (left) visiting our restaurant.",
    },
    {
      image: "/images/gallery/everest.JPG",
      title: "Pema Chhiring Sherpa",
      description:
        "Famous mountaineer Pema Chhiring Sherpa, known for his 24 times Everest summits, waving the logo of Himalayan Kitchen on the top of the world.",
    },
    {
      image: "/images/gallery/guest1.jpg",
      title: "Birth Day Celebration",
      description:
        "A happy guest celebrating their birthday while enjoying their meal at Himalayan Kitchen.",
    },
    {
      image: "/images/gallery/climber1.jpg",
      title: "Everest Summiter",
      description:
        "Renowned climber trio Ngima N Sherpa (Left) : Youngest to climb Mt Everest for 24 times and counting, Lhakpa R Sherpa (Middle) : 17th times Everest Summitted. And first Nepali to climb “Seven Summits” the highest peaks on seven continents, and Tamting Sherpa (Right): completed all the 14 peaks above 8000m high around the world.",
    },
    {
      image: "/images/gallery/family-gathering.jpeg",
      title: "Family Gathering",
      description:
        "A joyful family gathering at Himalayan Kitchen, sharing delicious food and laughter.",
    },
    {
      image:"/images/gallery/family.jpeg",
      title: "Auspicious Family Visit",
      description:
        "A renowned Buddhist Master and teacher Tulku rinpoche Ngawang Lobsang Sherpa visiting our restaurant. He is also recognized as the eighth reincarnation of the Nyentse Lama. He is known for his teachings on Tantrayana, Tibetan Medicine, and Astrology.",
    },
    {
      image: "/images/gallery/Dining.jpeg",
      title: "Dining Experience",
      description:
        "One corner of our restaurant beautifully decorated for a cozy dining experience.",
    },
    {
      image: "/images/gallery/dining1.jpeg",
      title: "Dining Ambiance",
      description:
        "Another beautifully decorated corner of our restaurant, perfect for intimate dining experiences.",
    },
    {
      image: "/images/gallery/hsfc.jpeg",
      title: "Himalayan Sonoma FC",
      description:
        "Himalayan Kitchen proudly supporting local team sponsoring Himalayan Sonoma FC at their match.",
    },
    {
      image: "/images/gallery/guest.jpeg",
      title: "Satisfied Guest",
      description:
        "A satisfied guest enjoying their meal at Himalayan Kitchen, showcasing our delicious Himalayan cuisine.",
    },
    {
      image: "/images/gallery/catering.jpeg",
      title: "Catering Service",
      description:
        "Our catering service brings the authentic flavors of the Himalayas to your events and gatherings.",
    }
    
  ];

  // Main Gallery Modal State
  const openMainModal = (index: number) => {
    setMainModalIndex(index);
    setMainModalOpen(true);
    setShowMainModalText(false); // Hide text initially
  };

  // Delay showing modal text by 2s, hide after 5s
  const [showMainModalText, setShowMainModalText] = useState(false);
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    if (mainModalOpen) {
      showTimer = setTimeout(() => setShowMainModalText(true), 2000);
      hideTimer = setTimeout(() => setShowMainModalText(false), 25000); // 2s show + 25s visible
    } else {
      setShowMainModalText(false);
    }
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [mainModalOpen, mainModalIndex]);

  const closeMainModal = () => setMainModalOpen(false);
  const nextMainModal = () =>
    setMainModalIndex((i) => (i + 1) % galleryItems.length);
  const prevMainModal = () =>
    setMainModalIndex(
      (i) => (i - 1 + galleryItems.length) % galleryItems.length
    );

  // Food Gallery Items
  const foodGalleryItems = [
    {
      image: "/images/food/momo.jpeg",
      title: "Momo (Dumplings)",
      description:
        "Handmade Himalayan dumplings filled with seasoned meat or vegetables, served with spicy tomato chutney.",
    },
    {
      image: "/images/food/chowmien.jpg",
      title: "Himalayan Chow Mein",
      description:
        "Stir-fried noodles with fresh vegetables and your choice of protein, tossed in savory Himalayan spices.",
    },
    {
      image: "/images/food/thaliset.jpg",
      title: "Thali Set",
      description:
        "A complete meal platter featuring a variety of dishes, including rice, lentils, vegetables, and pickles.",
    },
    {
      image: "/images/food/tandoori.jpg",
      title: "Tandoori",
      description:
        "Marinated meat or vegetables cooked in a traditional clay oven, served with naan and chutney.",
    },
    {
      image: "/images/food/tika masala.jpg",
      title: "Tika Masala",
      description:
        "Tender pieces of meat cooked in a rich and creamy tomato-based sauce, served with rice or naan.",
    },
    {
      image: "/images/food/chicken65.jpg",
      title: "Chicken 65",
      description:
        "Spicy and crispy fried chicken pieces, marinated in a blend of South Indian spices.",
    },
    {
      image:"/images/food/samosa.jpeg",
      title: "Samosa",
      description:
        "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney.",
    },
    {
      image: "/images/food/garlic-naan.jpeg",
      title: "Garlic Naan",
      description:
        "Soft and fluffy Indian bread infused with garlic and herbs, perfect for scooping up curries.",
    },
    {
      image: "/images/food/kukhura-bhanta.jpeg",
      title: "Kukhura Bhanta | chicken eggplant curry",
      description:
        "Aromatic chicken curry cooked with roasted eggplant and spices, served with rice.",
    }
  ];

  // Food Modal State
  const [foodModalOpen, setFoodModalOpen] = useState(false);
  const [foodModalIndex, setFoodModalIndex] = useState(0);
  const closeFoodModal = () => setFoodModalOpen(false);
  const nextFoodModal = () =>
    setFoodModalIndex((i) => (i + 1) % foodGalleryItems.length);
  const prevFoodModal = () =>
    setFoodModalIndex(
      (i) => (i - 1 + foodGalleryItems.length) % foodGalleryItems.length
    );

  // Show more/less state for modals
  const [showFullMainDesc, setShowFullMainDesc] = useState(false);
  const [showFullFoodDesc, setShowFullFoodDesc] = useState(false);

  // Food modal text overlay state (delayed show, auto-hide)
  const [showFoodModalText, setShowFoodModalText] = useState(false);
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

  // Add refs for scroll containers
  const mainGalleryRef = useRef<HTMLDivElement>(null);
  const foodGalleryRef = useRef<HTMLDivElement>(null);

  // Helper to scroll gallery
  const scrollGallery = (
    ref: RefObject<HTMLDivElement | null>,
    dir: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: dir === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // --- Modal Keyboard Accessibility ---
  function handleModalKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!mainModalOpen) return;
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
        closeMainModal();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        prevMainModal();
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextMainModal();
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
  }

  return (
    <section
      aria-labelledby="gallery-heading"
      ref={sectionRef}
      id="gallery"
      className="relative  transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
      tabIndex={-1}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
            <span className="inline-block px-6 py-2 mt-4 bg-linear-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-100 rounded-full text-white dark:text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Visual Journey
            </span>
            <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          </div>
          <h2
            id="gallery-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-6"
          >
            Our Gallery
          </h2>

          {/* <p className="text-lg md:text-xl text-gray-200 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
           Discover our signature dishes, cozy ambiance, and heartwarming visits from popular personalities, friends, family, and customers of Himalayan Kitchen worldwide.
          </p> */}
        </div>
        <div className="relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4 border-yellow-300/60 dark:border-orange-400/60 bg-black/40 dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-linear-to-br before:from-yellow-200/10 before:via-orange-200/10 before:to-red-200/10 before:blur-2xl before:z-0 overflow-hidden">
          <div className="relative z-10">
            {/* Heading and description for Main Gallery */}
            <div className="mb-4 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl text-white font-black bg-clip-text pt-4 mb-2">
                Moments at Our Table
              </h2>
              <p className="text-sm sm:text-base font-medium text-gray-100 dark:text-gray-100 font-[Georgia,'Times_New_Roman',Times,serif]">
              A visual journey through the cherished memories, beloved guests, and lively atmosphere that make our restaurant special. See how visitors from near and far enjoy their Himalayan dining experience.
              </p>
            </div>
            {/* Main Gallery - horizontal scroll on all screens, grid fallback if needed */}
            <div
              ref={mainGalleryRef}
              className="flex gap-6 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent snap-x snap-mandatory min-w-0 border-t-2 border-yellow-200 dark:border-gray-700 pt-2"
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:-translate-y-2 min-w-[80vw] max-w-xs snap-center md:min-w-[45vw] md:max-w-md lg:min-w-[32vw] lg:max-w-lg xl:min-w-[28vw] xl:max-w-xl"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex flex-col justify-end">
                    <button
                      className="w-full h-full focus:outline-none"
                      onClick={() => openMainModal(index)}
                      aria-label={`View full ${item.title}`}
                      style={{ position: "absolute", inset: 0, zIndex: 2 }}
                    ></button>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-3xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    {/* Number Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    {/* Title/Caption at bottom of image (description only in modal) */}
                    <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 dark:bg-black/70 text-white text-center">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Gallery horizontal scroll controls for all screens - now always visible */}
            <div className="flex justify-between items-center mt-1 px-2">
              <button
                className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-200 dark:border-orange-700"
                onClick={() => scrollGallery(mainGalleryRef, "left")}
                aria-label="Scroll left"
              >
                {/* Modern left arrow icon */}
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                  />
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
              <span className="text-sm text-gray-100 dark:text-gray-100 font-semibold tracking-wide">
                Slide for more
              </span>
              <button
                className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-200 dark:border-orange-700"
                onClick={() => scrollGallery(mainGalleryRef, "right")}
                aria-label="Scroll right"
              >
                {/* Modern right arrow icon */}
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                  />
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
        {/* Main Gallery Modal */}
        {mainModalOpen && (
          <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-lg focus:outline-none"
            onKeyDown={handleModalKeyDown}
          >
            <div className="relative max-w-lg w-full mx-4 rounded-3xl overflow-visible shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Frame fits image */}
              <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl border-4 border-yellow-400/80 dark:border-orange-400/80 shadow-[0_0_40px_10px_rgba(255,186,0,0.15)] pointer-events-none" />
              {/* Zoomed image */}
              <Image
                src={galleryItems[mainModalIndex].image}
                alt={galleryItems[mainModalIndex].title}
                width={600}
                height={400}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] object-contain z-10"
                priority
              />
              {/* Title and Description overlay at bottom, styled like Gallery, delayed show and auto-hide */}
              {showMainModalText && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0 w-[95%] max-w-xl px-4 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-b-2xl text-white text-center drop-shadow-lg flex flex-col items-center animate-fade-in border-t border-yellow-300/40 z-30">
                  <h2 id="main-modal-title" className="text-lg sm:text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg font-headline">
                    {galleryItems[mainModalIndex].title}
                  </h2>
                  <p className="text-sm italic sm:text-base text-gray-100 mb-0 font-body font-[Georgia,'Times_New_Roman',Times,serif]">
                    {showFullMainDesc ||
                    galleryItems[mainModalIndex].description.length <= 180
                      ? galleryItems[mainModalIndex].description
                      : `${galleryItems[mainModalIndex].description.slice(0, 180)}...`}
                    {galleryItems[mainModalIndex].description.length > 180 && (
                      <button
                        className="ml-2 text-yellow-300 underline text-sm font-bold focus:outline-none"
                        onClick={() => setShowFullMainDesc((v) => !v)}
                      >
                        {showFullMainDesc ? "Less" : "More"}
                      </button>
                    )}
                  </p>
                </div>
              )}
            </div>
            {/* Controls always below the modal box, outside the border */}
            <div className="flex justify-center items-center gap-8 mt-10 z-50 relative"
              style={{ marginTop: '2.5rem' }}
              aria-label="Gallery modal controls"
            >
              <button
                aria-label="Previous"
                onClick={e => { e.stopPropagation(); prevMainModal(); }}
                className="bg-linear-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Close"
                onClick={e => { e.stopPropagation(); closeMainModal(); }}
                className="bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                aria-label="Next"
                onClick={e => { e.stopPropagation(); nextMainModal(); }}
                className="bg-linear-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
        {/* Food Gallery Section */}
        <div className="mt-8 relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4 border-yellow-300/60 dark:border-orange-400/60 bg-black/40 dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-linear-to-br before:from-yellow-200/10 before:via-orange-200/10 before:to-red-200/10 before:blur-2xl before:z-0 overflow-hidden">
          <div className="relative z-10">
            {/* Heading and description for Food Gallery */}
            <div className="mb-4 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl text-white font-black bg-clip-text pt-4 mb-2">
                A Feast For Your Eyes
              </h2>
              <p className="text-sm sm:text-base text-gray-100 dark:text-gray-300 font-medium font-[Georgia,'Times_New_Roman',Times,serif]">
                A showcase of our most popular, authentic & mouth-watering
                Himalayan dishes. Let the gallery inspire your next dining
                experience!
              </p>
            </div>
            <div
              ref={foodGalleryRef}
              className="flex gap-6 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent snap-x snap-mandatory min-w-0 border-t-2 border-yellow-200 dark:border-gray-700 pt-2"
            >
              {foodGalleryItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-500 min-w-[80vw] max-w-xs snap-center md:min-w-[45vw] md:max-w-md lg:min-w-[32vw] lg:max-w-lg xl:min-w-[28vw] xl:max-w-xl"
                >
                  <button
                    className="w-full h-full focus:outline-none"
                    onClick={() => {
                      setFoodModalIndex(idx);
                      setFoodModalOpen(true);
                    }}
                    aria-label={`View full ${item.title}`}
                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                  ></button>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-700 ease-out rounded-2xl"
                    priority={idx < 3}
                  />
                  <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 dark:bg-black/70 text-white text-center">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
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
              <span className="text-sm text-gray-100 dark:text-gray-100 font-semibold tracking-wide">
                Slide for more
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
        <div className="w-full flex justify-center items-center">
          <div className="h-1 w-2/3 sm:w-1/2 bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-md my-2 sm:my-4 opacity-80" />
        </div>
        {/* Food Modal */}
        {foodModalOpen && (
          <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="food-modal-title"
            onClick={closeFoodModal}
          >
            <div
              className="relative max-w-lg w-full mx-4 rounded-3xl overflow-visible shadow-2xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Frame fits image */}
              <div className="absolute inset-0 z-20 rounded-2xl sm:rounded-3xl border-4 border-yellow-400/80 dark:border-orange-400/80 shadow-[0_0_40px_10px_rgba(255,186,0,0.15)] pointer-events-none" />
              {/* Zoomed image */}
              <Image
                src={foodGalleryItems[foodModalIndex].image}
                alt={foodGalleryItems[foodModalIndex].title}
                width={600}
                height={400}
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] object-contain z-10"
                priority
              />
              {/* Title and Description overlay at bottom, styled like Gallery, delayed show and auto-hide */}
              {showFoodModalText && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0 w-[95%] max-w-xl px-4 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-b-2xl text-white text-center drop-shadow-lg flex flex-col items-center animate-fade-in border-t border-yellow-300/40 z-30">
                  <h2 id="food-modal-title" className="text-lg sm:text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg font-headline">
                    {foodGalleryItems[foodModalIndex].title}
                  </h2>
                  <p className="text-sm italic sm:text-base text-gray-100 mb-0 font-body font-[Georgia,'Times_New_Roman',Times,serif]">
                    {showFullFoodDesc ||
                    foodGalleryItems[foodModalIndex].description.length <= 180
                      ? foodGalleryItems[foodModalIndex].description
                      : `${foodGalleryItems[foodModalIndex].description.slice(0, 180)}...`}
                    {foodGalleryItems[foodModalIndex].description.length > 180 && (
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
            {/* Controls always below the modal image */}
            <div className="flex justify-center items-center gap-8 mt-10 z-50 relative"
              style={{ marginTop: '2.5rem' }}
              aria-label="Food modal controls"
              onClick={e => e.stopPropagation()}
            >
              <button
                aria-label="Previous"
                onClick={e => { e.stopPropagation(); prevFoodModal(); }}
                className="bg-linear-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Close"
                onClick={closeFoodModal}
                className="bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button
                aria-label="Next"
                onClick={e => { e.stopPropagation(); nextFoodModal(); }}
                className="bg-linear-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
