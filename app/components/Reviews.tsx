"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      className="relative py-20 sm:py-24 lg:py-28  transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-0 -left-48 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/other/backdrop2.png"
          alt="Menu Background"
          fill
          priority
          className="object-cover w-full h-full rounded-2xl sm:rounded-3xl opacity-100 bg-fixed"
        />
          <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-2 mt-4 bg-linear-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Customer Reviews
          </span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-300 dark:text-white mb-6">
      What Our <span className="bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent">Guests Say</span>
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
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-100 dark:text-gray-300 text-base font-medium">
                Based on 200+ Google & Yelp reviews
              </p>
              <p className="text-gray-100 dark:text-gray-400 text-sm">
                ⭐ Rated Excellent
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 w-full">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`group relative flex flex-col justify-between h-[500px] w-full min-w-0 max-w-full
                dark:bg-linear-to-br dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-200/50 dark:hover:border-yellow-500/50 dark:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-yellow-500/10 dark:text-gray-200 dark:hover:text-white dark:border dark:backdrop-blur-sm
                bg-white border-gray-300 hover:border-yellow-600 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 text-gray-900 
                p-8 rounded-2xl border transition-all duration-500 transform hover:-translate-y-2
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                font-body
                sm:h-[500px] h-[600px]
                sm:p-8 p-4
                sm:text-base text-sm
                sm:rounded-2xl rounded-xl
                sm:mb-0 mb-4
                sm:max-w-full max-w-[98vw]
                `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Date, stars, and source icon row */}
              <div className="flex items-center gap-2 mb-6">
                {/* Date on the left */}
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium font-body mr-2 min-w-[60px] text-left">
                  {review.date || "Date"}
                </span>
                {/* Stars */}
                <div className="flex dark:text-yellow-400 text-yellow-600 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 fill-current drop-shadow-md"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                {/* Source Icon: use custom logo from /images/logo for review source */}
                {review.source === "yelp" ? (
                  <span className="inline-flex items-center px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full ml-2">
                    <Image
                      src="/images/logo/yelp.svg"
                      alt="Yelp Logo"
                      width={18}
                      height={18}
                      className="mr-1"
                      style={{ minWidth: 18, minHeight: 18 }}
                    />
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-white text-xs font-bold rounded-full ml-2">
                    <Image
                      src="/images/logo/google.svg"
                      alt="Google Logo"
                      width={18}
                      height={18}
                      className="mr-1"
                      style={{ minWidth: 18, minHeight: 18 }}
                    />
                  </span>
                )}
              </div>
              {/* Review Title above review text with animation, color, and quote icons */}
              {review.title && (
                <div className="relative flex items-center justify-center mb-2 w-full">
                  <div className="flex items-center whitespace-nowrap text-base sm:text-lg font-medium font-serif text-red-600 dark:text-yellow-200 tracking-tight px-4 border border-yellow-200 dark:border-yellow-400 rounded-md py-1 min-w-[300px] max-w-full relative overflow-hidden" style={{borderWidth: '1px', borderStyle: 'solid'}}>
                    {/* Left quote icon */}
                    {/* <svg className="shrink-0 w-6 h-6 text-yellow-200 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg> */}
                    <span className="block w-full overflow-hidden relative" style={{height: '1.5em'}}>
                      <span className="absolute right-0 animate-marquee" style={{whiteSpace: 'nowrap'}}>{review.title}</span>
                    </span>
                    {/* Right quote icon */}
                    {/* <svg className="shrink-0 w-6 h-6 text-yellow-200 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg> */}
                  </div>
                  <style jsx>{`
                    .animate-marquee {
                      animation: marquee 8s linear infinite;
                    }
                    @keyframes marquee {
                      0% { transform: translateX(100%); }
                      100% { transform: translateX(-100%); }
                    }
                  `}</style>
                </div>
              )}
              {/* Review Text (scrollable for long content) */}
              <div
                className={`leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-serif italic overflow-y-auto h-32 pr-2 sm:text-base text-sm sm:h-auto sm:mb-6 mb-6`}
                style={{ wordBreak: 'break-word' }}
              >
                <blockquote className="text-gray-900 dark:text-white font-serif italic">
                  &quot;{review.text}&quot;
                </blockquote>
              </div>
              {/* Author Info: name and address as two columns on large screens, two rows on small screens, no date */}
              <div className="pt-4 border-t dark:border-gray-700/50 border-gray-300 group-hover:border-yellow-500/30 transition-colors w-full">
                <div className="flex flex-col sm:flex-row sm:items-center w-full">
                  <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                    <div className="w-12 h-12 border-1 dark:from-red-600 dark:to-orange-600 bg-linear-to-br from-gray-200 to-gray-100 dark:bg-gray-100 rounded-full flex items-center justify-center dark:text-white text-red-700 font-bold text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform">
                      {review.author.charAt(0)}
                    </div>
                    <p className="font-semibold dark:text-white text-gray-900 text-lg font-body break-word">
                      {review.author}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="dark:text-gray-400 text-gray-500 text-sm font-body break-word">
                      {review.location}
                    </span>
                  </div>
                </div>
              </div>
              {/* Verified Badge */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center px-3 py-1 dark:bg-green-500/20 bg-green-100 border dark:border-green-500/50 border-green-400 rounded-full dark:text-green-400 text-green-700 text-xs font-semibold">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default Reviews;
