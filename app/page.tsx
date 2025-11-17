import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import ChefsSpecials from "./components/ChefsSpecials";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import LocationInfo from "./components/LocationInfo";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Main content wrapper */}
      <main className="w-full">
        <Header />
        
        {/* Hero - Full width, edge to edge */}
        <Hero />
        
        {/* Content sections with side spacing and gaps between sections */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16 mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16 py-8 sm:py-12 lg:py-16 ">
          <MenuSection />
          <Services />
           <Reviews />
          <Features />
          <ChefsSpecials />
          <Gallery />
          <About />
          <Contact />
        </div>
        
        {/* LocationInfo - Full width like Hero */}
        <LocationInfo />
        
        <Footer />
        
        {/* Mobile bottom navigation */}
        <div className="md:hidden">
          <MobileBottomBar />
        </div>
      </main>
    </div>
  );
}
