'use client';

const MobileBottomBar = () => {
  return (
    <nav
      aria-label="Mobile navigation"
      role="navigation"
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-40 md:hidden mobile-bottom-shadow transition-colors duration-300"
    >
      <div className="grid grid-cols-4 gap-1 px-2 py-2">
        {/* Phone */}
        <a
          href="tel:(415) 526-3161"
          className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-green-50 dark:hover:bg-green-900/30 active:scale-95 group"
          aria-label="Call Himalayan Kitchen"
        >
          <div className="w-10 h-10 mb-1 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 shadow-lg shadow-green-500/50 dark:shadow-green-400/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-500/60 dark:group-hover:shadow-green-400/40 transition-all duration-200" aria-hidden="true">
            <svg className="w-5 h-5 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-xs font-bold text-green-700 dark:text-green-400 group-hover:text-green-800 dark:group-hover:text-green-300 transition-colors drop-shadow-sm">Call</span>
        </a>
        {/* AI Assistant */}
        <button
          onClick={() => {
            // Trigger AI Assistant open
            const event = new CustomEvent('openAIAssistant');
            window.dispatchEvent(event);
          }}
          className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-green-50 dark:hover:bg-green-900/30 active:scale-95 group"
          aria-label="Open AI Assistant"
        >
          <div className="w-10 h-10 mb-1 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 shadow-lg shadow-green-500/50 dark:shadow-green-400/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-500/60 dark:group-hover:shadow-green-400/40 transition-all duration-200 relative" aria-hidden="true">
            {/* Sparkle effect */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 dark:bg-green-400 rounded-full animate-pulse"></div>
            <svg className="w-5 h-5 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <span className="text-xs font-bold text-green-700 dark:text-green-400 group-hover:text-green-800 dark:group-hover:text-green-300 transition-colors drop-shadow-sm">AI Chat</span>
        </button>
        {/* Order Online - Featured */}
        <a
          href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/30 active:scale-95 group relative"
          aria-label="Order food online"
        >
          <div className="w-10 h-10 mb-1 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-400 to-red-600 dark:from-red-500 dark:to-red-700 shadow-lg shadow-red-500/50 dark:shadow-red-400/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-red-500/60 dark:group-hover:shadow-red-400/40 transition-all duration-200 relative" aria-hidden="true">
            {/* Pulsing ring animation - brighter */}
            <div className="absolute inset-0 rounded-xl bg-red-400 dark:bg-red-300 opacity-30 animate-ping"></div>
            <svg className="w-5 h-5 text-white drop-shadow-md relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <span className="text-xs font-bold text-red-700 dark:text-red-400 group-hover:text-red-800 dark:group-hover:text-red-300 transition-colors drop-shadow-sm">Order</span>
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/himalayankitchenmarin/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:bg-pink-50 dark:hover:bg-pink-900/30 active:scale-95 group"
          aria-label="Instagram"
        >
          <div className="w-10 h-10 mb-1 flex items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 dark:from-yellow-500 dark:via-pink-600 dark:to-purple-700 shadow-lg shadow-pink-500/50 dark:shadow-pink-400/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-pink-500/60 dark:group-hover:shadow-pink-400/40 transition-all duration-200" aria-hidden="true">
            <svg className="w-5 h-5 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/>
            </svg>
          </div>
          <span className="text-xs font-bold text-pink-700 dark:text-pink-400 group-hover:text-pink-800 dark:group-hover:text-pink-300 transition-colors drop-shadow-sm">Instagram</span>
        </a>
      </div>
      {/* Subtle indicator line at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-b-full" aria-hidden="true"></div>
    </nav>
  );
};

export default MobileBottomBar;
