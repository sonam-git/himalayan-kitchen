"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  // Add ref for horizontal scroll
  const reviewsScrollRef = useRef<HTMLDivElement>(null);

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

  // Helper to scroll reviews
  const scrollReviews = (dir: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const scrollAmount = reviewsScrollRef.current.offsetWidth * 0.8;
      reviewsScrollRef.current.scrollBy({ left: dir === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "A wonderful dining and catering experience.",
      text: "We've eaten at Himalayan Kitchen twice and have had two events catered by them. The food is delicious, fresh, and we love Nepali food as it's lighter and has more of a 'homemade' flavor than heavier Indian food. The atmosphere at the restaurant is warm and the service top notch. The owner Wangchhe is so personable and kind. We can't wait to be back!",
      author: "Cathy Ann T.",
      location: "Sausalito, CA",
      source: "yelp",
      date: "2023-09-15",
    },
    {
      id: 2,
      rating: 5,
      title: "A delightful lunch experience.",
      text: "My mom and I went there for lunch. We sat outside under the awning. A very sweet young woman waited on us. We got the dumplings. I ordered 4 pork and 4 veggie. They came with a peanut sauce. Delicious. I loved the veggie. We split the lunch special. Basmati rice with a lamb Tikka Masala,a side salad and a veggie yellow dhal soup. Such a treasure. I don't normally order veggie items, but the dhal soup was a delicate surprise. Delicious. The lamb Tikka was lovely. Everything tasted fresh and made with high quality ingredients. We had a Thai iced tea and a chai tea - both perfect. This is a wonderful addition to Montecitto shopping center and a great place for lunch. Really tasty.",
      author: "Jessica B.",
      location: "San Rafael, CA",
      source: "yelp",
      date: "2025-06-26",
    },
    {
      id: 3,
      rating: 5,
      title: "A cozy and inviting atmosphere.",
      text: "I feel very comfortable when I walk into this place. I like that they have some distance between the tables and it's not too terribly noisy. The staff is friendly and attentive.After ordering, each diner is given a cup of daal soup. The flavor is so good. We ordered the Kukhura Pharsi (Chicken & Pumpkin). The description says butternut squash, but it seems to be pumpkin. We also ordered the Lamb Saag and Garlic Cheese Naan. Everything was hot (temp) and nicely spiced. We ordered very mild and it was just that. If you like naan, try the garlic cheese naan. It's my favorite flavor of naan.I will be back.",
      author: "Mark K.",
      location: "Novato, CA",
      source: "yelp",
      date: "2025-08-08",
    },
    {
      id: 4,
      rating: 5,
      title: "A San Rafael hidden gem.",
      text: "Yummmm! Thank you for having delicious vegan food. The flavors are fantastic, and we've loved everything we've tried - from momos to noodles. The vegetables are always cooked perfectly. This place is a true hidden gem in the Montecito Center",
      author: "Jamie G",
      location: "San Rafael, CA",
      source: "google",
      date: "2025-05-01",
    },
    {
      id: 5,
      rating: 5,
      title:"Amazing food, service, and atmosphere.",
      text: "Himalayan Kitchen is so good! The food, service, and portions are great. Even though you wouldn't expect much from the outside, the inside is cute and has a warm, inviting atmosphere. Everything we ordered was delicious.",
      author: "Shawnee T.",
      location: "San Rafael, CA",
      source: "google",
      date: "2023-08-01",
    },
    {
      id: 6,
      rating: 5,
      title:"Incredible, authentic food!",
      text: "What a delight to discover this place. The chef and family who run it are actually Sherpas! The butter chicken curry had so many layers of flavor, the grilled meats and veggies were incredible, and the naan was prepared to perfection. The Himalayan hot ginger tea truly hit the spot.",
      author: "Lone S",
      location: "San Rafael, CA",
      source: "google",
      date: "2023-08-01",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative  transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-0 -left-48 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 font-headline">
        {/* Header Section */}
        <div
          className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
              <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-400/50 dark:border-yellow-300/50 rounded-full text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-6 font-headline">
           Customer Reviews
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-orange-600 dark:text-yellow-300 mb-6">
      Dining Stories
    </h2>
     <p className="text-md sm:text-xs md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-200 mb-4 font-[Georgia,'Times_New_Roman',Times,serif]">
     Real experiences from guests who&#39;ve shared a meal—and a moment—with us.
    </p>

          {/* Rating Display */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 mb-3 flex-nowrap sm:flex-wrap font-headline">
          <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-gray-900 bg-gradient-to-br from-orange-500 to-red-500 dark:from-yellow-300 dark:to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
            4.8
          </div>
          <div className="flex flex-col items-start min-w-[140px] sm:min-w-0">
            <div className="flex text-yellow-400 text-2xl sm:text-3xl mb-1 font-headline">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 sm:w-7 sm:h-7 fill-current drop-shadow-lg animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-base font-medium italic font-body font-[Georgia,'Times_New_Roman',Times,serif]">
              Based on 200+ Google & Yelp Reviews
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-body font-[Georgia,'Times_New_Roman',Times,serif]">
              ⭐ Rated Excellent
            </p>
          </div>
        </div>
        </div>

        {/* Decorated container for review grid */}
        <div className="relative z-20 w-full my-6 sm:my-10 rounded-3xl shadow-2xl border-4 border-yellow-600 dark:border-orange-400/60 bg-gray-200 dark:bg-black/60 backdrop-blur-xl px-0.5 sm:px-3 md:px-6 lg:px-8 py-1.5 sm:py-3 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-yellow-200/10 before:via-orange-200/10 before:to-red-200/10 before:blur-2xl before:z-0 overflow-hidden">
          <div className="relative z-10">
            {/* Reviews: horizontal scroll on all screens, show 3 at a time on large screens */}
            <div
              ref={reviewsScrollRef}
              className="flex gap-4 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent snap-x snap-mandatory min-w-0 font-body"
              role="region"
              aria-live="polite"
              aria-label="Customer reviews carousel"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {reviews.map((review, index) => {
                // Remove unused expanded/see more logic
                return (
                  <article
                    key={review.id}
                    className={`group relative flex flex-col justify-between
                      h-[370px] sm:h-[400px] w-full
                      bg-white dark:bg-gray-800
                      border border-gray-300 dark:border-gray-700
                      hover:border-orange-400 dark:hover:border-yellow-500/50
                      shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-yellow-500/10
                      text-gray-900 dark:text-gray-200
                      hover:text-gray-900 dark:hover:text-white
                      backdrop-blur-sm
                      rounded-2xl transition-all duration-500 transform hover:-translate-y-2
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                      font-body
                      sm:p-8 p-4
                      sm:text-base text-sm
                      sm:rounded-2xl rounded-xl
                      sm:mb-0 mb-4
                      min-w-[85vw] max-w-xs snap-center md:min-w-[45vw] md:max-w-md lg:min-w-[32vw] lg:max-w-lg xl:min-w-[28vw] xl:max-w-xl
                      `}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    aria-label={`Review by ${review.author} from ${review.location}`}
                  >
                    {/* Date, stars, and source icon row */}
                    <div className="flex items-center gap-2 mb-6">
                    <time dateTime={review.date} className="text-xs text-gray-400 dark:text-gray-500 font-semibold font-body">
                      {review.date}
                    </time>
                    <span className="sr-only" id={`review-rating-${review.id}`}>{review.rating} out of 5 stars</span>
                    <div className="flex text-yellow-400 text-lg font-headline" aria-hidden="true" title={`${review.rating} star rating`}>
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    {/* Source icon with aria-label */}
                    <span className="ml-auto flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 font-semibold font-body" aria-label={`Source: ${review.source}`} title={`Source: ${review.source}`}>
                      {review.source === 'yelp' && (
                        <Image src="/images/logo/yelp.svg" alt="Yelp logo" width={20} height={20} className="inline-block w-5 h-5" />
                      )}
                      {review.source === 'google' && (
                        <Image src="/images/logo/google.svg" alt="Google logo" width={20} height={20} className="inline-block w-5 h-5" />
                      )}
                      {review.source.charAt(0).toUpperCase() + review.source.slice(1)}
                    </span>
                  </div>
                  {/* Review content with scroll for long text on desktop */}
                  <blockquote className="flex-1 font-body">
                    <div
                      className="font-bold text-md md:text-md mb-2 text-gray-900 dark:text-white transition-all duration-700 ease-in-out group-hover:text-orange-500 animate-fade-in font-headline"
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}
                      id={`review-title-${review.id}`}
                    >
                      {review.title}
                    </div>
                    <div className="relative flex-1 flex flex-col min-h-0">
                      <div className="flex-1 min-h-[100px] max-h-32 sm:max-h-36 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed italic font-poppins">
                          {review.text}
                        </div>
                      </div>
                    </blockquote>
                    <footer className="mt-auto pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3 font-body">
                    {/* Author initial circle */}
                    <span className="flex items-center justify-center w-9 h-9 border-2 border-orange-200 dark:border-orange-600 rounded-full bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400 dark:bg-gradient-to-br dark:from-orange-500 dark:via-red-500 dark:to-yellow-500 text-white font-bold text-md shadow-md">
                      {review.author.trim().charAt(0)}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white font-headline">{review.author}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-body">{review.location}</span>
                  </footer>
                </article>
                );
              })}
            </div>
            {/* Slide controls below reviews for all screens */}
            <div className="flex justify-between items-center mt-1 px-2">
              <button
                className="rounded-full p-2 bg-white/90 dark:bg-gray-800/90 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-300 dark:border-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 font-[Georgia,'Times_New_Roman',Times,serif]"
                onClick={() => scrollReviews('left')}
                aria-label="Scroll reviews left"
                type="button"
              >
                {/* Modern left arrow icon */}
                <svg className="w-8 h-8 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <path d="M14.5 8l-4 4 4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              <span className="text-xs text-gray-700 dark:text-gray-300 font-semibold tracking-wide">Slide for more</span>
              <button
                className="rounded-full p-2 bg-white/90 dark:bg-gray-800/90 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40 border border-orange-300 dark:border-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 font-[Georgia,'Times_New_Roman',Times,serif]"
                onClick={() => scrollReviews('right')}
                aria-label="Scroll reviews right"
                type="button"
              >
                {/* Modern right arrow icon */}
                <svg className="w-8 h-8 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <path d="M9.5 8l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
            </div>
            {/* Decorative bottom bar */}
            <div className="w-full flex justify-center items-center">
              <div className="h-1 w-2/3 sm:w-1/2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-md my-2 sm:my-4 opacity-80" />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div
          className={`text-center mt-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default Reviews;
