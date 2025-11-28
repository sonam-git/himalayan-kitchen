
const BUTTON_STYLE = "group relative overflow-hidden bg-yellow-600 hover:bg-white text-white hover:text-black border-2 border-white hover:border-yellow-500 font-bold py-2 sm:py-2 lg:py-2 px-2 sm:px-2 lg:px-5 rounded-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-40 sm:min-w-[180px] lg:min-w-[200px] shadow-xl cursor-pointer";

const OnlineOrder = () => (
  <div className="flex flex-col items-center justify-center gap-4 my-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200 shadow-md max-w-xl mx-auto">
    <p className="text-md sm:text-lg font-semibold font-mono text-yellow-900 text-center">
      You can place your order easily through our secure online ordering service. You can also see our full menu and customize your meal to your liking.
    </p>
    <button
      className={BUTTON_STYLE}
      onClick={() => window.open('https://order.toasttab.com/online/himalayan-kitchen-227-3rd-st', '_blank', 'noopener,noreferrer')}
      aria-label="Order food online"
      type="button"
    >
      Order Now
    </button>
  </div>
);

export default OnlineOrder;
