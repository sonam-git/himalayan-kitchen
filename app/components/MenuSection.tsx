'use client';

import  { useEffect, useRef, useState } from 'react';
import MenuItemCard from './MenuItemCard';
import MenuHeading from './MenuHeading';
import MenuNavBar from './MenuNavBar';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
}

interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

const MenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const allergenRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const navbarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuInView, setMenuInView] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setMenuInView(entry.isIntersecting);
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

  // Show navbar only when allergen info is out of view
  useEffect(() => {
    if (!allergenRef.current) return;
    const allergenObserver = new IntersectionObserver(
      ([entry]) => {
        setShowNavBar(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    allergenObserver.observe(allergenRef.current);
    return () => {
      if (allergenRef.current) allergenObserver.unobserve(allergenRef.current);
    };
  }, []);

  const handleExitMenu = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll menu section into view when category is clicked
  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    if (navbarRef.current) {
      navbarRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuCategories: MenuCategory[] = [
    {
      name: "Appetizers, Soup & Salad",
      icon: "🥟",
      items: [
        { name: "Chicken Soup", description: "Light creamy chicken broth, cabbage, carrot.", price: "$7.95 (12oz) / $9.95 (16oz)", image: "/images/food/food.jpg" },
        { name: "Daal Soup", description: "Slow cooked lentil soup with ginger-garlic, carrot & herbs.", price: "$6.95 (12oz) / $8.95 (16oz)", image: "/images/food/thaliset.jpg", vegetarian: true, vegan: true },
        { name: "Papadum", description: "Thin crisp chips made from black gram flour & served with mint & tamarind sauce.", price: "$4.95", image: "/images/food/food.jpg", vegetarian: true, vegan: true },
        { name: "Samosa Chat", description: "Yummy, 2 samosas split in halves on the bed of spiced garbanzo beans & garnished with mint, tamarind & yoghurt", price: "$12.95", image: "/images/food/food.jpg", vegetarian: true },
        { name: "Samosas", description: "Crispy patty stuffed with potato, green peas & served with mint & tamarind sauce.", price: "$8.95", image: "/images/food/food.jpg", vegetarian: true, vegan: true },
        { name: "Himalayan Salad", description: "Organic mix greens, cucumber, carrots, tomato w/ homemade dressing ~add chicken/paneer for $5.", price: "$10.95", image: "/images/food/thaliset.jpg", vegetarian: true, vegan: true },
        { name: "Veg Pakora", description: "Fresh mix veggie fritters served with mint & tamarind sauce.", price: "$7.95", image: "/images/food/food.jpg", vegetarian: true },
      ]
    },
    {
      name: "Mo:Mo (Dumplings)",
      icon: "🥟",
      items: [
        { name: "Chicken Momo", description: "Dumplings filled with ground chicken breast, cabbage, onions, herbs & chef's spices", price: "$13.95 / $17.95", image: "/images/food/momo.jpg" },
        { name: "Paneer Momo", description: "Homemade cheese, cauliflower, cabbage, zucchini, onions, herbs & chef spices.", price: "$14.95 / $18.95", image: "/images/food/momo.jpg", vegetarian: true },
        { name: "Pork Momo", description: "Dumplings filled with ground pork, cabbage, onions, herbs & chef's spices", price: "$14.95 / $18.95", image: "/images/food/momo.jpg" },
        { name: "Momo Platter", description: "Mix of veg, chicken & pork, 4 of each.", price: "$18.95", image: "/images/food/momo.jpg" },
        { name: "Veggie Momo", description: "Steamed dumplings filled with fresh cabbage, carrots, cauliflowers, squash, onion, herbs & spices.", price: "$12.95 / $16.95", image: "/images/food/momo.jpg", vegetarian: true, vegan: true },
      ]
    },
    {
      name: "Chowmein",
      icon: "🍜",
      items: [
        { name: "Chicken Chowmein", description: "Tender Chicken thigh, carrot, cabbage, onions, soy.", price: "$17.95", image: "/images/food/chowmien.jpg" },
        { name: "Egg Chowmein", description: "Organic Eggs, carrot, cabbage, onions, soy.", price: "$16.95", image: "/images/food/chowmien.jpg" },
        { name: "Veggie Chowmein", description: "Cabbage, carrot, green beans, onions, soy.", price: "$15.95", image: "/images/food/chowmien.jpg" },
        { name: "Shrimp Chowmein", description: "Tiger shrimp, cabbage, carrot, onion, soy.", price: "$18.95", image: "/images/food/chowmien.jpg" },
      ]
    },
    {
      name: "Chicken Curries",
      icon: "🍛",
      items: [
        { name: "Butter Chicken", description: "Chicken slow cooked in homemade buttery sauce.", price: "$19.75", image: "/images/food/tika masala.jpg"},
        { name: "Butter Chicken", description: "Chicken slow cooked in homemade buttery sauce.", price: "$19.75", image: "/images/food/tika masala.jpg" },
        { name: "Chicken 65", description: "Boneless chicken marinated in special spices, ginger, garlic, egg, yogurt, lemon juice & soy sauce. Sautéed with curry leaves & mustard seeds.", price: "$19.75", image: "/images/food/tika masala.jpg" },
        { name: "Chicken Korma", description: "Boneless chicken slow cooked with spices in cashew creamy curry sauce.", price: "$19.75", image: "/images/food/tika masala.jpg" },
        { name: "Chicken Tikka", description: "Tandoori cooked boneless chicken breast again cooked with creamy, tomato, onion, and herbs base tikka sauce.", price: "$19.75", image: "/images/food/tika masala.jpg" },
        { name: "Chicken Coco", description: "Boneless Chicken slow cooked with homemade sauce & organic coconut.", price: "$18.75", image: "/images/food/tika masala.jpg" },
        { name: "Chicken Chili", description: "Boneless chicken thigh marinated overnight with special spices & egg then sautéed with bell peppers, onions, tomato with sweet chili sauce & soy sauce.", price: "$18.75", image: "/images/food/tika masala.jpg", spicy: true },
        { name: "Classic Chicken Curry", description: "Free ranged chicken cooked in homemade tomato onion based sauce.", price: "$18.75", image: "/images/food/tika masala.jpg" },
        { name: "Kukhura Pharsi", description: "Chicken & butter nut squash cooked in homemade curry sauce.", price: "$18.75", image: "/images/food/tika masala.jpg" },
        { name: "Kukhura Aaloo", description: "Tender chicken cooked with potatoes in homemade red chilli sauce.", price: "$18.75", image: "/images/food/tika masala.jpg", spicy: true },
        { name: "Mango Chicken", description: "Free range chicken cooked in onion gravy and mango puree with herbs and spices.", price: "$18.75", image: "/images/food/tika masala.jpg" },
        { name: "Kukhura Bhanta", description: "Slow cooked chicken & egg plant in homemade sauce.", price: "$18.75", image: "/images/food/tika masala.jpg" },
      ]
    },
    {
      name: "Lamb Curries",
      icon: "�",
      items: [
        { name: "Lamb Aloo", description: "Boneless lamb cooked with potatoes in special homemade red chilli sauce.", price: "$19.75", image: "/images/food/tika masala.jpg", spicy: true },
        { name: "Classic Lamb Curry", description: "Slowed cooked tender lamb with tomato, onion based sauce.", price: "$19.95", image: "/images/menu/classic-lamb-curry.jpg" },
        { name: "Lamb Korma", description: "Boneless lamb cooked in cream, cashew sauce.", price: "$20.95", image: "/images/food/tika masala.jpg" },
        { name: "Lamb Saag", description: "Boneless Lamb cooked with fresh spinach in homemade sauce.", price: "$19.95", image: "/images/food/tika masala.jpg" },
        { name: "Lamb Tikka Masala", description: "Boneless lamb cubes cooked in a creamy tomato and onion sauce.(we can make it with coconut cream).", price: "$20.95", image: "/images/food/tika masala.jpg" },
        { name: "Lamb Pharsi", description: "Lamb & Pumpkin cooked in homemade curry sauce.", price: "$19.75", image: "/images/food/tika masala.jpg" },
      ]
    },
    {
      name: "Vegetarian Curry",
      icon: "🥬",
      items: [
        { name: "Aloo Bhanta", description: "Potato & egg plant made with homemade sauce.", price: "$16.25", image: "/images/food/tika masala.jpg", vegetarian: true, vegan: true },
        { name: "Baigan Bartha", description: "Eggplant baked in a clay oven, mashed, & cooked with green peas in tomato onion based sauce.", price: "$16.95", image: "/images/food/tika masala.jpg", vegetarian: true, vegan: true },
        { name: "Daal Misuwa", description: "Slow cooked mixture of chana, black lentil, & kidney beans with chef's spices.", price: "$16.25", image: "/images/food/thaliset.jpg", vegetarian: true, vegan: true },
        { name: "Chana Masala", description: "Flavorful garbanzo beans cooked with blend of spices in curry sauce.", price: "$16.25", image: "/images/food/tika masala.jpg", vegetarian: true, vegan: true },
        { name: "Aloo Cauli", description: "Cauliflower & potato with special homemade sauce.", price: "$16.25", image: "/images/food/tika masala.jpg", vegetarian: true, vegan: true },
        { name: "Paneer/Tofu Tikka Masala", description: "Homemade paneer or organic tofu cooked in chef special blend spices, tomato, onion gravy, & cream sauce.", price: "$17.25", image: "/images/food/tika masala.jpg", vegetarian: true },
        { name: "Tofu/Paneer Chilli", description: "Organic tofu or paneer sautéed with onion, bell peppers, & tomato chilli sauce.", price: "$17.25", image: "/images/food/tika masala.jpg", spicy: true, vegetarian: true },
        { name: "Saag Paneer", description: "Homemade cheese cubes cooked with fresh spinach in creamy tomato-onion based sauce.", price: "$17.25", image: "/images/food/tika masala.jpg", vegetarian: true },
        { name: "Veggie Tikka Masala", description: "Seasonal veggies with tikka sauce (creamy tomato onion & herbs based sauce).", price: "$17.25", image: "/images/food/tika masala.jpg", vegetarian: true, vegan: true },
      ]
    },
    {
      name: "Seafood Curry",
      icon: "🦐",
      items: [
        { name: "Fish Curry", description: "Salmon simmered in creamy coconut sauce with chef's special spices.", price: "$19.95", image: "/images/food/tika masala.jpg" },
        { name: "Machha Saag", description: "Fish cooked with fresh spinach in coconut sauce.", price: "$19.95", image: "/images/food/tika masala.jpg" },
        { name: "Shrimp Curry", description: "Tiger shrimps simmered in creamy coconut sauce with special spices.", price: "$19.95", image: "/images/food/tika masala.jpg" },
        { name: "Salmon/Shrimp Tikka Masala", description: "Salmon or shrimp cooked in tomato- onion gravy, with chef special blend spices & cream.", price: "$20.95", image: "/images/food/tika masala.jpg" },
      ]
    },
    {
      name: "Himalayan Tandoori",
      icon: "🔥",
      items: [
        { name: "Chicken Kabab", description: "Tender boneless chicken breast.", price: "$19.95", image: "/images/food/tandoori.jpg" },
        { name: "Himalayan Mix Grill", description: "Sizzling platter with combination of chicken, lamb and salmon.", price: "$25.95", image: "/images/food/tandoori.jpg" },
        { name: "Lamb Kabab", description: "Succulent boneless lamb (no yogurt).", price: "$20.95", image: "/images/food/tika masala.jpg" },
        { name: "Salmon Tandoori", description: "Salmon marinated with home made ground spices and baked in tandoori oven. (no yogurt).", price: "$22.95", image: "/images/food/tika masala.jpg" },
        { name: "Tandoori Chicken", description: "Juicy half chicken or whole chicken.", price: "$19.95 / $26.95", image: "/images/food/tandoori.jpg" },
        { name: "Pork Ribs", description: "Savory baby back pork ribs marinated with spices, barbecue sauce, & cooked in tandoori Oven.", price: "$20.95", image: "/images/food/tandoori.jpg" },
      ]
    },
    {
      name: "Biryani",
      icon: "🍚",
      items: [
        { name: "Chicken Biryani", description: "Aromatic, saffron flavored fried rice caramelized with onions, house spices, boneless chicken & served with side Raita.", price: "$18.95", image: "/images/food/thaliset.jpg" },
        { name: "Lamb Biryani", description: "Aromatic, saffron flavored fried rice caramelized with onions, house spices, boneless lamb & served with side Raita.", price: "$19.95", image: "/images/food/tika masala.jpg" },
        { name: "Veggie Biryani", description: "Aromatic, saffron flavored fried rice caramelized with onions, house spices, seasonal mix veggies & served with side Raita.", price: "$17.25", image: "/images/food/tika masala.jpg", vegetarian: true },
      ]
    },
    {
      name: "Sides",
      icon: "🍞",
      items: [
        { name: "Basmati Rice / Brown Rice", description: "Traditional indian rice", price: "$3.45", image: "/images/food/thaliset.jpg", vegetarian: true, vegan: true },
        { name: "Plain / Butter Naan", description: "Traditional Indian bread baked in tandor clay oven.", price: "$3.55", image: "/images/food/food.jpg", vegetarian: true },
        { name: "Cheese Naan", description: "Traditional Indian bread with mozzarella cheese baked in tandor clay oven", price: "$5.95", image: "/images/food/food.jpg", vegetarian: true },
        { name: "Garlic Cheese Naan", description: "Traditional Indian bread baked in tandor clay oven with cheese & garlic.", price: "$5.95", image: "/images/food/food.jpg", vegetarian: true },
        { name: "Garlic Broccoli", description: "Fresh Broccoli sautéed with garlic.", price: "$5.25", image: "/images/food/food.jpg", vegetarian: true, vegan: true },
        { name: "Garlic / Garlic Cilantro Naan", description: "Dash of garlic or dash of garlic cilantro", price: "$3.95", image: "/images/food/food.jpg", vegetarian: true },
        { name: "Raita", description: "Homemade yoghurt sauce with shredded cucumber, cumin, mint.", price: "$3.35", image: "/images/food/food.jpg", vegetarian: true },
        { name: "Condiments", description: "Mango Chutney / Mix Pickles / Mint or Tamarind sauce", price: "$2.95", image: "/images/food/food.jpg", vegetarian: true, vegan: true },
        { name: "Kashmiri Naan", description: "Naan with Dates & coconut.", price: "$5.95", image: "/images/food/food.jpg", vegetarian: true },
      ]
    },
    {
      name: "Beverages",
      icon: "🍵",
      items: [
        { name: "Soft Drinks", description: "Coke / Sprite / Diet Coke", price: "$2.95", image: "/images/food/food.jpg", vegetarian: true, vegan: true },
        { name: "Mango Lassi", description: "Mango smoothie made with mango, yoghurt, whole milk & honey.", price: "$5.45", image: "/images/food/food.jpg", vegetarian: true },
        { name: "Himalayan Tea", description: "Honey, Lemon, Ginger.", price: "$5.95", image: "/images/food/food.jpg", vegetarian: true, vegan: true },
        { name: "Dudh Chiya", description: "Milk tea made with whole milk, ginger, cloves, cardamom & tea leaves (one refill).", price: "$4.95", image: "/images/food/food.jpg", vegetarian: true },
        { name: "Other Beverages", description: "Lemonade / Ice tea / Arnold-palmer / Hot tea", price: "$3.95", image: "/images/food/food.jpg", vegetarian: true, vegan: true },
      ]
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="menu" 
      className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and allergen info always at top */}
        <div ref={headerRef}>
          <MenuHeading allergenRef={allergenRef} isVisible={isVisible} />
        </div>
        {/* Category navbar only appears and sticks after allergen info is out of view */}
        {showNavBar && (
          <div ref={navbarRef} className="lg:hidden sticky top-0 z-30 transition-all duration-300">
            <MenuNavBar
              menuCategories={menuCategories.map(({ name, icon }) => ({ name, icon }))}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
              onExitMenu={handleExitMenu}
              isVisible={isVisible}
            />
          </div>
        )}
        {/* Category navbar for large screens: two-row grid, always visible under allergen info */}
        <div className="hidden lg:grid grid-cols-5 grid-rows-2 gap-4 mt-8 mb-10">
          {menuCategories.map(({ name, icon }, idx) => (
            <button
              key={name}
              onClick={() => handleCategoryClick(idx)}
              className={`flex flex-col items-center justify-center px-4 py-3 rounded-xl border-2 font-semibold text-lg transition-all duration-200 shadow-sm hover:bg-orange-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 ${activeCategory === idx ? 'bg-orange-100 dark:bg-orange-900 border-orange-500 text-orange-700 dark:text-orange-300' : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white'}`}
            >
              <span className="text-2xl mb-1">{icon}</span>
              <span className="text-sm text-center">{name}</span>
            </button>
          ))}
        </div>
        {/* Category title and menu items for active category only, always below navbar */}
        <div className="min-h-[600px]">
          {/* Small screens: show only active category title and items below sticky navbar */}
          <div className="lg:hidden">
            <div className="flex items-center justify-center mb-8 sm:mb-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl sm:text-3xl">{menuCategories[activeCategory].icon}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                  {menuCategories[activeCategory].name}
                </h3>
              </div>
            </div>
            <div className="grid gap-5 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
              {menuCategories[activeCategory].items.map((item, itemIndex) => (
                <MenuItemCard
                  key={itemIndex}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  spicy={item.spicy}
                  vegetarian={item.vegetarian}
                  vegan={item.vegan}
                  index={itemIndex}
                />
              ))}
            </div>
          </div>
          {/* Large screens: show all categories as before */}
          <div className="hidden lg:block">
            {menuCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`transition-all duration-500 ${
                  activeCategory === categoryIndex
                    ? 'opacity-100 translate-y-0 relative' 
                    : 'opacity-0 absolute pointer-events-none'
                }`}
              >
                <div className="flex items-center justify-center mb-8 sm:mb-10">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl sm:text-3xl">{category.icon}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="grid gap-5 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
                  {category.items.map((item, itemIndex) => (
                    <MenuItemCard
                      key={itemIndex}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      spicy={item.spicy}
                      vegetarian={item.vegetarian}
                      vegan={item.vegan}
                      index={itemIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
         {/* Additional Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-gray-800">
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-red-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-linear-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Traditional Spices</h3>
              <p className="text-gray-600 dark:text-gray-100 text-sm">Imported directly from the Himalayan region for authentic flavors</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-orange-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Made with Love</h3>
              <p className="text-gray-600 dark:text-gray-100 text-sm">Every dish is prepared with care by our family for yours</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl border border-yellow-200/30 dark:border-red-500/50 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-linear-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Fresh Daily</h3>
              <p className="text-gray-600 dark:text-gray-100 text-sm">All ingredients sourced fresh and prepared from scratch daily</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-linear-to-r from-red-600 via-orange-600 to-red-600 dark:from-red-700 dark:via-orange-700 dark:to-red-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block px-6 py-2 bg-white/30 dark:bg-white/20 rounded-full text-white font-semibold text-sm uppercase tracking-wider mb-6">
                Order Now
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 drop-shadow-lg">
                Ready to Order?
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-red-100 max-w-2xl mx-auto leading-relaxed">
                Experience the taste of the Himalayas delivered straight to your door. Fresh, authentic, and absolutely delicious!
              </p>
              
              <button
                onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
                className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-red-600 font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Order Online Now</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-red-100">
                🚀 Free delivery on orders over $30  •  ⏱️ Ready in 20-30 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
