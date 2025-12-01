import { FaHome, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const BUTTON_STYLE = "group relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 hover:from-yellow-400 hover:via-orange-300 hover:to-red-300 text-white hover:text-black border-2 border-white hover:border-yellow-500 font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 flex items-center justify-center gap-3 w-full sm:w-auto min-w-40 sm:min-w-[180px] lg:min-w-[200px] shadow-2xl cursor-pointer text-lg tracking-wide animate-bounce hover:animate-none";
const HOME_BUTTON_STYLE = "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 hover:bg-yellow-100 border border-yellow-300 text-yellow-800 font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400/50";

const OnlineOrder = () => (
  <div className="flex flex-col items-center justify-center gap-6 my-6 p-8 bg-linear-to-br from-gray-900 via-gray-500 to-red-900 rounded-2xl border border-yellow-200 shadow-4xl drop-shadow-white max-w-2xl mx-auto animate-fade-in">
    <div className="flex flex-col items-center gap-2">
      <FaShoppingCart className="text-4xl text-yellow-500 drop-shadow-lg animate-pulse" />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-yellow-200 text-center mb-2 font-headline">Order Online</h2>
      <p className="text-md sm:text-lg font-medium text-white text-center ">
        Place your order easily through our secure online ordering service. Browse our full menu, customize your meal, and enjoy delicious Himalayan cuisine at your convenience!
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-2">
      <button
        className={BUTTON_STYLE}
        onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
        aria-label="Order food online"
        type="button"
      >
        <FaShoppingCart className="text-xl" />
        Order Now
      </button>
      <Link href="/" className={HOME_BUTTON_STYLE} aria-label="Go to Home">
        <FaHome className="text-lg" />
        Home
      </Link>
    </div>
    <div className="w-full flex justify-center mt-4">
      <span className="text-xs text-yellow-700 bg-yellow-100 rounded-full px-4 py-1 shadow-sm animate-fade-in-slow">
        Secure • Fast • Easy
      </span>
    </div>
  </div>
);

export default OnlineOrder;
