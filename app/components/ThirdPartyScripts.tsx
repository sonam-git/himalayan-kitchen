'use client';

import Script from 'next/script';

/**
 * Third-party scripts with optimized loading strategies
 * Loads non-critical scripts after the page is interactive
 */
export default function ThirdPartyScripts() {
  return (
    <>
      {/* UserWay Accessibility Widget Configuration */}
      <Script
        id="userway-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                if (typeof window !== 'undefined') {
                  window.interdeal = {
                    "sitekey": "meCuNxAYOV",
                    "Position": "Left",
                    "Menulang": "EN",
                    "domains": {
                      "js": "https://cdn.userway.org/",
                      "acc": "https://acc.userway.org/"
                    },
                    "Trigger": "auto",
                    "btnColor": "#FFC107",
                    "iconColor": "#000000",
                    "iconType": "accessible",
                    "Mobile": {
                      "Position": "Left"
                    }
                  };
                }
              } catch (e) {
                console.warn('UserWay config initialization error:', e);
              }
            })();
          `,
        }}
      />
      
      {/* UserWay Accessibility Widget - Load after interactive */}
      <Script
        id="userway-accessibility"
        src="https://cdn.userway.org/widget.js"
        data-account="meCuNxAYOV"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('UserWay accessibility widget loaded successfully');
        }}
        onError={(e) => {
          console.warn('UserWay widget failed to load:', e);
        }}
      />

      {/* Force UserWay button to bottom-left corner */}
      <Script
        id="userway-position-override"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                if (typeof window === 'undefined' || typeof document === 'undefined') {
                  return;
                }
                
                /* Wait for UserWay to load and apply positioning */
                var checkUserWay = setInterval(function() {
                  try {
                    var userwayBtn = document.querySelector('[data-uw-rm-brl="floating"]') || 
                                    document.querySelector('#userway_p1') ||
                                    document.querySelector('.userway_buttons_wrapper');
                    
                    if (userwayBtn) {
                      clearInterval(checkUserWay);
                      
                      /* Apply bottom-left positioning */
                      var style = document.createElement('style');
                      style.id = 'userway-position-styles';
                      style.textContent = 
                        '/* Force UserWay button to bottom-left on all screens */' +
                        '[data-uw-rm-brl="floating"],' +
                        '#userway_p1,' +
                        '.userway_buttons_wrapper {' +
                        '  position: fixed !important;' +
                        '  bottom: 32px !important;' +
                        '  left: 48px !important;' +
                        '  right: auto !important;' +
                        '  top: auto !important;' +
                        '  z-index: 9999 !important;' +
                        '}' +
                        '/* Tablet screens */' +
                        '@media (max-width: 1280px) {' +
                        '  [data-uw-rm-brl="floating"],' +
                        '  #userway_p1,' +
                        '  .userway_buttons_wrapper {' +
                        '    bottom: 28px !important;' +
                        '    left: 40px !important;' +
                        '  }' +
                        '}' +
                        '/* Mobile responsiveness - above bottom navigation bar */' +
                        '@media (max-width: 1024px) {' +
                        '  [data-uw-rm-brl="floating"],' +
                        '  #userway_p1,' +
                        '  .userway_buttons_wrapper {' +
                        '    bottom: 100px !important;' +
                        '    left: 48px !important;' +
                        '  }' +
                        '}' +
                        '/* Extra small screens */' +
                        '@media (max-width: 640px) {' +
                        '  [data-uw-rm-brl="floating"],' +
                        '  #userway_p1,' +
                        '  .userway_buttons_wrapper {' +
                        '    bottom: 98px !important;' +
                        '    left: 40px !important;' +
                        '  }' +
                        '}';
                      
                      if (document.head && !document.getElementById('userway-position-styles')) {
                        document.head.appendChild(style);
                        console.log('UserWay button positioned to bottom-left');
                      }
                    }
                  } catch (err) {
                    console.warn('UserWay positioning error:', err);
                    clearInterval(checkUserWay);
                  }
                }, 200);
                
                /* Cleanup after 10 seconds */
                setTimeout(function() { 
                  try {
                    clearInterval(checkUserWay);
                  } catch (e) {}
                }, 10000);
              } catch (e) {
                console.warn('UserWay position override initialization error:', e);
              }
            })();
          `,
        }}
      />

      {/* Google Analytics - Load after interactive (if you add it) */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Vercel Analytics (if installed) */}
      {process.env.NEXT_PUBLIC_VERCEL_ANALYTICS && (
        <Script
          src="https://va.vercel-scripts.com/v1/script.debug.js"
          strategy="afterInteractive"
          data-mode="auto"
        />
      )}
    </>
  );
}
