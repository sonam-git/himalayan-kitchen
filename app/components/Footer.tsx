import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-gray-950 text-white overflow-hidden w-full max-w-full rounded-lg sm:rounded-xl md:rounded-2xl my-2 sm:my-3 md:my-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          
          {/* Restaurant Info */}
          <div className="lg:col-span-2 flex flex-col items-start">
            {/* Logo above heading using Next.js Image */}
            <Image src="/images/hk-logo.jpg" alt="Himalayan Kitchen Logo" width={96} height={96} className="mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-white">HIMALAYAN KITCHEN</h3>
            <h3 className="text-2xl font-semibold mb-2 text-white">हिमालयन किचन </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              Serving and sharing the Himalayan cuisines & cultures. Born and raised in the mountains, 
              we bring authentic flavors from the roof of the world to your table.
            </p>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              We reserve the right to refuse service to anyone.
              An 18% gratuity will be added to parties of six or more. Namaste and thank you for dining with us.
            </p>
            <div className="mb-4">
              <span className="block text-sm font-semibold text-orange-400 dark:text-orange-300 mb-2">Stay connected with us</span>
              <div className="flex space-x-4">
                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/himalayankitchenmarin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-white transition-colors bg-white dark:bg-gray-800 rounded-full p-2 shadow hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
                  </svg>
                </a>
                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/himalayankitchenmarin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-white transition-colors bg-white dark:bg-gray-800 rounded-full p-2 shadow hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.396 3.678 1.378c-.982.982-1.247 2.093-1.306 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.324 2.392 1.306 3.374.981.982 2.093 1.247 3.374 1.306C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.392-.324 3.374-1.306.982-.982 1.247-2.093 1.306-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.324-2.392-1.306-3.374-.981-.982-2.093-1.247-3.374-1.306C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 0 1 7.838 12 4.162 4.162 0 0 1 12 7.838 4.162 4.162 0 0 1 16.162 12 4.162 4.162 0 0 1 12 16.162zm4.406-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">Our Menu</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
              <li>
                <a href="#reservation" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300">Reservation</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-400 dark:text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <span className="text-gray-300 dark:text-gray-400">227 3rd St, San Rafael, CA 94901</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-400 dark:text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <span className="text-gray-300 dark:text-gray-400">(415) 526-3161</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-400 dark:text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <span className="text-gray-300 dark:text-gray-400">himalayankitchenmarin@gmail.com</span>
              </li>
            </ul>

            {/* Opening Hours moved right under contact info */}
            <h3 className="text-lg font-semibold mt-8 mb-4 text-white">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-400">Lunch:</span>
                <span className="text-gray-400 dark:text-gray-500">11:30 AM - 02:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-400">Dinner:</span>
                <span className="text-gray-400 dark:text-gray-500">04:30 PM - 09:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300 dark:text-gray-400">Open Daily</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Himalayan Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
