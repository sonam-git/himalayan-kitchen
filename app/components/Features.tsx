import Image from 'next/image';

const Features = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-gray-50 dark:bg-gray-400 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-8">
      {/* Image as Section Background with Blur Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/images/other/stone.webp" 
          alt="Features Background" 
          fill
          sizes="100vw"
          className="object-cover w-full h-full rounded-2xl sm:rounded-3xl opacity-80"
          priority
        />
          <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl"></div>
      </div>
      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center w-full ">
          
          {/* Fresh Ingredients */}
          <div className="flex flex-col items-center group ">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-200 dark:text-white mb-4">Fresh Ingredients</h3>
            <p className="text-gray-100 dark:text-gray-300 max-w-sm">Sourced locally from the finest shops to ensure quality and freshness in every dish we serve.</p>
          </div>

          {/* Supporting Community */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-3.582-8-8 0-2.21 1.79-4 4-4 1.306 0 2.417.835 2.83 2h1.34c.413-1.165 1.524-2 2.83-2 2.21 0 4 1.79 4 4 0 4.418-3.582 8-8 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V6a4 4 0 118 0v1" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-200 dark:text-white mb-4">Supporting Community</h3>
            <p className="text-gray-100 dark:text-gray-300 max-w-sm">Giving back to the community by providing food for local schools.</p>
          </div>

          {/* Fast Reservation */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-200 dark:text-white mb-4">Fast Reservation</h3>
            <p className="text-gray-100 dark:text-gray-300 max-w-sm">Save time and book a table quickly by calling us.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
