import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

// Bundle analyzer configuration
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.storyblok.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img2.storyblok.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Loader configuration for optimal quality
    loader: 'default',
    // Disable static image imports optimization to ensure all images go through Next.js Image Optimization
    unoptimized: false,
  },

  // Compiler optimizations
  compiler: {
    // Keep console logs for debugging - can be re-enabled later if needed
    removeConsole: false,
  },

  // Performance optimizations
  compress: true,
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Security headers and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.userway.org https://acc.userway.org https://www.googletagmanager.com https://order.toasttab.com https://www.facebook.com https://connect.facebook.net https://www.instagram.com https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com https://app.storyblok.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.userway.org https://translate.googleapis.com https://www.gstatic.com; font-src 'self' https://fonts.gstatic.com https://cdn.userway.org data:; img-src 'self' data: https: blob: http://translate.google.com https://a.storyblok.com https://*.storyblok.com; connect-src 'self' https://cdn.userway.org https://acc.userway.org https://api.userway.org https://www.google-analytics.com https://www.facebook.com https://www.instagram.com https://translate.googleapis.com https://translate-pa.googleapis.com https://api.storyblok.com https://api-us.storyblok.com; frame-src 'self' https://cdn.userway.org https://acc.userway.org https://order.toasttab.com https://www.google.com https://www.facebook.com https://www.instagram.com https://translate.google.com https://translate.googleapis.com https://app.storyblok.com; object-src 'none'; base-uri 'self';"
          }
        ],
      },
      // Cache static assets aggressively
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Optimize static assets caching
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  },
};

// Export config with bundle analyzer wrapper
export default withBundleAnalyzer(nextConfig);

