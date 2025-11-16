import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 w-full max-w-full rounded-lg sm:rounded-xl md:rounded-2xl">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 w-full rounded-lg sm:rounded-xl md:rounded-2xl">
        <Image
          src="/images/hero.jpg"
          alt="Himalayan Kitchen Restaurant"
          fill
          className="object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
          priority
        />
        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 rounded-lg sm:rounded-xl md:rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-tight hero-title">
            <span className="block bg-gradient-to-r from-orange-300 via-yellow-300 to-red-300 bg-clip-text text-transparent drop-shadow-2xl">
              TASTES FROM THE
            </span>
            <span className="block text-white drop-shadow-2xl">
              HIMALAYAS
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="mt-6 max-w-3xl mx-auto hero-subtitle">
            <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-100 leading-relaxed backdrop-blur-sm bg-black/20 rounded-2xl px-8 py-4 border border-white/10">
              SERVING AND SHARING THE HIMALAYAN CUISINES & CULTURES 
              <span className="block text-orange-300 font-medium mt-2">in the heart of San Rafael</span>
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons - Positioned at bottom where scroll indicator was */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center hero-buttons">
          {/* Primary CTA - Explore Menu */}
          <a
            href="#menu"
            className="hero-button-glow group relative overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-orange-600 hover:from-red-600 hover:via-orange-600 hover:to-yellow-500 text-white font-bold py-4 px-10 sm:px-14 rounded-2xl transition-all duration-500 text-base sm:text-xl shadow-2xl hover:shadow-red-500/40 transform hover:scale-105 min-h-[60px] sm:min-h-[65px] focus:outline-none focus:ring-4 focus:ring-red-500/50 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 50%, #f59e0b 100%)',
              boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
            aria-label="Explore our restaurant menu"
            role="button"
          >
            <span className="flex flex-col sm:flex-row items-center justify-center relative z-10 gap-2 sm:gap-3">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                <span className="tracking-wide text-sm sm:text-base font-bold">EXPLORE</span>
                <span className="tracking-wide text-sm sm:text-base font-bold">MENU</span>
              </div>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300 hidden sm:block shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-700"></div>
            </div>
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"></div>
          </a>
          
          {/* Secondary CTA - Order Now */}
          <a
            href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/60 hover:border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-10 sm:px-14 rounded-2xl transition-all duration-500 text-base sm:text-xl shadow-2xl hover:shadow-white/40 transform hover:scale-105 min-h-[60px] sm:min-h-[65px] focus:outline-none focus:ring-4 focus:ring-white/50 flex items-center justify-center"
            aria-label="Order food online for delivery or pickup"
            role="button"
          >
            <span className="flex flex-col sm:flex-row items-center justify-center relative z-10 gap-2 sm:gap-3">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                <span className="tracking-wide text-sm sm:text-base font-bold">ORDER</span>
                <span className="tracking-wide text-sm sm:text-base font-bold">NOW</span>
              </div>
              <div className="relative shrink-0">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </span>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
            
            {/* Success indicator */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center float-animation">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
            </div>
            
            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
