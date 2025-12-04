import "../globals.css";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import Image from "next/image";
import ScrollToTop from './components/ScrollToTop';
import Script from "next/script";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap',
});

export const metadata = {
  title: "Himalayan Kitchen | Authentic Himalayan Cuisine in San Rafael",
  description: "Experience authentic Himalayan flavors at Himalayan Kitchen in San Rafael. Family-owned restaurant serving traditional Nepali and Tibetan dishes made fresh with love.",
  keywords: "Himalayan restaurant, Nepali food, Tibetan cuisine, San Rafael dining, authentic Asian food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        {/* UserWay Accessibility Widget Configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.interdeal = {
                "sitekey": "meCuNxAYOV",
                "Position": "Left",
                "Menulang": "EN",
                "domains": {
                  "js": "https://cdn.userway.org/",
                  "acc": "https://acc.userway.org/"
                }
              };
            `,
          }}
        />
        {/* UserWay Accessibility Widget */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="meCuNxAYOV"
          strategy="afterInteractive"
        />
        {/* Hide UserWay's default floating button - we'll use custom button in Header */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Hide the default UserWay floating button completely */
              #userway_p1,
              .userway_buttons_wrapper {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
              }
              
              /* Keep the UserWay modal/widget functional */
              #userway,
              .userway_p2,
              .userway_p3 {
                display: block !important;
                visibility: visible !important;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && true)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e){}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} ${dancingScript.variable} font-sans antialiased overflow-x-hidden `}>
        {/* <AnnouncementModal /> */}
         {/* Full-page blurred background image */}
      <div className="fixed inset-0 min-h-screen h-screen w-screen -z-10 mt-0">
        <Image
          src="/images/other/TashiTagye.jpg"
          alt="Page Backdrop"
          fill
          className="cover w-full h-full scale-105"
          priority
        />
        {/* Strong dark overlay for focus, adjusts for dark/light mode */}
        <div className="absolute image-overlay inset-0 opacity-90 bg-gray-800  dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl "></div>
      </div>
        <ThemeProvider>
          <Header />
          <ScrollToTop />
          <main className="py-0 sm:py-0 lg:py-28  lg:mt-0">{children}</main>
          <Footer />
          <div className="md:hidden">
            <MobileBottomBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}