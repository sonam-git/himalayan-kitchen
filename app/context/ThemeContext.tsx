"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    let shouldBeDark;
    if (savedTheme) {
      shouldBeDark = savedTheme === 'dark';
    } else {
      // Default to dark mode if no theme is set
      shouldBeDark = true;
    }
    if (shouldBeDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    requestAnimationFrame(() => {
      setIsDarkMode(shouldBeDark);
      setMounted(true);
    });
  }, []);

  // Update theme when isDarkMode changes
  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;
    console.log('[ThemeProvider] isDarkMode:', isDarkMode, '| mounted:', mounted);

    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    console.log('[ThemeProvider] html.classList:', html.classList.value);
  }, [isDarkMode, mounted]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      console.log('[ThemeProvider] toggleTheme called. Next isDarkMode:', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
