import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Himalayan Kitchen Marin',
  description: 'Learn about our commitment to making our website accessible to everyone.',
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            📘 Accessibility Statement
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            Himalayan Kitchen Marin
          </h2>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold">Himalayan Kitchen Marin</span> is committed to making our website accessible to people with disabilities and ensuring a great user experience for everyone.
            </p>
          </section>

          {/* Conformance */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Conformance
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We strive to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA to make our website easier to use and more accessible to individuals with a wide range of disabilities. While we aim for full compliance, some parts of the site may not yet meet these guidelines fully.
            </p>
          </section>

          {/* Third-Party Content */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Third-Party Content
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our website may include content from third-party services (such as online ordering, social media, reviews, reservation systems, and maps). We encourage these vendors to provide accessible content, but we are not responsible for content hosted or controlled by external providers.
            </p>
          </section>

          {/* Feedback */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Feedback
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions to improve accessibility, please let us know:
            </p>
            <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email:</p>
                  <a 
                    href="mailto:himalayankitchenmarin@gmail.com"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors underline"
                  >
                    himalayankitchenmarin@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone:</p>
                  <a 
                    href="tel:+14155263161"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                  >
                    (415) 526-3161
                  </a>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We aim to respond to accessibility feedback within 2 business days and to address concerns as promptly as possible.
            </p>
          </section>

          {/* Assistance */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Assistance
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              If you need assistance accessing any part of our website or have difficulty using any content, please call during our regular business hours. We&apos;re happy to help!
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700  text-gray-800 dark:text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
