const ChefsSpecials = () => {
  const specials = [
    {
      id: 1,
      name: "Himalayan Grilled Salmon",
      description: "Fresh Atlantic salmon marinated in traditional Himalayan spices, grilled to perfection and served with seasonal vegetables.",
      price: "$26",
      color: "from-orange-400 to-red-600"
    },
    {
      id: 2,
      name: "Yak Momo Platter",
      description: "Traditional Tibetan dumplings filled with seasoned yak meat, served with our signature spicy tomato chutney.",
      price: "$18",
      color: "from-amber-400 to-orange-600"
    },
    {
      id: 3,
      name: "Sherpa Thukpa",
      description: "Hearty noodle soup with mixed vegetables, tender meat, and aromatic herbs - a true taste of the Himalayas.",
      price: "$16",
      color: "from-yellow-400 to-amber-600"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden w-full max-w-full rounded-lg sm:rounded-xl md:rounded-2xl my-2 sm:my-3 md:my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Chef&apos;s Specials</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our signature dishes crafted with authentic Himalayan recipes passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {specials.map((dish) => (
            <div key={dish.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className={`relative h-64 bg-gradient-to-br ${dish.color} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm font-medium">Premium Dish</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{dish.name}</h3>
                  <span className="text-2xl font-bold text-red-700 dark:text-red-400">{dish.price}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{dish.description}</p>
                
                <button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://himalayankitchenmarin.com/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChefsSpecials;
