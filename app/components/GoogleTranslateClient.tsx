"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "hi", label: "Hindi", flag: "🇮🇳" },
  { code: "ne", label: "Nepali", flag: "🇳🇵" },
  { code: "zh-CN", label: "Chinese", flag: "🇨🇳" },
  { code: "ja", label: "Japanese", flag: "🇯🇵" },
  { code: "ko", label: "Korean", flag: "🇰🇷" },
  { code: "es", label: "Spanish", flag: "🇪🇸" },
  { code: "fr", label: "French", flag: "🇫🇷" },
  { code: "de", label: "German", flag: "🇩🇪" },
  { code: "it", label: "Italian", flag: "🇮🇹" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          config: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

const GoogleTranslateClient = () => {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize Google Translate
  useEffect(() => {
    // Prevent multiple initializations
    if (window.googleTranslateElementInit) {
      return;
    }

    let initAttempts = 0;
    const maxAttempts = 5;

    window.googleTranslateElementInit = function () {
      const initWidget = () => {
        if (window.google?.translate?.TranslateElement) {
          try {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: LANGUAGES.map((l) => l.code).join(","),
                autoDisplay: false,
              },
              "google_translate_element"
            );
          } catch (error) {
            console.error("Google Translate initialization error:", error);
          }
        } else if (initAttempts < maxAttempts) {
          initAttempts++;
          setTimeout(initWidget, 500);
        }
      };
      initWidget();
    };

    // Load the Google Translate script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      console.error("Failed to load Google Translate script");
    };
    document.body.appendChild(script);

    // Aggressively hide Google Translate banner
    const hideGoogleBar = () => {
      // Remove banner iframe
      const frames = document.querySelectorAll(
        "iframe.goog-te-banner-frame, .skiptranslate iframe"
      );
      frames.forEach((frame) => {
        (frame as HTMLElement).style.display = "none";
        (frame as HTMLElement).style.visibility = "hidden";
        (frame as HTMLElement).style.height = "0";
      });

      // Ensure body stays at top
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.top = "0px";
        document.body.style.position = "static";
      }
    };

    // Run immediately and repeatedly
    hideGoogleBar();
    window.addEventListener("load", hideGoogleBar);
    const interval = setInterval(hideGoogleBar, 500);
    setTimeout(() => clearInterval(interval), 10000);

    return () => {
      window.removeEventListener("load", hideGoogleBar);
      clearInterval(interval);
    };
  }, []);

  const handleChange = (lang: string) => {
    setCurrentLang(lang);
    setOpen(false);
    
    // Wait for the Google Translate widget to be ready with retry logic
    const triggerTranslation = (retries = 0) => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;
      
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      } else if (retries < 10) {
        // Retry up to 10 times with 200ms delay
        setTimeout(() => triggerTranslation(retries + 1), 200);
      }
    };
    
    setTimeout(() => triggerTranslation(), 100);
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div className="relative flex items-center">
        <button
          className="inline-flex items-center justify-center w-10 h-10 xl:w-14 xl:h-14 
          rounded-full xl:rounded-xl 
          bg-yellow-100 dark:bg-yellow-400 xl:bg-white xl:dark:bg-yellow-100 
          hover:bg-yellow-200 dark:hover:bg-white xl:hover:bg-blue-300 xl:dark:hover:bg-blue-300 
          border-2 border-gray-700 dark:border-white xl:border-2 xl:border-gray-300 xl:dark:border-white 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 cursor-pointer 
          focus:outline-none focus:ring-2 focus:ring-yellow-500/50 
          hover:scale-105 active:scale-95 p-2 xl:p-3"
          onClick={() => setOpen(!open)}
          aria-label="Change language"
        >
          <Image
            src="/images/logo/translation.png"
            alt="Translate"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </button>

        {/* Backdrop overlay for mobile */}
        {open && (
          <div
            className="xl:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={() => setOpen(false)}
          />
        )}

        {open && (
          <div
            ref={dropdownRef}
            className={`
              fixed xl:absolute 
              left-1/2 right-0 bottom-20 xl:left-auto xl:right-0 xl:bottom-auto xl:top-full 
              xl:mt-2 xl:w-40 
              bg-white dark:bg-gray-800 
              border-2 border-gray-200 dark:border-gray-600 
              xl:rounded-xl rounded-tl-2xl rounded-bl-2xl
              shadow-2xl z-50 overflow-hidden
              xl:animate-none
            `}
            style={{
              animation: "slideUpFromBottom 0.3s ease-out",
            }}
          >
            <ul className="py-2 max-h-[60vh] overflow-y-auto">
              {LANGUAGES.map((lang) => (
                <li key={lang.code}>
                  <button
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                      currentLang === lang.code
                        ? "bg-red-100 dark:bg-gray-700 font-bold text-red-700 dark:text-yellow-300"
                        : "text-gray-800 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-gray-700/50"
                    }`}
                    onClick={() => handleChange(lang.code)}
                  >
                    <span className="text-2xl xl:text-xl">{lang.flag}</span>
                    <span className="text-base xl:text-sm font-medium">
                      {lang.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Google Translate Widget - Completely hidden from view and accessibility tree */}
        <div 
          id="google_translate_element" 
          style={{ 
            display: "none", 
            visibility: "hidden", 
            width: 0, 
            height: 0, 
            overflow: "hidden",
            position: "absolute",
            left: "-9999px"
          }} 
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default GoogleTranslateClient;
