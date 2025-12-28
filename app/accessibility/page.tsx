import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Himalayan Kitchen Marin',
  description: 'Learn about our commitment to making our website accessible to everyone.',
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen  duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/himalayan-kitchen-logo.png"
            alt="Himalayan Kitchen Marin Logo"
            width={200}
            height={200}
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
            priority
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Accessibility Statement for Himalayan Kitchen Marin
          </h1>
          
          {/* View PDF Button */}
          <div className="flex justify-center mt-6">
            <a
              href="/accessibility-statement.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-orange-700 hover:no-underline text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="View accessibility statement as PDF"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              View as PDF
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This is an accessibility statement from <strong>Himalayan Kitchen Marin</strong>.
            </p>
          </section>

          {/* Measures to support accessibility */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Measures to support accessibility
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Himalayan Kitchen Marin takes the following measures to ensure accessibility of Himalayan Kitchen Marin:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Integrate accessibility into our procurement practices.</li>
              <li>Regularly review the website using accessibility tools</li>
              <li>Include accessibility as part of our organizational values.</li>
            </ul>
          </section>

          {/* Conformance status */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Conformance status
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 underline transition-colors" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Himalayan Kitchen Marin is <strong>partially conformant</strong> with <strong>WCAG 2.1 level AA</strong>. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-6">
              Additional accessibility considerations
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Although our goal is WCAG 2.1 Level AA conformance, we have also applied some Level AAA Success Criteria. Images of text have been eliminated as much as possible and are used only for decorative purposes. We aim to use semantic HTML, sufficient color contrast, and keyboard-accessible navigation to improve accessibility for all users.
            </p>
          </section>

          {/* Feedback */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Feedback
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We welcome your feedback on the accessibility of Himalayan Kitchen Marin. Please let us know if you encounter accessibility barriers on Himalayan Kitchen Marin:
            </p>
            <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone:</p>
                  <a 
                    href="tel:+14155263161"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                  >
                    415 526 3161
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">E-mail:</p>
                  <a 
                    href="mailto:himalayankitchenmarin@gmail.com"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors underline break-all"
                  >
                    himalayankitchenmarin@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Visitor Address:</p>
                  <p className="text-gray-700 dark:text-gray-300">227 3rd St, San Rafael, CA 94901</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <Link 
                    href="/contact-us"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors underline break-all"
                  >
                    https://www.himalayankitchenmarin.com/contact-us
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We try to respond to feedback within <strong>2 business days</strong>.
            </p>
          </section>

          {/* Compatibility with browsers and assistive technology */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Compatibility with browsers and assistive technology
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Himalayan Kitchen Marin is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 ml-4 mb-4">
              <li>Modern web browsers (Chrome, Firefox, Safari, Edge) with screen readers such as NVDA or JAWS on Windows</li>
              <li>Safari with VoiceOver on macOS and iOS</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Himalayan Kitchen Marin is not compatible with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Browsers and operating systems older than three major versions</li>
              <li>Internet Explorer</li>
            </ul>
          </section>

          {/* Technical specifications */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technical specifications
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Accessibility of Himalayan Kitchen Marin relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 ml-4 mb-4">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>
          </section>

          {/* Limitations and alternatives */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Limitations and alternatives
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Despite our best efforts to ensure accessibility of Himalayan Kitchen Marin, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Known limitations for Himalayan Kitchen Marin:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-base sm:text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>
                <strong>Third-party embedded content (online ordering, maps, social media):</strong> Some third-party content may not fully meet WCAG 2.1 Level AA accessibility requirements because these features are provided by external vendors and are not fully under our control. We select vendors with accessibility in mind and encourage continued improvements to their platforms. If you experience difficulty, please contact us by email or phone and we will provide assistance or an alternative.
              </li>
            </ol>
          </section>

          {/* Assessment approach */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Assessment approach
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Himalayan Kitchen Marin assessed the accessibility of Himalayan Kitchen Marin by the following approaches:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300 ml-4">
              <li>Self-evaluation</li>
              <li>Accessibility was evaluated using automated testing tools and manual review.</li>
            </ul>
          </section>

          {/* Formal complaints */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Formal complaints
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              If you are not satisfied with our response, please contact us using the details above and we will make every reasonable effort to resolve the issue.
            </p>
          </section>

          {/* Formal approval */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Formal approval of this accessibility statement
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              This Accessibility Statement is approved by:
            </p>
            <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-6">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Himalayan Kitchen Marin</strong><br />
                Management, Himalayan Kitchen Marin<br />
                Owner, Himalayan Kitchen Marin
              </p>
            </div>
          </section>

          {/* Date */}
          <section className="border-t border-gray-300 dark:border-gray-600 pt-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Date
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This statement was created on <strong>28 December 2025</strong> using the <a href="https://www.w3.org/WAI/planning/statements/" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 underline transition-colors" target="_blank" rel="noopener noreferrer">W3C Accessibility Statement Generator Tool</a>.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-orange-700 hover:no-underline text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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
