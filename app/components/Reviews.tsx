'use client';

import { useEffect, useRef, useState } from 'react';

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [googleReviews, setGoogleReviews] = useState<Array<any>>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(setGoogleReviews);
  }, []);

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Amazing food and friendly staff. A must-visit for anyone in the area. The authentic Himalayan flavors transport you straight to the mountains!",
      author: "Sarah M.",
      location: "San Rafael, CA"
    },
    {
      id: 2,
      rating: 5,
      text: "The momos are absolutely incredible! Best Tibetan food I've had outside of Nepal. The owners are so welcoming and passionate about their cuisine.",
      author: "Michael R.",
      location: "Mill Valley, CA"
    },
    {
      id: 3,
      rating: 5,
      text: "Exceptional service and delicious food. The thukpa was exactly what I needed on a cold day. Highly recommend this hidden gem!",
      author: "Jennifer L.",
      location: "Novato, CA"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-0 -left-48 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <span className="inline-block px-6 py-2 bg-linear-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Customer Reviews
          </span>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 dark:bg-linear-to-r dark:from-yellow-300 dark:via-orange-300 dark:to-red-300 dark:bg-clip-text dark:text-transparent`}>
  What Our Guests Say
</h2>
          
          {/* Rating Display */}
          <div className="flex justify-center items-center gap-8 mb-6 flex-wrap">
            <div className="text-7xl md:text-8xl font-bold text-red-600 dark:bg-linear-to-br dark:from-yellow-300 dark:to-yellow-500 dark:bg-clip-text dark:text-transparent drop-shadow-lg">
              4.8
            </div>
            <div className="flex flex-col items-start">
              <div className="flex text-yellow-400 text-3xl mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-7 h-7 fill-current drop-shadow-lg animate-pulse" 
                    style={{ animationDelay: `${i * 100}ms` }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base font-medium">Based on 150+ reviews</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">⭐ Rated Excellent</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 w-full">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`group relative 
                dark:bg-linear-to-br dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-200/50 dark:hover:border-yellow-500/50 dark:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-yellow-500/10 dark:text-gray-200 dark:hover:text-white dark:border dark:backdrop-blur-sm
                bg-white border-gray-300 hover:border-yellow-600 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 text-gray-900 
                p-8 rounded-2xl border transition-all duration-500 transform hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 dark:text-yellow-500/20 dark:group-hover:text-yellow-500/30 text-yellow-600/20 group-hover:text-yellow-600/30 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex dark:text-yellow-400 text-yellow-600 mb-6 gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current drop-shadow-md" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              
              {/* Review Text */}
              <blockquote className="text-gray-900 dark:text-white mb-6 leading-relaxed text-base group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                &quot;{review.text}&quot;
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center pt-4 border-t dark:border-gray-700/50 border-gray-300 group-hover:border-yellow-500/30 transition-colors">
                <div className="w-12 h-12 dark:bg-linear-to-br dark:from-red-600 dark:to-orange-600 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center dark:text-white text-red-700 font-bold text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold dark:text-white text-gray-900 text-lg">{review.author}</p>
                  <p className="dark:text-gray-400 text-gray-500 text-sm flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {review.location}
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center px-3 py-1 dark:bg-green-500/20 bg-green-100 border dark:border-green-500/50 border-green-400 rounded-full dark:text-green-400 text-green-700 text-xs font-semibold">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">Google Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {googleReviews && googleReviews.length > 0 ? (
              googleReviews.map((review: any, index: number) => (
                <div key={index} className="group relative bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-lg">
                  {/* Stars */}
                  <div className="flex text-yellow-600 dark:text-yellow-400 mb-6 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  {/* Review Text */}
                  <blockquote className="text-gray-900 dark:text-white mb-6 leading-relaxed text-base">
                    &quot;{review.text}&quot;
                  </blockquote>
                  {/* Author Info */}
                  <div className="flex items-center pt-4 border-t border-gray-300 dark:border-gray-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 dark:bg-linear-to-br dark:from-red-600 dark:to-orange-600 rounded-full flex items-center justify-center text-red-700 dark:text-white font-bold text-lg mr-4">
                      {review.author_name && review.author_name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-lg">{review.author_name}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{review.relative_time_description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400 col-span-3 text-center">No Google reviews found.</p>
            )}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-linear-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900 dark:bg-linear-to-r dark:from-yellow-300 dark:to-orange-300 dark:bg-clip-text dark:text-transparent">
              Experience the Authentic Taste of the Himalayas
            </h3>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of satisfied guests and discover why we&apos;re the top-rated Himalayan restaurant in the Bay Area
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:(415) 526-3161"
                className="group relative inline-flex items-center justify-center bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-500/40 min-w-[250px] overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: (415) 526-3161
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
              
              <a
                href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center border-2 border-yellow-500/70 hover:border-yellow-400 bg-gray-50   hover:bg-yellow-500 text-gray-900 hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/40 min-w-[250px]"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Order Online
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
