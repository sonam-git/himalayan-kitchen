import dynamic from 'next/dynamic';
import Hero from "./components/Hero";
import Intro from "./components/Intro";

// Lazy load below-the-fold components for better mobile performance
const MenuSection = dynamic(() => import('./components/MenuSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 dark:bg-gray-800 h-96 rounded-lg" />,
});

const GalleryWrapper = dynamic(() => import('./components/GalleryWrapper'), {
  loading: () => <div className="animate-pulse bg-gray-100 dark:bg-gray-800 h-96 rounded-lg" />,
});

const Reviews = dynamic(() => import('./components/Reviews'), {
  loading: () => <div className="animate-pulse bg-gray-100 dark:bg-gray-800 h-96 rounded-lg" />,
});

const ScrollToTopButton = dynamic(() => import('./components/ScrollToTopButton'), {
  loading: () => null,
});

export default function Home() {
  return (
    <div className="relative min-h-screen transition-colors duration-300">
      <div className="relative">
        {/* Main content wrapper */}
        <div className="w-full">
          {/* Hero - Full width, edge to edge */}
          <Hero />

          {/* Content sections with side spacing and gaps between sections */}
          <div className="space-y-2 sm:space-y-10 lg:space-y-1 mx-4 sm:mx-4 lg:mx-8 xl:mx-12 2xl:mx-16 ">
            <Intro />
            <MenuSection />
            <Reviews />
            <GalleryWrapper />
          </div>
        </div>
        
        {/* Scroll-to-top button - Desktop only */}
        <ScrollToTopButton />
      </div>
    </div>
  );
}
