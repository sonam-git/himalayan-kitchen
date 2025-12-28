import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" aria-labelledby="footer-heading" className="bg-gray-400 dark:bg-[#2a0a0a] border-t-2 text-white overflow-hidden w-full max-w-full  transition-colors duration-300" tabIndex={-1}>
      <h2 id="footer-heading" className="sr-only">Contact and Social Links</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[auto_auto_auto] lg:grid-rows-2 gap-10 w-full">
          {/* Contact Info - order 1 on mobile, col 2 row 1 on large */}
          <div className="order-1 lg:order-0 lg:col-start-2 lg:row-start-1">
            <div className="rounded-2xl relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-400 to-orange-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-lg border border-orange-200/40 dark:border-orange-500/30 p-8">
              {/* Background image with blur */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image src="/images/other/stone.webp" alt="Stone background" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className="w-full h-full object-cover blur-sm opacity-60" />
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60 mix-blend-multiply rounded-2xl"></div>
              </div>
              <div className="relative ">
               <h3 className="text-xl font-bold mb-6 text-yellow-100 dark:text-yellow-300 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gray-100 dark:text-orange-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                  Contact Info
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    {/* Address Icon */}
                    <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
                    <a href="https://maps.google.com/?q=227+3rd+St,+San+Rafael,+CA+94901" target="_blank" rel="noopener noreferrer" className="text-white font-sans hover:text-yellow-400 transition-colors no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" aria-label="View location on Google Maps">227 3rd St, San Rafael, CA 94901</a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    {/* Phone Icon */}
                    <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.58 6.58l1.27-1.27a2 2 0 0 1 2.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0 1 22 16.92z"/></svg>
                    <a href="tel:(415) 526-3161" className="text-white font-mono hover:text-yellow-400 transition-colors no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" aria-label="Call Himalayan Kitchen at (415) 526-3161">(415) 526-3161</a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    {/* Email Icon */}
                    <svg className="w-5 h-5 text-yellow-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                    <a href="mailto:himalayankitchenmarin@gmail.com" className="text-white font-sans hover:text-yellow-400 transition-colors no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" aria-label="Email Himalayan Kitchen">himalayankitchenmarin@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Opening Hours - order 2 on mobile, col 2 row 2 on large */}
          <div className="order-2 lg:order-0 lg:col-start-2 lg:row-start-2">
            <div className="rounded-2xl relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-200 to-red-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-lg border border-yellow-200/40 dark:border-orange-500/30 p-8">
              {/* Background image with blur */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image src="/images/other/stone.webp" alt="Stone background" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className="w-full h-full object-cover blur-sm opacity-60" />
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60 mix-blend-multiply rounded-2xl"></div>
              </div>
              <div className="relative ">
                <h3 className="text-xl font-bold mb-6 text-yellow-100 dark:text-yellow-300 flex items-center gap-2">
                  <svg className="w-6 h-6  text-gray-100 dark:text-yellow-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                  Opening Hours
                </h3>
                <ul className="space-y-4">
                  <li className="flex text-gray-700 dark:text-gray-200">
                    <div className="font-semibold flex items-center gap-2 mb-0 bg-gray-900/80 dark:bg-gray-800/80 text-white font-mono text-xs sm:text-sm tracking-widest px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg shadow-inner border border-white whitespace-nowrap max-w-full w-64 sm:w-80">
                      {/* Plate & Spoon Icon for Lunch */}
                      <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-4 10a4 4 0 118 0 4 4 0 01-8 0zm10.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/><rect x="17" y="7" width="2" height="10" rx="1"/><rect x="5" y="7" width="2" height="10" rx="1"/></svg>
                      Lunch: <span className="ml-2">11:30AM</span> <span className="mx-1 text-gray-400">-</span> <span>02:30PM</span>
                    </div>
                  </li>
                  <li className="flex text-gray-700 dark:text-gray-200">
                    <div className="font-semibold flex items-center gap-2 mb-0 bg-gray-900/80 dark:bg-gray-800/80 text-white font-mono text-xs sm:text-sm tracking-widest px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg shadow-inner border border-white whitespace-nowrap max-w-full w-64 sm:w-80">
                      {/* Knife & Fork Icon for Dinner */}
                      <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v20M17 2v20M12 2v20"/><rect x="6" y="7" width="2" height="10" rx="1"/><rect x="16" y="7" width="2" height="10" rx="1"/></svg>
                      Dinner: <span className="ml-2">04:30PM</span> <span className="mx-1 text-gray-400">-</span> <span>09:00PM</span>
                    </div>
                  </li>
                  <li className="flex justify-between items-center text-gray-100 dark:text-gray-200">
                    <span className="font-mono flex items-center gap-2">
                      {/* Restaurant Icon for Open Days */}
                      <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"/><rect x="3" y="7" width="18" height="7" rx="2"/><path d="M7 7V3h10v4"/></svg>
                      Open | 7 Days a Week |
                       <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2"/><rect x="3" y="7" width="18" height="7" rx="2"/><path d="M7 7V3h10v4"/></svg>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Restaurant Info & Social - order 3 on mobile, col 1 row 1-2 on large */}
          <div className="flex flex-col items-start justify-between h-full order-3 lg:order-none lg:col-start-1 lg:row-span-2">
            {/* Logo above heading using Next.js Image */}
            <Image src="/images/himalayan-kitchen-logo.png" alt="Himalayan Kitchen Logo" width={96} height={96} className="mb-4 " />
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white" tabIndex={0}>HIMALAYAN KITCHEN MARIN</h3>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white notranslate" tabIndex={0}>
              हिमालयन किचन  |  ཧི་མ་ལ་ཡན་ཀི་ཇན།
            </h3>
            <p className=" text-gray-800 dark:text-gray-300 mb-6 leading-relaxed font-serif">
              Serving and sharing the Himalayan cuisines & cultures. Born and raised in the mountains, 
              we bring authentic flavors from the roof of the world to your table.
            </p>
            <div className="mb-4 w-full ">
              <span className="text-2xl font-mono text-gray-800 dark:text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-100 bg-clip-text mb-2 drop-shadow-lg flex items-center gap-2" aria-hidden="true">
                {/* ...svg... */}
                Stay connected with us
              </span>
              <div className="flex justify-between items-center w-full px-3 py-3 rounded-xl bg-white dark:bg-gray-200 backdrop-blur-md shadow-inner border border-gray-200 dark:border-gray-700" role="list" aria-label="Social links">
                {/* Facebook Icon */}
                <div className="flex flex-col items-center gap-1" role="listitem">
                  <a
                    href="https://www.facebook.com/himalayankitchenmarin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 shadow hover:shadow-lg transition-all border-2 border-blue-500 hover:border-gray-500"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
                    </svg>
                  </a>
                  <span className="text-xs text-gray-700 dark:text-gray-700 font-semibold">Facebook</span>
                </div>
                {/* Instagram Icon */}
                <div className="flex flex-col items-center gap-1" role="listitem">
                  <a
                    href="https://www.instagram.com/himalayankitchenmarin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 shadow hover:shadow-lg transition-all border-2 border-pink-500 hover:border-gray-500"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.396 3.678 1.378c-.982.982-1.247 2.093-1.306 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.324 2.392 1.306 3.374.981.982 2.093 1.247 3.374 1.306C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.392-.324 3.374-1.306.982-.982 1.247-2.093 1.306-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.324-2.392-1.306-3.374-.981-.982-2.093-1.247-3.374-1.306C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 0 1 7.838 12 4.162 4.162 0 0 1 12 7.838 4.162 4.162 0 0 1 16.162 12 4.162 4.162 0 0 1 12 16.162zm4.406-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                    </svg>
                  </a>
                  <span className="text-xs text-gray-700 dark:text-gray-700 font-semibold">Instagram</span>
                </div>
                {/* Yelp Icon */}
                <div className="flex flex-col items-center gap-1" role="listitem">
                  <a
                    href="https://www.yelp.com/biz/himalayan-kitchen-san-rafael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 shadow hover:shadow-lg transition-all border-2 border-red-500 hover:border-gray-500"
                    aria-label="Yelp"
                  >
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21.5 11.5c-.2-.5-.7-.8-1.2-.7l-5.2.7c-.6.1-1.1.6-1.2 1.2-.1.6.2 1.2.7 1.4l4.2 2.2c.5.3 1.1.2 1.5-.2.4-.4.5-1 .2-1.5l-1.2-2.1zm-7.2-7.2c-.5-.2-1.1 0-1.4.5-.3.5-.2 1.1.2 1.5l2.2 4.2c.3.5.9.8 1.4.7.6-.1 1.1-.6 1.2-1.2l.7-5.2c.1-.5-.2-1-.7-1.2zm-7.2 7.2c-.2.5 0 1.1.5 1.4.5.3 1.1.2 1.5-.2l4.2-2.2c.5-.3.8-.9.7-1.4-.1-.6-.6-1.1-1.2-1.2l-5.2-.7c-.5-.1-1 .2-1.2.7zm7.2 7.2c.5.2 1.1 0 1.4-.5.3-.5.2-1.1-.2-1.5l-2.2-4.2c-.3-.5-.9-.8-1.4-.7-.6.1-1.1.6-1.2 1.2l-.7 5.2c-.1.5.2 1 .7 1.2zm-2.8-2.8c-.5-.2-1.1 0-1.4.5-.3.5-.2 1.1.2 1.5l2.2 4.2c.3.5.9.8 1.4.7.6-.1 1.1-.6 1.2-1.2l.7-5.2c.1-.5-.2-1-.7-1.2z" />
                    </svg>
                  </a>
                  <span className="text-xs text-gray-700 dark:text-gray-700 font-semibold">Yelp</span>
                </div>
                {/* Google Icon */}
                <div className="flex flex-col items-center gap-1" role="listitem">
                  <a
                    href="https://g.page/r/CQkQwQwQwQwQwQwQwQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 shadow hover:shadow-lg transition-all border-2 border-green-800 hover:border-gray-500"
                    aria-label="Google"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 48 48" aria-hidden="true">
                      <g>
                        <path fill="#4285F4" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.22l6.93-6.93C36.36 2.34 30.55 0 24 0 14.61 0 6.27 5.06 1.82 12.44l8.06 6.27C12.36 13.13 17.73 9.5 24 9.5z"/>
                        <path fill="#34A853" d="M46.18 24.56c0-1.64-.15-3.22-.44-4.75H24v9.02h12.44c-.54 2.91-2.18 5.38-4.64 7.04l7.18 5.59C43.73 37.61 46.18 31.61 46.18 24.56z"/>
                        <path fill="#FBBC05" d="M9.88 28.71c-.54-1.62-.85-3.34-.85-5.21s.31-3.59.85-5.21l-8.06-6.27C.64 15.61 0 19.67 0 24s.64 8.39 1.82 12.44l8.06-6.27z"/>
                        <path fill="#EA4335" d="M24 48c6.55 0 12.36-2.17 16.93-5.93l-7.18-5.59c-2.01 1.35-4.59 2.15-7.75 2.15-6.27 0-11.64-3.63-14.12-8.94l-8.06 6.27C6.27 42.94 14.61 48 24 48z"/>
                      </g>
                    </svg>
                  </a>
                  <span className="text-xs text-gray-700 dark:text-gray-700 font-semibold">Google</span>
                </div>
                {/* Mail Icon */}
                <div className="flex flex-col items-center gap-1" role="listitem">
                  <a
                    href="mailto:himalayankitchenmarin@gmail.com"
                    className="rounded-md p-2 shadow hover:shadow-lg transition-all border-2 border-yellow-600 hover:border-gray-500"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6 text-yellow-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" />
                    </svg>
                  </a>
                  <span className="text-xs text-gray-700 dark:text-gray-700 font-semibold">Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-500 mt-8 pt-8 pb-20 xl:pb-8 text-center">
          <p className="text-gray-800 dark:text-gray-300 text-sm font-serif mb-2">
            We strive to make our website accessible to everybody.{' '}
            <a 
              href="/accessibility" 
              className="text-orange-800 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              aria-label="Learn more about our accessibility commitment"
            >
              Learn more
            </a>
          </p>
          <p className="text-gray-800 dark:text-gray-400 text-sm font-serif">
            | &copy; {new Date().getFullYear()} Himalayan Kitchen Marin, San Rafael, CA | All rights reserved |
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
