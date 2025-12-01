"use client";

import React, { useState, useEffect } from "react";

interface AccessibilityProps {
  isOpen: boolean;
  onClose: () => void;
}

const Accessibility: React.FC<AccessibilityProps> = ({ isOpen, onClose }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [largeFont, setLargeFont] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [screenReaderOnly, setScreenReaderOnly] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  // Accessibility toggles effect
  useEffect(() => {
    document.body.classList.toggle("accessibility-contrast", highContrast);
    document.body.classList.toggle("accessibility-large-font", largeFont);
    document.body.classList.toggle("dyslexia-font", dyslexiaFont);
    document.body.classList.toggle("accessibility-sr-only", screenReaderOnly);
    document.body.classList.toggle("accessibility-underline-links", underlineLinks);
  }, [highContrast, largeFont, dyslexiaFont, screenReaderOnly, underlineLinks]);

  // Trap focus in modal
  useEffect(() => {
    if (!isOpen) return;
    const focusable =
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
    const modal = document.getElementById("accessibility-modal");
    if (!modal) return;
    const focusEls = modal.querySelectorAll(focusable);
    const firstEl = focusEls[0];
    const lastEl = focusEls[focusEls.length - 1];
    function trap(e: KeyboardEvent) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            (lastEl as HTMLElement).focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            (firstEl as HTMLElement).focus();
          }
        }
      }
      if (e.key === "Escape") onClose();
    }
    modal.addEventListener("keydown", trap);
    (firstEl as HTMLElement)?.focus();
    return () => modal.removeEventListener("keydown", trap);
  }, [isOpen, onClose]);

  const resetAccessibility = () => {
    setHighContrast(false);
    setLargeFont(false);
    setDyslexiaFont(false);
    setScreenReaderOnly(false);
    setUnderlineLinks(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      id="accessibility-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg focus:outline-none"
      tabIndex={-1}
    >
      <h2 id="accessibility-modal-title" className="sr-only">Accessibility Options</h2>
      <div
        className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md relative outline-none flex flex-col gap-4"
        tabIndex={0}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-200 flex items-center gap-2 flex-wrap">
          <svg className="w-7 h-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="2.5" />
            <path d="M12 21v-6m0 0c-2.5 0-5-1-7-2m7 2c2.5 0 5-1 7-2M12 15V9m-5 2l-2-2m14 2l2-2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Accessibility Options
        </h2>
        <button
          aria-label="Close accessibility modal"
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 focus:outline-none"
          onClick={onClose}
          style={{ fontSize: '1.2em' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="space-y-5 mt-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-medium break-words">High Contrast</span>
            <button
              className={`min-w-[3.5rem] h-9 flex items-center rounded-full p-1 duration-300 focus:outline-none ${highContrast ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-pressed={highContrast}
              onClick={() => setHighContrast(v => !v)}
              style={{ fontSize: '1.1em' }}
              aria-label="Toggle high contrast mode"
            >
              <span className={`h-6 w-6 rounded-full bg-white shadow-md transform duration-300 ${highContrast ? 'translate-x-6' : ''}`}></span>
            </button>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-medium break-words">Large Font</span>
            <button
              className={`min-w-[3.5rem] h-9 flex items-center rounded-full p-1 duration-300 focus:outline-none ${largeFont ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-pressed={largeFont}
              onClick={() => setLargeFont(v => !v)}
              style={{ fontSize: '1.1em' }}
              aria-label="Toggle large font mode"
            >
              <span className={`h-6 w-6 rounded-full bg-white shadow-md transform duration-300 ${largeFont ? 'translate-x-6' : ''}`}></span>
            </button>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-medium break-words">Dyslexia Font</span>
            <button
              className={`min-w-[3.5rem] h-9 flex items-center rounded-full p-1 duration-300 focus:outline-none ${dyslexiaFont ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-pressed={dyslexiaFont}
              onClick={() => setDyslexiaFont(v => !v)}
              style={{ fontSize: '1.1em' }}
              aria-label="Toggle dyslexia font mode"
            >
              <span className={`h-6 w-6 rounded-full bg-white shadow-md transform duration-300 ${dyslexiaFont ? 'translate-x-6' : ''}`}></span>
            </button>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-medium break-words">Screen Reader Only</span>
            <button
              className={`min-w-[3.5rem] h-9 flex items-center rounded-full p-1 duration-300 focus:outline-none ${screenReaderOnly ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-pressed={screenReaderOnly}
              onClick={() => setScreenReaderOnly(v => !v)}
              style={{ fontSize: '1.1em' }}
              aria-label="Toggle screen reader only mode"
            >
              <span className={`h-6 w-6 rounded-full bg-white shadow-md transform duration-300 ${screenReaderOnly ? 'translate-x-6' : ''}`}></span>
            </button>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-medium break-words">Underline Links</span>
            <button
              className={`min-w-[3.5rem] h-9 flex items-center rounded-full p-1 duration-300 focus:outline-none ${underlineLinks ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-pressed={underlineLinks}
              onClick={() => setUnderlineLinks(v => !v)}
              style={{ fontSize: '1.1em' }}
              aria-label="Toggle underline links mode"
            >
              <span className={`h-6 w-6 rounded-full bg-white shadow-md transform duration-300 ${underlineLinks ? 'translate-x-6' : ''}`}></span>
            </button>
          </div>
          <div className="pt-2">
            <details className="group">
              <summary className="font-medium cursor-pointer text-blue-700 dark:text-blue-200">Keyboard Navigation Help</summary>
              <ul className="mt-2 ml-4 text-sm text-gray-700 dark:text-gray-200 list-disc space-y-1">
                <li><b>Tab</b>: Move to next focusable element</li>
                <li><b>Shift + Tab</b>: Move to previous focusable element</li>
                <li><b>Enter/Space</b>: Activate button or link</li>
                <li><b>Escape</b>: Close modals or menus</li>
              </ul>
            </details>
          </div>
        </div>
        <button
          className="w-full mt-4 py-3 rounded-xl bg-gray-600 hover:bg-gray-300 text-gray-100 dark:text-gray-1t600 font-bold text-lg transition-all duration-200 focus:outline-none border border-gray-400"
          onClick={resetAccessibility}
          style={{ fontSize: '1.1em' }}
          aria-label="Reset accessibility settings"
        >
          Reset Accessibility
        </button>
      </div>
    </div>
  );
};

export default Accessibility;
