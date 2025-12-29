"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGalleryData } from "../hooks/useGalleryData";
import { fallbackMainGallery, fallbackFoodGallery, fallbackCustomerGallery } from "../lib/storyblok-data";
import MainGallery from "./MainGallery";
import FoodGallery from "./FoodGallery";
import CustomerGallery from "./CustomerGallery";

// Gallery item type
interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface GalleryProps {
  initialMainGallery?: GalleryItem[];
  initialFoodGallery?: GalleryItem[];
  initialCustomerGallery?: GalleryItem[];
  initialMainTitle?: string;
  initialMainDescription?: string;
  initialFoodTitle?: string;
  initialFoodDescription?: string;
  initialCustomerTitle?: string;
  initialCustomerDescription?: string;
}

const Gallery = ({ 
  initialMainGallery, 
  initialFoodGallery, 
  initialCustomerGallery,
  initialMainTitle,
  initialMainDescription,
  initialFoodTitle,
  initialFoodDescription,
  initialCustomerTitle,
  initialCustomerDescription
}: GalleryProps) => {
  // Fetch gallery data with auto-refresh (polls every 30 seconds)
  const { mainGallery: fetchedMainGallery, foodGallery: fetchedFoodGallery, customerGallery: fetchedCustomerGallery } = useGalleryData();
  
  // Use logic: 
  // 1. If we have fetched data from client-side API, use that (allows live updates)
  // 2. Otherwise, use initial SSR data if available
  // 3. Finally, fall back to hardcoded arrays
  const mainGallery = fetchedMainGallery.items.length > 0 
    ? fetchedMainGallery.items 
    : (initialMainGallery && initialMainGallery.length > 0 ? initialMainGallery : fallbackMainGallery);
  
  const foodGallery = fetchedFoodGallery.items.length > 0 
    ? fetchedFoodGallery.items 
    : (initialFoodGallery && initialFoodGallery.length > 0 ? initialFoodGallery : fallbackFoodGallery);
  
  const customerGallery = fetchedCustomerGallery.items.length > 0 
    ? fetchedCustomerGallery.items 
    : (initialCustomerGallery && initialCustomerGallery.length > 0 ? initialCustomerGallery : fallbackCustomerGallery);

  // Get title and description - priority: fetched > initial SSR > defaults
  const mainTitle = (fetchedMainGallery.items.length > 0 && fetchedMainGallery.title) 
    ? fetchedMainGallery.title 
    : (initialMainTitle || "Moments at Our Table");
  
  const mainDescription = (fetchedMainGallery.items.length > 0 && fetchedMainGallery.description) 
    ? fetchedMainGallery.description 
    : (initialMainDescription || "A visual journey through the cherished memories, beloved guests, and lively atmosphere that make our restaurant special. See how visitors from near and far enjoy their Himalayan dining experience.");

  const foodTitle = (fetchedFoodGallery.items.length > 0 && fetchedFoodGallery.title) 
    ? fetchedFoodGallery.title 
    : (initialFoodTitle || "A Feast For Your Eyes");
  
  const foodDescription = (fetchedFoodGallery.items.length > 0 && fetchedFoodGallery.description) 
    ? fetchedFoodGallery.description 
    : (initialFoodDescription || "A showcase of our most popular, authentic & mouth-watering Himalayan dishes. Let the gallery inspire your next dining experience!");

  const customerTitle = (fetchedCustomerGallery.items.length > 0 && fetchedCustomerGallery.title) 
    ? fetchedCustomerGallery.title 
    : (initialCustomerTitle || "Smiles & Satisfaction");
  
  const customerDescription = (fetchedCustomerGallery.items.length > 0 && fetchedCustomerGallery.description) 
    ? fetchedCustomerGallery.description 
    : (initialCustomerDescription || "A glimpse into the joy and happiness our customers experience at Himalayan Kitchen. From family gatherings to casual dinners with friends, every visit is a celebration of great food and warm hospitality.");

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

  // Prepare gallery items with fallback data
  const galleryItems = mainGallery || [
    {
      image: "/images/gallery/everestman.jpg",
      title: "Everest Man Kami Rita Sherpa (Right)",
      description:
        "The only person to have summited Mount Everest 31 times holding Guinness World Record visiting our restaurant.",
    },
    {
      image: "/images/gallery/first-customer.jpeg",
      title: "Customer with Nepali Flag",
      description:
        "Our regular customer who has been to Nepal multiple times to dine at Himalayan Kitchen, showing the love for our cuisine.",
    },
    {
      image: "/images/gallery/appa.jpeg",
      title: "Appa Sherpa (Middle) | Ang D Sherpa (Left) | Tamding Sherpa (2nd from left)",
      description:
        "Legendary mountaineer Appa Sherpa along with another two renowned mountaineers visiting our restaurant. Ang D Sherpa with most sibling to have summited Mt K2 and Mt Makalu respectively.Tamding Sherpa is known for 14 8000m peaks summited around the world.",
    },
    {
      image: "/images/gallery/hkitchen.jpg",
      title: "Himalayan Kitchen",
      description:
        "Himalayan Kitchen's cozy and inviting ambiance, perfect for enjoying authentic meals with family and friends.",
    },
    {
      image: "/images/gallery/everestsummiter.jpeg",
      title: "Everest Summiter",
      description:
        "Dawa Yangzum Sherpa ( Middle) | First woman to become an international mountain guide from Nepal, and First Nepalese woman to summit all 14 peaks above 8 thousands meters along with her husband renowned Mountaineer Mingma T Sherpa (right), and another mountaineer Mingma Sherpa (left) visiting our restaurant.",
    },
    {
      image: "/images/gallery/everest.JPG",
      title: "Pema Chhiring Sherpa",
      description:
        "Famous mountaineer Pema Chhiring Sherpa, known for his 24 times Everest summits, waving the logo of Himalayan Kitchen on the top of the world.",
    },
    {
      image: "/images/gallery/guest1.jpg",
      title: "Birth Day Celebration",
      description:
        "A happy guest celebrating their birthday while enjoying their meal at Himalayan Kitchen.",
    },
    {
      image: "/images/gallery/climber1.jpg",
      title: "Everest Summiter",
      description:
        "Renowned climber trio Ngima N Sherpa (Left) : Youngest to climb Mt Everest for 24 times and counting, Lhakpa R Sherpa (Middle) : 17th times Everest Summitted. And first Nepali to climb 'Seven Summits' the highest peaks on seven continents, and Tamting Sherpa (Right): completed all the 14 peaks above 8000m high around the world.",
    },
    {
      image: "/images/gallery/family-gathering.jpeg",
      title: "Family Gathering",
      description:
        "A joyful family gathering at Himalayan Kitchen, sharing delicious food and laughter.",
    },
    {
      image:"/images/gallery/family.jpeg",
      title: "Auspicious Family Visit",
      description:
        "A renowned Buddhist Master and teacher Tulku rinpoche Ngawang Lobsang Sherpa visiting our restaurant. He is also recognized as the eighth reincarnation of the Nyentse Lama. He is known for his teachings on Tantrayana, Tibetan Medicine, and Astrology.",
    },
    {
      image: "/images/gallery/Dining.jpeg",
      title: "Dining Experience",
      description:
        "One corner of our restaurant beautifully decorated for a cozy dining experience.",
    },
    {
      image: "/images/gallery/dining1.jpeg",
      title: "Dining Ambiance",
      description:
        "Another beautifully decorated corner of our restaurant, perfect for intimate dining experiences.",
    },
    {
      image: "/images/gallery/hsfc.jpeg",
      title: "Himalayan Sonoma FC",
      description:
        "Himalayan Kitchen proudly supporting local team sponsoring Himalayan Sonoma FC at their match.",
    },
    {
      image: "/images/gallery/guest.jpeg",
      title: "Satisfied Guest",
      description:
        "A satisfied guest enjoying their meal at Himalayan Kitchen, showcasing our delicious Himalayan cuisine.",
    },
    {
      image: "/images/gallery/catering.jpeg",
      title: "Catering Service",
      description:
        "Our catering service brings the authentic flavors of the Himalayas to your events and gatherings.",
    }
  ];

  // Prepare food gallery items with fallback data
  const foodGalleryItems = foodGallery || [
    {
      image: "/images/food/momo.jpeg",
      title: "Momo (Dumplings)",
      description:
        "Himalayan handmade dumplings with authentic Nepali taste. Available in Veg, Chicken, Pork & Paneer.",
    },
    {
      image: "/images/food/chowmien.jpg",
      title: "Himalayan Chow Mein",
      description:
        "Nepalease style stir fired noodles with vegetables and other choice of protein.",
    },
    {
      image: "/images/food/thaliset.jpg",
      title: "Lunch Special",
      description:
        "A complete meal platter featuring a variety of dishes, including rice, lentils, vegetables, and pickles.",
    },
    {
      image: "/images/food/tandoori.jpg",
      title: "Tandoori",
      description:
        "Marinated meat or vegetables cooked in a traditional clay oven, served with naan and chutney.",
    },
    {
      image:  '/images/food/chicken-tikka.jpeg',
      title: "Tika Masala",
      description:
        "Tender pieces of meat cooked in a rich and creamy tomato-based sauce, served with rice or naan.",
    },
    {
      image: "/images/food/chicken65.jpg",
      title: "Chicken 65",
      description:
        "Spicy and crispy fried chicken pieces, marinated in a blend of South Indian spices.",
    },
    {
      image:"/images/food/samosa.jpeg",
      title: "Samosa",
      description:
        "Crispy pastry filled with spiced potatoes and peas, served with tamarind chutney.",
    },
    {
      image: "/images/food/garlic-naan.jpeg",
      title: "Garlic Naan",
      description:
        "Soft and fluffy Indian bread infused with garlic and herbs, perfect for scooping up curries.",
    },
    {
      image: "/images/food/kukhura-bhanta.jpeg",
      title: "Kukhura Bhanta | chicken eggplant curry",
      description:
        "Aromatic chicken curry cooked with roasted eggplant and spices, served with rice.",
    },
    {
      image: "/images/food/fried-rice.jpeg",
      title: "Fried Rice Combo",
      description:
        "Fragrant fried rice stir-fried with mixed vegetables and soy sauce.",
    },
    {
      image: "/images/food/veg-pakoda.jpeg",
      title: "Vegetable Pakoda",
      description:
        "Crispy fritters made with mixed vegetables and chickpea flour, served with mint chutney.",
    },
    {
      image: "/images/food/haluwa.jpeg",
      title: "Himalayan Haluwa",
      description:
        "Nepalese style sweet dessert made from carrot, milk, ghee and cardamom powder.",
    },
    {
      image: "/images/food/himalayan-tea.jpeg",
      title: "Himalayan Tea",
      description:
        "A soothing blend of traditional Himalayan herbs and spices, served hot.",
    }
  ];

  return (
    <>
      <section
        aria-labelledby="gallery-heading"
        ref={sectionRef}
        id="gallery"
        className="relative transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
        tabIndex={-1}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
              <span className="inline-block px-6 py-2 mt-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/20 dark:to-red-400/20 border border-yellow-600 dark:border-yellow-400 rounded-full text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Visual Journey
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 opacity-60" />
            </div>
            <h2 id="gallery-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-800 dark:text-yellow-200 mb-6">
              Our Gallery
            </h2>
            <p className="text-md sm:text-xs md:text-lg max-w-3xl mx-auto leading-relaxed text-gray-900 dark:text-white">
              Discover our signature dishes, cozy ambiance, and heartwarming visits from popular personalities, friends, family, and customers of Himalayan Kitchen worldwide.
            </p>
          </div>

          {/* Main Gallery Component */}
          <MainGallery 
            items={galleryItems}
            title={mainTitle}
            description={mainDescription}
          />

          {/* Food Gallery Component */}
          <FoodGallery 
            items={foodGalleryItems}
            title={foodTitle}
            description={foodDescription}
          />

          {/* Customer Gallery Component */}
          <CustomerGallery 
            items={customerGallery}
            title={customerTitle}
            description={customerDescription}
          />

          {/* Divider */}
          <div className="w-full flex justify-center items-center">
            <div className="h-1 w-2/3 sm:w-1/2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-md my-2 sm:my-4 opacity-80" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
