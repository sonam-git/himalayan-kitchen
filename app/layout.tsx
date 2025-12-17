import "../globals.css";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import Image from "next/image";
import ScrollToTop from './components/ScrollToTop';
import StructuredData from './components/StructuredData';
import ThirdPartyScripts from './components/ThirdPartyScripts';
import GoogleTranslateClient from './components/GoogleTranslateClient';
import AIAssistant from './components/AIAssistant';
import AnnouncementModal from './components/AnnouncementModal';
import type { Metadata } from 'next';


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true, // Used immediately for body text
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
  preload: false, // Only used in specific components, not immediately
});

const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing",
  display: 'swap',
  preload: false, // Only used in specific components, not immediately
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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon-32x32.png'],
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
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden" data-scroll-behavior="smooth">
      <head>
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* Inline theme script to prevent flash */}
        <script
          suppressHydrationWarning
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
        {/* Full-page blurred background image */}
        <div className="fixed inset-0 min-h-screen h-screen w-screen -z-10 mt-0" aria-hidden="true">
          <Image
            src="/images/other/TashiTagye.jpg"
            alt=""
            fill
            className="cover w-full h-full scale-105"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzJkM2E0ZiIvPjwvc3ZnPg=="
          />
          {/* Strong dark overlay for focus, adjusts for dark/light mode */}
          <div className="absolute image-overlay inset-0 opacity-90 bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl"></div>
        </div>
        
        <ThemeProvider>
          <Header />
          <ScrollToTop />
          
          {/* Language Selector - Mobile only (visible on all pages) */}
          <div className="xl:hidden fixed right-2 bottom-28 sm:bottom-12 z-50">
            <GoogleTranslateClient />
          </div>
          
          <main id="main-content" className="pt-32 md:pt-36 lg:pt-44 xl:pt-48 py-0 sm:py-0 lg:py-28 lg:mt-0">{children}</main>
          <Footer />
          <div className="md:hidden">
            <MobileBottomBar />
          </div>
          
          {/* AI Assistant - Inside ThemeProvider for dark mode support */}
          <AIAssistant />
        </ThemeProvider>
        
        {/* Announcement Modal - Shows on first visit (outside ThemeProvider) */}
        <AnnouncementModal />
        
        {/* Third-party scripts loaded after interactive */}
        <ThirdPartyScripts />
      </body>
    </html>
  );
}