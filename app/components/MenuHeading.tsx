import React from 'react';



const MenuHeading: React.FC = () => (
  <div className="text-center mb-4 sm:mb-16 transition-all duration-1000 opacity-100 translate-y-0">
    <span className="inline-block px-6 py-2 bg-linear-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-6">
      Our Delicious Menu
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-6">
      Explore Our <span className="bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">Menu</span>
    </h2>
    <p className="text-md sm:text-xs md:text-lg max-w-3xl mx-auto leading-relaxed text-yellow-100 dark:text-yellow-500 dark:font-semibold">
      Discover the authentic flavors of the Himalayas with our carefully crafted dishes, 
      made from traditional recipes passed down through generations.
    </p>
  </div>
);

export default MenuHeading;
