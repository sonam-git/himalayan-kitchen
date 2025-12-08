/**
 * Critical CSS Component
 * Inlines critical CSS to reduce render-blocking
 * This should be included in the <head> of layout.tsx
 * 
 * Note: Disabled in Next.js 16 with Turbopack due to hydration issues
 * Critical styles are now in globals.css
 */
export default function CriticalCSS() {
  // Return null in development/Turbopack mode to avoid [object HTMLLinkElement] error
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  return (
    <style
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS - Above-the-fold styles */
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            -webkit-text-size-adjust: 100%;
            scroll-behavior: smooth;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* Header critical styles */
          header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            background: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          @media (prefers-color-scheme: dark) {
            header {
              background: #111827;
            }
          }

          /* Hero section critical styles */
          .hero-section {
            position: relative;
            width: 100%;
            height: 100vh;
            min-height: 500px;
            max-height: 900px;
            overflow: hidden;
          }

          /* Prevent layout shift */
          .aspect-ratio-box {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
          }

          /* Loading state */
          .skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s ease-in-out infinite;
          }

          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }

          /* Utility classes for above-the-fold content */
          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .flex {
            display: flex;
          }

          .items-center {
            align-items: center;
          }

          .justify-between {
            justify-content: space-between;
          }

          /* Prevent cumulative layout shift */
          img, video {
            max-width: 100%;
            height: auto;
            display: block;
          }

          /* Hide non-critical content initially */
          .below-fold {
            content-visibility: auto;
            contain-intrinsic-size: 1px 500px;
          }
        `,
      }}
    />
  );
}
