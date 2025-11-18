"use client";

import { useEffect, useRef, useState } from "react";

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
      text: "We've eaten at Himalayan Kitchen twice and have had two events catered by them. The food is delicious, fresh, and we love Nepali food as it's lighter and has more of a 'homemade' flavor than heavier Indian food. The atmosphere at the restaurant is warm and the service top notch. The owner Wangchhe is so personable and kind. We can't wait to be back!",
      author: "Cathy Ann T.",
      location: "Sausalito, CA",
      source: "yelp",
      date: "2023-09-15",
    },
    {
      id: 2,
      rating: 5,
      text: "My mom and I went there for lunch. We sat outside under the awning. A very sweet young woman waited on us. We got the dumplings. I ordered 4 pork and 4 veggie. They came with a peanut sauce. Delicious. I loved the veggie. We split the lunch special. Basmati rice with a lamb Tikka Masala,a side salad and a veggie yellow dhal soup. Such a treasure. I don't normally order veggie items, but the dhal soup was a delicate surprise. Delicious. The lamb Tikka was lovely. Everything tasted fresh and made with high quality ingredients. We had a Thai iced tea and a chai tea - both perfect. This is a wonderful addition to Montecitto shopping center and a great place for lunch. Really tasty.",
      author: "Jessica B.",
      location: "San Rafael, CA",
      source: "yelp",
      date: "2025-06-26",
    },
        {
      id: 3,
      rating: 5,
      text: "I feel very comfortable when I walk into this place. I like that they have some distance between the tables and it's not too terribly noisy. The staff is friendly and attentive.After ordering, each diner is given a cup of daal soup. The flavor is so good. We ordered the Kukhura Pharsi (Chicken & Pumpkin). The description says butternut squash, but it seems to be pumpkin. We also ordered the Lamb Saag and Garlic Cheese Naan. Everything was hot (temp) and nicely spiced. We ordered very mild and it was just that. If you like naan, try the garlic cheese naan. It's my favorite flavor of naan.I will be back.",
      author: "Mark K.",
      location: "Novato, CA",
      source: "yelp",
      date: "2025-08-08",
    },
    {
      id: 4,
      rating: 5,
      text: "Yummmm! Thank you for having delicious vegan food! The flavors are fantastic, and we’ve loved everything we have tried, from momos to Misuali (sp.) to the noodles. The vegetables are cooked perfectly! This is a San Rafael secret, hiding in the corner of the Montecito mall.",
      author: "Jamie Ginsberg",
      location: "San Rafael, CA",
      source: "google",
      date: "2025-05-01",
    },
        {
      id: 5,
      rating: 5,
      text: "This place is a hidden gem. The people are so nice and attentive. The restaurant overall looks clean and organized. The many is simple and with variety of dishes. I order the Chicken Marsala and I was so surprised by the explosion of condiments hitting my taste buds in my mouth. It was I can taste every spice but was not so overwhelmed by any of them super well balanced and with a fresh essence to all. The mango chutney is my favorite and at this restaurant they know how to make it right. I’m definitely making it my place to go for Indian cuisine. Oh and the butter nut squash soup was simple yet so furling. Cooked fresh to order and served hot on the stop, I love it.",
      author: "Jamie Ginsberg",
      location: "San Rafael, CA",
      source: "google",
      date: "2023-08-01",
    },
        {
      id: 6,
      rating: 5,
      text: "Himalayan Kitchen is our favorite restaurant in Marin. The food and ingredients are always high quality, fresh, and well prepared. The staff are friendly and welcoming. All of our meals there have always been exceptional.This weekend we had Himalayan Kitchen cater our holiday party. They made the whole experience super easy and seamless from start to finish. We were able to order our favorite dishes, the staff guided us on quantity, and the food was delivered hot, fresh, and securely packaged. It was such a hit amongst our family and friends, everyone was raving about how delicious the food was! Truly the highlight of the party!We love Himalayan Kitchen! Don’t miss this excellent gem of a restaurant when you visit San Rafael.",
      author: "Greta Hayes",
      location: "San Rafael, CA",
      source: "google",
      date: "2023-08-01",
    },
  ];

  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-0 -left-48 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-2 bg-linear-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/20 dark:to-orange-400/20 border border-red-200/50 dark:border-red-700/50 rounded-full text-red-600 dark:text-red-400 font-semibold text-sm uppercase tracking-wider mb-6">
            Customer Reviews
          </span>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 dark:bg-linear-to-r dark:from-yellow-300 dark:via-orange-300 dark:to-red-300 dark:bg-clip-text dark:text-transparent`}
          >
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
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base font-medium">
                Based on 150+ reviews
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
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
              className={`group relative flex flex-col justify-between h-[420px] w-full min-w-0 max-w-full
                dark:bg-linear-to-br dark:from-gray-800/80 dark:to-gray-900/80 dark:border-gray-200/50 dark:hover:border-yellow-500/50 dark:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-yellow-500/10 dark:text-gray-200 dark:hover:text-white dark:border dark:backdrop-blur-sm
                bg-white border-gray-300 hover:border-yellow-600 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 text-gray-900 
                p-8 rounded-2xl border transition-all duration-500 transform hover:-translate-y-2
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 dark:text-yellow-500/20 dark:group-hover:text-yellow-500/30 text-yellow-600/20 group-hover:text-yellow-600/30 transition-colors">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              {/* Stars */}
              <div className="flex dark:text-yellow-400 text-yellow-600 mb-6 gap-1">
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
              {/* Review Text (expandable, scrollable) */}
              <div
                className={`mb-6 leading-relaxed text-base group-hover:text-gray-900 dark:group-hover:text-white transition-colors ${
                  expandedReview === review.id
                    ? "overflow-y-auto h-32 pr-2"
                    : ""
                }`}
              >
                <blockquote className="text-gray-900 dark:text-white">
                  &quot;
                  {expandedReview === review.id || review.text.length < 220
                    ? review.text
                    : `${review.text.slice(0, 220)}...`}{" "}
                  &quot;
                </blockquote>
                {review.text.length >= 220 && expandedReview !== review.id && (
                  <button
                    className="ml-2 text-xs text-blue-600 underline"
                    onClick={() => setExpandedReview(review.id)}
                  >
                    more
                  </button>
                )}
                {expandedReview === review.id && (
                  <button
                    className="ml-2 text-xs text-blue-600 underline"
                    onClick={() => setExpandedReview(null)}
                  >
                    less
                  </button>
                )}
              </div>
              {/* Author Info */}
              <div className="flex items-center pt-4 border-t dark:border-gray-700/50 border-gray-300 group-hover:border-yellow-500/30 transition-colors">
                <div className="w-12 h-12 dark:bg-linear-to-br dark:from-red-600 dark:to-orange-600 bg-linear-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center dark:text-white text-red-700 font-bold text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold dark:text-white text-gray-900 text-lg">
                    {review.author}
                  </p>
                  <p className="dark:text-gray-400 text-gray-500 text-sm flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {review.location}
                  </p>
                </div>
              </div>
              {/* Source Badge & Date above Verified */}
              <div className="absolute bottom-16 right-4 flex flex-col items-end gap-2">
                {review.source === "yelp" ? (
                  <span className="inline-flex items-center px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                    <svg
                      className="w-4 h-4 mr-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21.5 10.5c-.2-.6-.7-1-1.3-1.1l-4.2-.7c-.2 0-.4-.2-.5-.4l-2-4.1c-.3-.6-.9-.9-1.5-.9s-1.2.3-1.5.9l-2 4.1c-.1.2-.3.4-.5.4l-4.2.7c-.6.1-1.1.5-1.3 1.1-.2.6 0 1.2.5 1.6l3.1 3c.2.2.2.5.2.7l-.7 4.2c-.1.6.2 1.2.7 1.5.6.3 1.2.2 1.6-.2l3.1-3c.2-.2.5-.2.7-.2l4.2.7c.6.1 1.2-.2 1.5-.7.3-.6.2-1.2-.2-1.6l-3.1-3c-.2-.2-.2-.5-.2-.7l.7-4.2c.1-.6-.2-1.2-.7-1.5z" />
                    </svg>
                    Yelp
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                    <svg
                      className="w-4 h-4 mr-1"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                    >
                      <path d="M43.6 20.5c0-7.2-5.8-13-13-13s-13 5.8-13 13c0 6.5 4.8 11.8 11 12.8v-9.1h-3.3v-3.7h3.3v-2.8c0-3.3 2-5.1 5-5.1 1.4 0 2.9.2 2.9.2v3.2h-1.6c-1.6 0-2.1 1-2.1 2v2.5h3.6l-.6 3.7h-3v9.1c6.2-1 11-6.3 11-12.8z" />
                    </svg>
                    Google
                  </span>
                )}
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {review.date || "Date"}
                </span>
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
        >
     
        </div>
      </div>
    </section>
  );
};

export default Reviews;
