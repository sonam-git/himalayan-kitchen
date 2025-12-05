import "../globals.css";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import Image from "next/image";
import ScrollToTop from './components/ScrollToTop';
import Script from "next/script";
import StructuredData from './components/StructuredData';
import type { Metadata } from 'next';


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://himalayankitchenmarin.com'),
  title: {
    default: "Himalayan Kitchen Marin | Authentic Nepali, Indian & Tibetan Restaurant San Rafael",
    template: "%s | Himalayan Kitchen Marin"
  },
  description: "Award-winning Sherpa-owned restaurant in San Rafael serving authentic Himalayan, Nepali, and Tibetan cuisine. Featuring momos, curries, thukpa, and traditional dishes. Dine-in, takeout, and catering available.",
  keywords: [
    "Himalayan restaurant San Rafael",
    "Nepali food San Rafael", 
    "Indian cuisine Marin County",
    "Tibetan cuisine Marin County",
    "momos near me",
    "authentic Asian restaurant",
    "Sherpa restaurant California",
    "Himalayan Kitchen",
    "best Nepali restaurant Bay Area",
    "Tibetan food San Rafael",
    "catering San Rafael",
    "takeout San Rafael"
  ],
  authors: [{ name: "Himalayan Kitchen Marin" }],
  creator: "Himalayan Kitchen Marin",
  publisher: "Himalayan Kitchen Marin",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Himalayan Kitchen Marin | Authentic Nepali & Tibetan Restaurant",
    description: "Experience authentic Himalayan flavors in San Rafael. Family-owned Sherpa restaurant serving traditional Nepali and Tibetan dishes made fresh with love.",
    url: 'https://himalayankitchenmarin.com',
    siteName: 'Himalayan Kitchen Marin',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/gallery/dining1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Himalayan Kitchen Restaurant Interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalayan Kitchen Marin | Authentic Himalayan Cuisine',
    description: 'Award-winning Sherpa-owned restaurant in San Rafael serving authentic Himalayan, Nepali, and Tibetan cuisine.',
    images: ['/images/gallery/dining1.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
  alternates: {
    canonical: 'https://himalayankitchenmarin.com',
  },
  category: 'restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://cdn.userway.org" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.userway.org" crossOrigin="anonymous" />
        
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