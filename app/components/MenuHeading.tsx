import React from 'react';



const MenuHeading: React.FC = () => (
  <div className="text-center mb-2 sm:mb-8 transition-all duration-1000 opacity-100 translate-y-0">
         <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-2 bg-linear-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-100 rounded-full text-white dark:text-white font-semibold text-sm uppercase tracking-wider mb-2">
         Signature Selections
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
    <h2 id="menu-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-4">
       Customer Favorites
    </h2>
    <p className="text-md sm:text-xs md:text-lg max-w-3xl mx-auto leading-relaxed text-white ">
      A curated selection of our most–loved Himalayan dishes—celebrated by guests and crafted with authentic flavors in every bite.
    </p>
  </div>
);

export default MenuHeading;
