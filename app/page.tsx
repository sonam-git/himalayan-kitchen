import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import ChefsSpecials from "./components/AwardsMedia";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import LocationInfo from "./components/LocationInfo";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import Contact from "./components/Contact";
import Caterings from "./components/Caterings";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen transition-colors duration-300 overflow-hidden">
      {/* Full-page blurred background image */}
      <div className="fixed inset-0 min-h-screen h-screen w-screen z-0">
        <Image
          src="/images/other/brick.png"
          alt="Page Backdrop"
          fill
          className="object-cover w-full h-full scale-105"
          priority
        />
        {/* Dark overlay for text clarity */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10" />
      </div>
      <div className="relative z-20">
        {/* Main content wrapper */}
        <main className="w-full">
          <Header />

          {/* Hero - Full width, edge to edge */}
          <Hero />

          {/* Content sections with side spacing and gaps between sections */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16 mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16 py-8 sm:py-12 lg:py-16 ">
            <MenuSection />
            <Caterings />
            <Services />
            <Reviews />
            <Gallery />
            <ChefsSpecials />
            <Features />
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
    </div>
  );
}
