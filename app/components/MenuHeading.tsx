import React from 'react';

interface MenuHeadingProps {
  allergenRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
}

const MenuHeading: React.FC<MenuHeadingProps> = ({ allergenRef, isVisible }) => (
  <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <span className="inline-block px-6 py-2 bg-linear-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-6">
      Our Delicious Menu
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
      Explore Our <span className="bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">Menu</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Discover the authentic flavors of the Himalayas with our carefully crafted dishes, 
      made from traditional recipes passed down through generations.
    </p>
    {/* Allergen Notice */}
    <div ref={allergenRef} className="mt-8 max-w-4xl mx-auto">
      <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-xl p-4 sm:p-5 shadow-md">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 dark:text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-bold text-amber-900 dark:text-amber-200 mb-1">
              Allergy Information
            </h3>
            <p className="text-sm sm:text-base text-amber-800 dark:text-amber-300 leading-relaxed">
              This facility uses nuts, wheat, dairy, and other common allergens. Please inform our staff of any food allergies so we can accommodate your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MenuHeading;
