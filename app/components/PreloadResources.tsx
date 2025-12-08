/**
 * PreloadResources Component
 * Preloads critical resources to improve performance
 * Should be included in the <head> of layout.tsx
 */
export default function PreloadResources() {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/fonts/geist-sans.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/geist-mono.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Preload hero image */}
      <link
        rel="preload"
        href="/images/food-photo1.jpg"
        as="image"
        type="image/jpeg"
        fetchPriority="high"
      />

      {/* Preload logo */}
      <link
        rel="preload"
        href="/images/hk-logo.jpg"
        as="image"
        type="image/jpeg"
        fetchPriority="high"
      />

      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://cdn.userway.org" />
      <link rel="dns-prefetch" href="https://order.toasttab.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* Preconnect to critical third-party origins */}
      <link rel="preconnect" href="https://cdn.userway.org" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
}
