import "./globals.css";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

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
      <body className={`${inter.variable} ${playfairDisplay.variable} ${dancingScript.variable} font-sans antialiased overflow-x-hidden `}>
        <ThemeProvider>
          <Header />
          <main className="py-20 sm:py-24 lg:py-28">{children}</main>
          <Footer />
          <div className="md:hidden">
            <MobileBottomBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}