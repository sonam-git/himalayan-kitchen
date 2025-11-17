const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white overflow-hidden w-full max-w-full rounded-lg sm:rounded-xl md:rounded-2xl my-2 sm:my-3 md:my-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-2 text-white">HIMALAYAN KITCHEN</h3>
            <h3 className="text-2xl font-semibold mb-2 text-white">हिमालयन किचन </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              Serving and sharing the Himalayan cuisines & cultures. Born and raised in the mountains, 
              we bring authentic flavors from the roof of the world to your table.
            </p>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              We reserve the right to refuse service to anyone.
              We offer takeout and catering for all types of events — please visit our website for details.
              An 18% gratuity will be added to parties of six or more. Namaste and thank you for dining with us.
            </p>
            <div className="mb-4">
              <span className="block text-sm font-semibold text-orange-400 dark:text-orange-300 mb-2">Stay connected with us</span>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/himalayankitchenmarin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-white transition-colors bg-white dark:bg-gray-800 rounded-full p-2 shadow hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/himalayankitchenmarin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-white transition-colors bg-white dark:bg-gray-800 rounded-full p-2 shadow hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Hours & Contact</h4>
            <div className="space-y-3 text-gray-300 dark:text-gray-400">
              <div>
                <p className="font-medium">Lunch</p>
                <p>11:30 AM - 2:30 PM</p>
              </div>
              <div>
                <p className="font-medium">Dinner</p>
                <p>4:30 PM - 9:00 PM</p>
              </div>
              <div className="pt-2">
                <p className="font-medium">Open Daily</p>
              </div>
              <div className="pt-4">
                <a 
                  href="tel:(415) 526-3161"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  (415) 526-3161
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Location</h4>
            <div className="text-gray-300 dark:text-gray-400 space-y-3">
              <div>
                <a
                  href="https://www.google.com/maps/search/227%203rd%20St,%20San%20Rafael,%20CA%2094901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  227 3rd St<br />
                  San Rafael, CA 94901
                </a>
              </div>
              <div className="pt-4">
                <a
                  href="https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 text-center text-gray-400 dark:text-gray-500 transition-colors duration-300">
          <p>&copy; 2024 Himalayan Kitchen San Rafael, CA. All rights reserved.</p>
          <p className="mt-2">Tastes from the Himalayas - Serving and sharing the Himalayan cuisines & cultures</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
