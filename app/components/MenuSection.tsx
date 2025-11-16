'use client';

import React, { useEffect, useRef, useState } from 'react';

const MenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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

  const menuCategories = [
    {
      name: "Appetizers",
      icon: "🥟",
      items: [
        {
          name: "Himalayan Momo",
          description: "Traditional steamed dumplings with your choice of chicken or vegetable filling",
          price: "$12.99",
          spicy: false,
        },
        {
          name: "Chicken Choila",
          description: "Grilled chicken marinated in Himalayan spices with onions and peppers",
          price: "$14.99",
          spicy: true,
        },
        {
          name: "Samosa",
          description: "Crispy pastries filled with spiced potatoes and green peas",
          price: "$8.99",
          spicy: false,
        },
      ]
    },
    {
      name: "Main Courses",
      icon: "🍛",
      items: [
        {
          name: "Dal Bhat",
          description: "Traditional Nepali meal with lentil soup, rice, vegetables, and pickle",
          price: "$16.99",
          spicy: false,
        },
        {
          name: "Chicken Curry",
          description: "Tender chicken cooked in aromatic spices and rich curry sauce",
          price: "$18.99",
          spicy: true,
        },
        {
          name: "Yak & Yeti Special",
          description: "Mixed grill with chicken tikka, lamb kebab, and vegetables",
          price: "$24.99",
          spicy: false,
        },
      ]
    },
    {
      name: "Beverages",
      icon: "🍵",
      items: [
        {
          name: "Himalayan Tea",
          description: "Traditional spiced tea blend from the mountains",
          price: "$4.99",
          spicy: false,
        },
        {
          name: "Lassi",
          description: "Refreshing yogurt drink available in sweet or mango flavor",
          price: "$5.99",
          spicy: false,
        },
        {
          name: "Tibetan Butter Tea",
          description: "Traditional salty butter tea",
          price: "$6.99",
          spicy: false,
        },
      ]
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="menu" 
      className="relative py-20 bg-gradient-to-br from-gray-50 via-orange-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden w-full max-w-full rounded-lg sm:rounded-xl md:rounded-2xl my-2 sm:my-3 md:my-4"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-lg sm:rounded-xl md:rounded-2xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Our Delicious Menu
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
            Explore Our <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">Menu</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the authentic flavors of the Himalayas with our carefully crafted dishes, 
            made from traditional recipes passed down through generations.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className={`flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap px-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {menuCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-xl shadow-red-500/30 scale-105 sm:scale-110'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg'
              }`}
            >
              <span className="text-xl sm:text-2xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`transition-all duration-700 ${
                activeCategory === categoryIndex || activeCategory === null 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 absolute pointer-events-none'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-shadow duration-500">
                {/* Category Header */}
                <div className="flex items-center justify-center mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-4xl">{category.icon}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 hover:from-red-50 hover:to-orange-50 dark:hover:from-red-950/30 dark:hover:to-orange-950/30 p-6 rounded-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transform hover:-translate-y-2 overflow-hidden"
                    >
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>

                      {/* Item Header */}
                      <div className="relative flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors flex-1 pr-2">
                          {item.name}
                        </h4>
                        <div className="flex flex-col items-end gap-1">
                          {item.spicy && (
                            <span className="text-red-500 text-xl animate-pulse" title="Spicy">🌶️</span>
                          )}
                          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                        {item.description}
                      </p>

                      {/* Order Button */}
                      <button className="relative w-full py-3 px-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-xl transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 shadow-lg hover:shadow-xl overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          Add to Order
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-700 dark:via-orange-700 dark:to-red-700 rounded-3xl p-10 md:p-16 text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Order Now
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 drop-shadow-lg">
                Ready to Order?
              </h3>
              
              <p className="text-lg md:text-xl mb-10 text-red-100 max-w-2xl mx-auto leading-relaxed">
                Experience the taste of the Himalayas delivered straight to your door. Fresh, authentic, and absolutely delicious!
              </p>
              
              <a
                href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-red-600 font-bold text-lg rounded-2xl hover:bg-gray-100 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Order Online Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <p className="mt-6 text-sm text-red-100">
                🚀 Free delivery on orders over $30  •  ⏱️ Ready in 20-30 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
