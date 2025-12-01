import React, { useRef, useEffect } from 'react';

interface MenuNavBarProps {
  menuCategories: Array<{ name: string; icon: string }>;
  activeCategory: number;
  onCategoryClick: (index: number) => void;
  onExitMenu: () => void;
  isVisible: boolean;
}

const MenuNavBar: React.FC<MenuNavBarProps> = ({
  menuCategories,
  activeCategory,
  onCategoryClick,
  onExitMenu,
  isVisible,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const navRect = navRef.current.getBoundingClientRect();
      const headerHeight = 96;
      setIsSticky(navRect.top <= headerHeight && navRect.bottom > headerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stickyNavClass = isSticky
    ? 'fixed top-20 md:top-24 left-0 right-0 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg opacity-100 translate-y-0 pointer-events-auto transition-all duration-300 mb-10 sm:mb-12'
    : 'relative transition-all duration-300 mb-10 sm:mb-12';

  return (
    <div ref={navRef} className={stickyNavClass} aria-label="Menu categories navigation" role="tablist">
      <div className="py-4">
        {/* Scroll instruction text */}
        <div className="text-center mb-3 px-4">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Slide to browse categories</span>
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
        {/* Horizontal scrollable container with gradient indicators */}
        <div className="relative">
          {/* Left gradient indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white dark:from-gray-800 to-transparent z-10 pointer-events-none opacity-50"></div>
          {/* Right gradient indicator */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white dark:from-gray-800 to-transparent z-10 pointer-events-none opacity-50"></div>
          <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 w-full">
            <div className={`flex gap-2 sm:gap-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {menuCategories.map((category, index) => (
                <button
                  key={category.name}
                  role="tab"
                  aria-selected={activeCategory === index}
                  tabIndex={activeCategory === index ? 0 : -1}
                  onClick={() => onCategoryClick(index)}
                  onKeyDown={e => {
                    if (e.key === 'ArrowRight') onCategoryClick((index + 1) % menuCategories.length);
                    if (e.key === 'ArrowLeft') onCategoryClick((index - 1 + menuCategories.length) % menuCategories.length);
                    if (e.key === 'Enter' || e.key === ' ') onCategoryClick(index);
                  }}
                  className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    activeCategory === index
                      ? 'bg-linear-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/30 scale-105 font-bold underline'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-500 hover:shadow-md'
                  }`}
                  aria-label={`Show ${category.name} menu`}
                >
                  <span className="text-base sm:text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
              {/* Exit Button */}
              <button
                onClick={onExitMenu}
                className="shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600 border border-gray-700 dark:border-gray-600 hover:shadow-md whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Exit Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavBar;
