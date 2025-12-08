const MobileBottomBar = () => {
  return (
    <nav
      aria-label="Mobile navigation"
      role="navigation"
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50 md:hidden mobile-bottom-shadow transition-colors duration-300"
    >
      <div className="grid grid-cols-4 gap-1 px-2 py-2">
        {/* Phone */}
        <a
          href="tel:(415) 526-3161"
          className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group"
          aria-label="Call Himalayan Kitchen"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Call</span>
        </a>
        {/* Address */}
        <a
          href="https://www.google.com/maps/search/227%203rd%20St,%20San%20Rafael,%20CA%2094901"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group"
          aria-label="View map location"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Map</span>
        </a>
        {/* Order Online - Featured */}
        <a
          href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group relative"
          aria-label="Order food online"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900 group-hover:scale-110 transition-transform duration-200 relative" aria-hidden="true">
            {/* Pulsing ring animation */}
            <div className="absolute inset-0 rounded-lg bg-red-500 opacity-20 animate-ping"></div>
            <svg className="w-4 h-4 text-red-600 dark:text-red-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Order</span>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/himalayankitchenmarin/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group"
          aria-label="Instagram"
        >
          <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 dark:from-yellow-700 dark:via-pink-800 dark:to-purple-900 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">Instagram</span>
        </a>
      </div>
      {/* Subtle indicator line at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-b-full" aria-hidden="true"></div>
    </nav>
  );
};

export default MobileBottomBar;
