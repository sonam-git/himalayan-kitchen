import Image from 'next/image';

const SocialMedia = () => {
  return (
    <section aria-labelledby="social-heading" className="relative py-20 sm:py-24 lg:py-28 bg-gray-50 dark:bg-gray-400 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-8" tabIndex={-1}>
      {/* Image as Section Background with Blur Overlay */}
      <div className="absolute inset-0 w-full h-full z-0" aria-hidden="true">
        <Image 
          src="/images/other/stone.webp" 
          alt="Social Media Background" 
          fill
          sizes="100vw"
          className="object-cover w-full h-full rounded-2xl sm:rounded-3xl opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/90 dark:via-gray-900/80 dark:to-black/90 rounded-2xl sm:rounded-3xl z-0"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4" aria-hidden="true">
            <svg className="w-12 h-12 text-blue-600 dark:text-blue-400 mr-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
            </svg>
            <svg className="w-12 h-12 text-pink-500 dark:text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.396 3.635 1.363 2.668 2.33 2.403 3.503 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.324 2.45 1.291 3.417.967.967 2.14 1.232 3.417 1.291C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.059 2.45-.324 3.417-1.291.967-.967 1.232-2.14 1.291-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.324-2.45-1.291-3.417-.967-.967-2.14-1.232-3.417-1.291C15.668.013 15.259 0 12 0z" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </div>
          <h2 id="social-heading" className="text-4xl md:text-5xl font-bold text-transparent bg-linear-to-r from-blue-600 via-pink-500 to-orange-500 bg-clip-text mb-4" tabIndex={0}>Follow Us On Social Media</h2>
          <p className="text-lg text-gray-100 dark:text-gray-50 max-w-2xl mx-auto mb-8">Stay connected and see our latest updates, events, and delicious food photos from Facebook and Instagram.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list" aria-label="Social media feeds">
          {/* Facebook Feed Embed */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-200 dark:border-blue-700" role="listitem">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center justify-center" tabIndex={0}>
              <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg>
              Facebook
            </h3>
            {/* Mobile: horizontal scroll with gray scrollbar */}
            <div className="w-full h-[500px] rounded-xl overflow-x-auto whitespace-nowrap sm:hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhimalayankitchenmarin&tabs=timeline&width=600&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="600"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Feed"
                aria-label="Himalayan Kitchen Facebook Feed"
              ></iframe>
              <noscript>
                <div className="text-center text-gray-500 text-sm mt-4">Facebook feed requires JavaScript enabled.</div>
              </noscript>
            </div>
            {/* Desktop: normal display */}
            <div className="w-full h-[500px] rounded-xl overflow-hidden sm:block hidden">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhimalayankitchenmarin&tabs=timeline&width=600&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Feed"
                aria-label="Himalayan Kitchen Facebook Feed"
              ></iframe>
              <noscript>
                <div className="text-center text-gray-500 text-sm mt-4">Facebook feed requires JavaScript enabled.</div>
              </noscript>
            </div>
          </div>
          {/* Instagram Feed Embed */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-pink-200 dark:border-pink-700" role="listitem">
            <h3 className="text-2xl font-bold text-pink-500 dark:text-pink-400 mb-4 flex items-center justify-center" tabIndex={0}>
              <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.396 3.635 1.363 2.668 2.33 2.403 3.503 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.324 2.45 1.291 3.417.967.967 2.14 1.232 3.417 1.291C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.059 2.45-.324 3.417-1.291.967-.967 1.232-2.14 1.291-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.324-2.45-1.291-3.417-.967-.967-2.14-1.232-3.417-1.291C15.668.013 15.259 0 12 0z" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
              Instagram
            </h3>
            <div className="w-full h-[500px] rounded-xl overflow-hidden flex items-center justify-center">
              {/* Accessible label and fallback for Instagram */}
              <iframe 
                src="https://www.instagram.com/himalayankitchenmarin/embed"
                width="100%"
                height="500"
                style={{ border: 'none', overflow: 'auto' }}
                scrolling="yes"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Instagram Feed"
                aria-label="Himalayan Kitchen Instagram Feed"
              ></iframe>
              <noscript>
                <div className="text-center text-gray-500 text-sm mt-4">Instagram feed requires JavaScript enabled.</div>
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;