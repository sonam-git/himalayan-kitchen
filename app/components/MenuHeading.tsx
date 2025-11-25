import React from 'react';



const MenuHeading: React.FC = () => (
  <div className="text-center mb-4 sm:mb-16 transition-all duration-1000 opacity-100 translate-y-0">
         <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-4 bg-linear-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-100 rounded-full text-white dark:text-white font-semibold text-sm uppercase tracking-wider mb-6">
           Our Delicious Menu
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
    <h2 id="menu-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-6">
      Explore Our <span className="bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">Menu</span>
    </h2>
    <p className="text-md sm:text-xs md:text-lg max-w-3xl mx-auto leading-relaxed text-white dark:text-gray-100 ">
      Discover the authentic flavors of the Himalayas with our carefully crafted dishes, 
      made from traditional recipes passed down through generations.
    </p>
  </div>
);

export default MenuHeading;
