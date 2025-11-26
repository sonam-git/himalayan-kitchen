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
      {/* <div className="absolute inset-0 w-full h-full z-0"> */}
        {/* <Image
          src="/images/other/stone.webp"
          alt="Menu Background"
          fill
          priority
          className="object-cover w-full h-full rounded-2xl sm:rounded-3xl opacity-100 bg-fixed"
        /> */}
          {/* <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl"></div> */}
      {/* </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
              <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
          <span className="inline-block px-6 py-2 mt-4 bg-linear-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-200 dark:border-yellow-100 rounded-full text-white dark:text-white font-semibold text-sm uppercase tracking-wider mb-6">
           Customer Reviews
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
        </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-3">
      What Our <span className="bg-linear-to-r from-white via-yellow-500 to-white bg-clip-text text-transparent">Guests Say</span>
    </h2>

          {/* Rating Display */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 mb-3 flex-nowrap sm:flex-wrap">
          <div className="text-5xl sm:text-7xl md:text-8xl font-bold text-yellow-600 dark:bg-linear-to-br dark:from-yellow-300 dark:to-yellow-500 dark:bg-clip-text dark:text-transparent drop-shadow-lg">
            4.8
          </div>
          <div className="flex flex-col items-start min-w-[140px] sm:min-w-0">
            <div className="flex text-yellow-400 text-2xl sm:text-3xl mb-1">
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
            <p className="text-gray-100 dark:text-gray-300 text-xs sm:text-base font-medium">
              Based on 200+ Google & Yelp Reviews
            </p>
            <p className="text-gray-100 dark:text-gray-400 text-xs sm:text-sm">
              ⭐ Rated Excellent
            </p>
          </div>
        </div>
        </div>

        {/* Reviews: horizontal scroll on all screens, show 3 at a time on large screens */}
        <div
          ref={reviewsScrollRef}
          className="flex gap-8 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent snap-x snap-mandatory min-w-0"
          role="list"
          aria-label="Customer reviews"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className={`group relative flex flex-col justify-between
                h-[500px] sm:h-[500px] w-full
                dark:bg-linear-to-br dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-200/50 dark:hover:border-yellow-500/50 dark:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-yellow-500/10 dark:text-gray-200 dark:hover:text-white dark:border dark:backdrop-blur-sm
                bg-white border-gray-300 hover:border-yellow-600 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 text-gray-900 
                p-8 rounded-2xl border transition-all duration-500 transform hover:-translate-y-2
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
                <time dateTime={review.date} className="text-xs text-gray-400 dark:text-gray-500 font-semibold">
                  {review.date}
                </time>
                <span className="sr-only" id={`review-rating-${review.id}`}>{review.rating} out of 5 stars</span>
                <div className="flex text-yellow-400 text-lg" aria-hidden="true" title={`${review.rating} star rating`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                {/* Source icon with aria-label */}
                <span className="ml-auto flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 font-semibold" aria-label={`Source: ${review.source}`} title={`Source: ${review.source}`}>
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
              <blockquote className="mb-4 flex-1">
                <div
                  className="font-bold text-lg md:text-xl mb-2 text-gray-900 dark:text-white transition-all duration-700 ease-in-out group-hover:text-orange-500 animate-fade-in"
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  id={`review-title-${review.id}`}
                >
                  {review.title}
                </div>
                <div className="relative">
                  <div className="h-52 sm:h-42 md:h-40 lg:h-44 xl:h-52 2xl:h-60 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-transparent text-gray-700 dark:text-gray-200 text-sm md:text-base leading-relaxed">
                    {review.text}
                  </div>
                  {/* Gradient fade for overflow */}
                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-white/90 dark:from-gray-900/90 to-transparent rounded-b-2xl" />
                </div>
              </blockquote>
              <footer className="mt-auto pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3">
                {/* Author initial circle */}
                <span className="flex items-center justify-center w-9 h-9 border-2 border-white rounded-full bg-linear-to-br from-orange-400 via-red-400 to-yellow-400 dark:bg-linear-to-br dark:from-orange-400 dark:via-red-400 dark:to-yellow-400 text-white font-bold text-lg shadow-md">
                  {review.author.trim().charAt(0)}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">{review.author}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{review.location}</span>
              </footer>
            </article>
          ))}
        </div>
        {/* Slide controls below reviews for all screens */}
        <div className="flex justify-between items-center mt-1 px-2">
          <button
            className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40"
            onClick={() => scrollReviews('left')}
            aria-label="Scroll left"
          >
            <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <span className="text-xs text-gray-100 dark:text-gray-100 font-semibold tracking-wide">Slide for more</span>
          <button
            className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:bg-orange-100 dark:hover:bg-orange-900 transition disabled:opacity-40"
            onClick={() => scrollReviews('right')}
            aria-label="Scroll right"
          >
            <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
             <div className="w-full flex justify-center items-center">
              <div className="h-1 w-2/3 sm:w-1/2 bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-md my-2 sm:my-4 opacity-80" />
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
