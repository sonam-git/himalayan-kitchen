import React from "react";

const MenuHeading: React.FC = () => (
  <div className="text-center mb-2 sm:mb-8 transition-all duration-1000 opacity-100 translate-y-0">
    <div className="flex items-center justify-center gap-4 mb-2">
      <div
        className="
    flex-1 h-px opacity-60
    bg-red-500
    dark:bg-gradient-to-r dark:from-yellow-400 dark:via-orange-400 dark:to-red-400
  "
      />

      <span className="inline-block px-6 py-2 mt-2 bg-gradient-to-r dark:text-gray-50 from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-400 rounded-full text-gray-800  font-semibold text-sm uppercase tracking-wider mb-2">
        Signature Selections
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
    </div>
    <h2
      className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-orange-700 dark:text-yellow-300 mb-6"
      id="menu-heading"
    >
      Customer Favorites
    </h2>
    <p className="text-md sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-900 dark:text-white">
      A curated selection of our most–loved Himalayan dishes—celebrated by
      guests and crafted with authentic flavors in every bite.
    </p>
  </div>
);

export default MenuHeading;
