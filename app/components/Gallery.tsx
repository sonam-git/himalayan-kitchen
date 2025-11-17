'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      image: "/images/food/momo.jpg",
      title: "Traditional Momos",
      description: "Handcrafted dumplings steamed to perfection, served with our special spicy sauce"
    },
    {
      image: "/images/food/tandoori.jpg",
      title: "Tandoori Specialties",
      description: "Succulent meats marinated in aromatic spices and cooked in our traditional clay oven"
    },
    {
      image: "/images/food/tika masala.jpg",
      title: "Tikka Masala",
      description: "Rich and creamy curry with tender pieces in our signature tomato-based sauce"
    },
    {
      image: "/images/food/chowmien.jpg",
      title: "Nepali Chowmein",
      description: "Stir-fried noodles tossed with fresh vegetables and your choice of protein"
    },
    {
      image: "/images/food/thaliset.jpg",
      title: "Thali Set",
      description: "A complete meal featuring dal, rice, curry, vegetables, and traditional accompaniments"
    },
    {
      image: "/images/food/food.jpg",
      title: "Himalayan Delights",
      description: "Authentic dishes from the mountains, prepared with love and traditional recipes"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-orange-50/20 to-gray-50 dark:from-gray-900 dark:via-gray-850 dark:to-gray-900 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20 border border-orange-200/50 dark:border-orange-700/50 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Visual Journey
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 dark:from-orange-400 dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A glimpse into the vibrant flavors and authentic Himalayan dishes 
            that await you at our restaurant.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Come taste the authentic flavors of the Himalayas
          </p>
          <a 
            href="#menu"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span>View Full Menu</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
