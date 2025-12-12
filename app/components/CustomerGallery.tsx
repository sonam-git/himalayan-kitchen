"use client";

import React, { useEffect, useRef, useState, RefObject } from "react";
import Image from "next/image";

const CustomerGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Accessibility: focus trap for modal, keyboard navigation
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    if (modalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalOpen]);

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

  const customerItems = [
    {
      image: "/images/customer/guest9.jpeg",
      title: "Joyful Dining Experience",
      description:
        "Happy customers enjoying their authentic Himalayan meal at our restaurant, sharing laughter and creating memories.",
    },
    {
      image: "/images/customer/guest10.jpeg",
      title: "Family Celebration",
      description:
        "A wonderful family gathering at Himalayan Kitchen, celebrating special moments with our delicious cuisine.",
    },
    {
      image: "/images/customer/guest11.jpeg",
      title: "Friends & Food",
      description:
        "Friends bonding over flavorful Himalayan dishes, enjoying the warm atmosphere of our restaurant.",
    },
    {
      image: "/images/customer/guest12.jpeg",
      title: "Happy Customers",
      description:
        "Satisfied guests savoring the authentic flavors of Nepal and Tibet, right here in Marin.",
    },
    {
      image: "/images/customer/guest13.jpeg",
      title: "Delightful Moments",
      description:
        "Customers enjoying a memorable dining experience with our signature Himalayan specialties.",
    },
    {
      image: "/images/customer/guest14.jpeg",
      title: "Special Occasion",
      description:
        "Celebrating life's special moments at Himalayan Kitchen with family, friends, and exceptional food.",
    },
    {
      image: "/images/customer/guest15.jpeg",
      title: "Culinary Adventure",
      description:
        "Adventurous food lovers discovering the rich and diverse flavors of Himalayan cuisine.",
    },
    {
      image: "/images/customer/guest16.jpeg",
      title: "Community Gathering",
      description:
        "Our restaurant bringing the community together, one delicious meal at a time.",
    },
    {
      image: "/images/customer/sherpa-guest.jpeg",
      title: "Sherpa Heritage Connection",
      description:
        "Guests from the Sherpa community enjoying authentic flavors that remind them of home.",
    },
  ];

  // Modal State
  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
    setShowModalText(false); // Reset text visibility when opening modal
  };

  // Delay showing modal text by 2s, hide after 25s
  const [showModalText, setShowModalText] = useState(false);
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    if (modalOpen) {
      showTimer = setTimeout(() => setShowModalText(true), 2000);
      hideTimer = setTimeout(() => setShowModalText(false), 25000);
    }
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [modalOpen, modalIndex]);

  const closeModal = () => {
    setModalOpen(false);
    setShowModalText(false);
  };

  const nextModal = () => {
    setModalIndex((i) => (i + 1) % customerItems.length);
    setShowModalText(false);
  };

  const prevModal = () => {
    setModalIndex((i) => (i - 1 + customerItems.length) % customerItems.length);
    setShowModalText(false);
  };

  // Show more/less state for modal
  const [showFullDesc, setShowFullDesc] = useState(false);

  // Add ref for scroll container
  const galleryRef = useRef<HTMLDivElement>(null);

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

  // Modal Keyboard Accessibility
  function handleModalKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!modalOpen) return;
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
        closeModal();
        break;
      case "ArrowLeft":
        e.preventDefault();
        prevModal();
        break;
      case "ArrowRight":
        e.preventDefault();
        nextModal();
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
      <section
        aria-labelledby="customer-gallery-heading"
        ref={sectionRef}
        id="customer-gallery"
        className="relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
        tabIndex={-1}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
              <span className="inline-block px-6 py-2 mt-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-600 dark:border-yellow-400 rounded-full text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Customer Stories
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-orange-600 dark:text-yellow-300 mb-6 ">
              Happy Customers
            </h2>
            <p className="text-md sm:text-xs md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-800 dark:text-gray-100">
              See our wonderful customers enjoying authentic Himalayan cuisine,
              celebrating special moments, and creating lasting memories at
              Himalayan Kitchen. Their smiles are our greatest reward!
            </p>
          </div>

          <div className="relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4 border-yellow-600 dark:border-orange-400/60 bg-white dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-yellow-200/10 before:via-orange-200/10 before:to-red-200/10 before:blur-2xl before:z-0 overflow-hidden">
            <div className="relative z-10">
              {/* Heading and description for Customer Gallery */}
              <div className="mb-4 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-gray-800 dark:text-white font-black bg-clip-text pt-4 mb-2">
                  Smiles & Satisfaction
                </h2>
                <p className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-100 font-[Georgia,'Times_New_Roman',Times,serif]">
                  A glimpse into the joy and happiness our customers experience
                  at Himalayan Kitchen. From family gatherings to casual
                  dinners with friends, every visit is a celebration of great
                  food and warm hospitality.
                </p>
              </div>

              {/* Customer Gallery - horizontal scroll */}
              <div
                ref={galleryRef}
                className="flex gap-6 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent snap-x snap-mandatory min-w-0 border-t-2 border-yellow-200 dark:border-gray-700 pt-2"
              >
                {customerItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:-translate-y-2 min-w-[80vw] max-w-xs snap-center md:min-w-[45vw] md:max-w-md lg:min-w-[32vw] lg:max-w-lg xl:min-w-[28vw] xl:max-w-xl"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex flex-col justify-end">
                      <button
                        className="w-full h-full focus:outline-none"
                        onClick={() => openModal(index)}
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
                  onClick={() => scrollGallery(galleryRef, "left")}
                  aria-label="Scroll left"
                >
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
                <span className="text-sm text-gray-800 dark:text-gray-100 text-center font-semibold tracking-wide">
                  | Discover more images by sliding |
                </span>
                <button
                  className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-200 dark:border-orange-700"
                  onClick={() => scrollGallery(galleryRef, "right")}
                  aria-label="Scroll right"
                >
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
        </div>
      </section>

      {/* Customer Gallery Modal */}
      {modalOpen && (
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
              src={customerItems[modalIndex].image}
              alt={customerItems[modalIndex].title}
              width={600}
              height={400}
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto object-contain z-10"
              style={{ maxHeight: "500px" }}
              priority
            />
            {/* Title and Description overlay */}
            {showModalText && (
              <div className="absolute bottom-0 left-0 right-0 mb-0 w-full px-4 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-xl rounded-b-2xl text-white text-center drop-shadow-lg flex flex-col items-center border-t border-yellow-300/40 z-30 animate-slide-up">
                <h2
                  id="customer-modal-title"
                  className="text-lg sm:text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg font-headline"
                >
                  {customerItems[modalIndex].title}
                </h2>
                <p className="text-sm italic sm:text-base text-gray-100 mb-0 font-body font-[Georgia,'Times_New_Roman',Times,serif]">
                  {showFullDesc ||
                  customerItems[modalIndex].description.length <= 180
                    ? customerItems[modalIndex].description
                    : `${customerItems[modalIndex].description.slice(0, 180)}...`}
                  {customerItems[modalIndex].description.length > 180 && (
                    <button
                      className="ml-2 text-yellow-300 underline text-sm font-bold focus:outline-none"
                      onClick={() => setShowFullDesc((v) => !v)}
                    >
                      {showFullDesc ? "Less" : "More"}
                    </button>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Modal Controls */}
          <div
            className="flex justify-center items-center gap-8 mt-10 z-50 relative"
            style={{ marginTop: "2.5rem" }}
            aria-label="Customer gallery modal controls"
          >
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prevModal();
              }}
              className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg
                className="w-7 h-7 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                nextModal();
              }}
              className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-400 text-white dark:text-gray-100 rounded-full p-3 md:p-4 shadow-xl hover:scale-110 focus:outline-none border-2 border-white/70 dark:border-gray-700 transition-transform duration-200"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerGallery;
