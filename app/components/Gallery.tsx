'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalDesc, setModalDesc] = useState("");

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
      title: "Everest Man Kami Rita Sherpa",
      description: "The only person to have summited mount everest 31 times holding guinness world record visiting our restaurant."
    },
    {
      image: "/images/gallery/hkitchen.jpg",
      title: "Himalayan Kitchen",
      description: "Himalayan Kitchen's cozy and inviting ambiance, perfect for enjoying authentic meals with family and friends."
    },
    {
      image: "/images/gallery/everestsummiter.jpg",
      title: "Everest Summiter",
      description: "Some of the renowned mountaineers who have conquered the world's highest peak visiting our restaurant."
    },
       {
      image: "/images/gallery/everest.jpg",
      title: "Pema Chhiring Sherpa",
      description: "Famous mountaineer Pema Chhiring Sherpa, known for his 24 times Everest summits, waving the logo of Himalayan Kitchen on the top of the world."
    },
    {
      image: "/images/gallery/guest1.jpg",
      title: "Birth Day Celebration",
      description: "A happy guest celebrating their birthday while enjoying their meal at Himalayan Kitchen."
    },
    {
      image: "/images/gallery/climber1.jpg",
      title: "Everest Summiter",
      description: "Renowned climber trio Ngima N Sherpa (Left) : Youngest to climb Mt Everest for 24 times and counting, Lhakpa R Sherpa (Middle) : 17th times Everest Summitted. And first Nepali to climb “Seven Summits” the highest peaks on seven continents, and Tamting Sherpa (Right): completed all the 14 peaks above 8000m high around the world."
    }
  ];

  const openModal = (img: string, title: string, desc: string) => {
    setModalImg(img);
    setModalTitle(title);
    setModalDesc(desc);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const foodGalleryItems = [
    {
      image: "/images/food/momo.jpg",
      title: "Momo (Dumplings)",
      description: "Handmade Himalayan dumplings filled with seasoned meat or vegetables, served with spicy tomato chutney."
    },
    {
      image: "/images/food/chowmien.jpg",
      title: "Himalayan Chow Mein",
      description: "Stir-fried noodles with fresh vegetables and your choice of protein, tossed in savory Himalayan spices."
    },
    {
      image: "/images/food/thaliset.jpg",
      title: "Thali Set",
      description: "A complete meal platter featuring a variety of dishes, including rice, lentils, vegetables, and pickles."
    },
    {
      image: "/images/food/tandoori.jpg",
      title: "Tandoori",
      description: "Marinated meat or vegetables cooked in a traditional clay oven, served with naan and chutney."
    },
    {
      image: "/images/food/tika masala.jpg",
      title: "Tika Masala",
      description: "Tender pieces of meat cooked in a rich and creamy tomato-based sauce, served with rice or naan."
    },
    {
      image: "/images/food/chicken65.jpg",
      title: "Chicken 65",
      description: "Spicy and crispy fried chicken pieces, marinated in a blend of South Indian spices."
    }
  ];

  const [foodModalOpen, setFoodModalOpen] = useState(false);
  const [foodModalIndex, setFoodModalIndex] = useState(0);

  const openFoodModal = (index: number) => {
    setFoodModalIndex(index);
    setFoodModalOpen(true);
  };
  const closeFoodModal = () => setFoodModalOpen(false);
  const nextFoodModal = () => setFoodModalIndex((i) => (i + 1) % foodGalleryItems.length);
  const prevFoodModal = () => setFoodModalIndex((i) => (i - 1 + foodGalleryItems.length) % foodGalleryItems.length);

  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
      {/* Image as Section Background with Blur Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/images/other/backdrop2.png" alt="Gallery Background" fill priority className="object-cover w-full h-full rounded-2xl sm:rounded-3xl  opacity-80" />
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/90 dark:via-gray-900/80 dark:to-black/90 rounded-2xl sm:rounded-3xl"></div>
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-6 py-2 bg-linear-to-r from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20 border border-orange-200/50 dark:border-orange-700/50 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Visual Journey
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-100 dark:text-white mb-6">
            Our <span className="bg-linear-to-r from-orange-600 via-red-600 to-orange-600 dark:from-orange-400 dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
           Discover our signature dishes, cozy ambiance, and heartwarming visits from popular personalities, friends, family, and customers of Himalayan Kitchen worldwide.
          </p>
        </div>
     <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black bg-linear-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4"><span className='text-yellow-300'>Moments at </span> Our Table</h2>
            <p className="text-lg md:text-xl text-gray-100 dark:text-gray-100 max-w-2xl mx-auto">
             A visual journey of flavor, culture, and connection. Explore our restaurant through beautiful moments, special events, and the wonderful people who have visited us.
            </p>
          </div>
        {/* Gallery Grid */}
        <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex flex-col justify-end">
                <button
                  className="w-full h-full focus:outline-none"
                  onClick={() => openModal(item.image, item.title, item.description)}
                  aria-label={`View full ${item.title}`}
                  style={{ position: 'absolute', inset: 0, zIndex: 2 }}
                ></button>
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">{index + 1}</span>
                </div>
                {/* Title/Caption and Description at bottom of image */}
                <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 dark:bg-black/70 text-white text-center">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-left leading-snug">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Food Gallery Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black bg-linear-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4"><span className='text-yellow-300'>A Feast</span> for Your Eyes</h2>
            <p className="text-lg md:text-xl text-gray-100 dark:text-gray-100 max-w-2xl mx-auto">
              Explore the beauty of our authentic and mouth-watering Himalayan dishes. Let the gallery inspire your next dining experience!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodGalleryItems.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-500">
                <button
                  className="w-full h-full focus:outline-none"
                  onClick={() => openFoodModal(idx)}
                  aria-label={`View full ${item.title}`}
                  style={{ position: 'absolute', inset: 0, zIndex: 2 }}
                ></button>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={idx < 3}
                />
                <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-black/60 dark:bg-black/70 text-white text-center">
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* Call to Action */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-yellow-200 dark:text-gray-300 mb-6">
            Come taste the authentic flavors of the Himalayas
          </p>
          <a 
            href="#menu"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-linear-to-r from-orange-600 to-red-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span>View Full Menu</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        {/* Modal for full image view */}
        {modalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80" onClick={closeModal}>
            <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 focus:outline-none"
                onClick={closeModal}
                aria-label="Close full image view"
              >
                &times;
              </button>
              <Image src={modalImg} alt={modalTitle} width={900} height={650} className="rounded-xl shadow-2xl w-full h-auto max-h-[80vh] object-contain" />
              <h3 className="mt-6 text-lg text-white font-bold text-center drop-shadow-lg">{modalTitle}</h3>
              <p className="mt-2 text-base text-white text-center drop-shadow-lg max-w-2xl">{modalDesc}</p>
            </div>
          </div>
        )}

        {/* Food Modal */}
        {foodModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80" onClick={closeFoodModal}>
            <div className="relative max-w-2xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 focus:outline-none"
                onClick={closeFoodModal}
                aria-label="Close full image view"
              >
                &times;
              </button>
              <Image src={foodGalleryItems[foodModalIndex].image} alt={foodGalleryItems[foodModalIndex].title} width={900} height={650} className="rounded-xl shadow-2xl w-full h-auto max-h-[80vh] object-contain" />
              {/* Title and Description overlay on image with blurred background */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl px-6 py-4 bg-black/40 dark:bg-black/60 backdrop-blur-md rounded-xl text-white text-center drop-shadow-lg flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">{foodGalleryItems[foodModalIndex].title}</h3>
                <p className="text-base sm:text-lg leading-snug">{foodGalleryItems[foodModalIndex].description}</p>
              </div>
              <div className="flex justify-between w-full mt-6 px-8">
                <button onClick={prevFoodModal} aria-label="Previous image" className="text-white text-2xl bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 shadow-lg rounded-full px-4 py-2 hover:scale-110 hover:shadow-2xl focus:outline-none flex items-center gap-2">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                  <span className="hidden sm:inline font-bold">Prev</span>
                </button>
                <button onClick={nextFoodModal} aria-label="Next image" className="text-white text-2xl bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 shadow-lg rounded-full px-4 py-2 hover:scale-110 hover:shadow-2xl focus:outline-none flex items-center gap-2">
                  <span className="hidden sm:inline font-bold">Next</span>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
