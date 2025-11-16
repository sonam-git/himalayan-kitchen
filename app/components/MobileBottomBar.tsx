const MobileBottomBar = () => {
  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 z-50 md:hidden mobile-bottom-shadow">
        <div className="grid grid-cols-4 gap-1 px-2 py-2">
          
          {/* Phone */}
          <a
            href="tel:(415) 526-3161"
            className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group"
          >
            <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900 group-hover:scale-110 transition-transform duration-200">
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
          >
            <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:scale-110 transition-transform duration-200">
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
          >
            <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900 group-hover:scale-110 transition-transform duration-200 relative">
              {/* Pulsing ring animation */}
              <div className="absolute inset-0 rounded-lg bg-red-500 opacity-20 animate-ping"></div>
              <svg className="w-4 h-4 text-red-600 dark:text-red-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Order</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/himalayankitchenmarin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 group"
          >
            <div className="w-8 h-8 mb-1 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 group-hover:scale-110 transition-transform duration-200">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Follow</span>
          </a>

        </div>

        {/* Subtle indicator line at top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-b-full"></div>
      </div>
    </>
  );
};

export default MobileBottomBar;
