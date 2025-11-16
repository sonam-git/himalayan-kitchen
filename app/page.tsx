import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import ChefsSpecials from "./components/ChefsSpecials";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import LocationInfo from "./components/LocationInfo";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pb-16 md:pb-0 overflow-x-hidden w-full max-w-full">
      <div className="overflow-x-hidden w-full px-2 sm:px-4 md:px-6">
        <Header />
        <Hero />
        <Features />
        <MenuSection />
        <ChefsSpecials />
        <Services />
        <Reviews />
        <About />
        <LocationInfo />
        <Footer />
        <MobileBottomBar />
      </div>
    </div>
  );
}
