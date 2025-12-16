import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MenuSection from "./components/MenuSection";
import GalleryWrapper from "./components/GalleryWrapper";
import Reviews from "./components/Reviews";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
