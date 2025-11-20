"use client";
import Image from "next/image";
import { useState } from "react";

const AwardsMedia = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const images = [
    {
      src: "/images/awards/hk-rg1.jpg",
      alt: "Award Certificate",
      caption: "Certificate of Excellence"
    },
    {
      src: "/images/awards/hk-news.jpg",
      alt: "News Media",
      caption: "Local News Media Recognition"
    },
    {
      src: "/images/awards/hk-rg2.jpg",
      alt: "Google Guru Article",
      caption: "Featured in Google Guru"
    }
  ];

  const openModal = (src: string, alt: string) => {
    setModalImg(src);
    setModalAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section id="awards" className="relative py-20 sm:py-24 lg:py-28 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full rounded-2xl sm:rounded-3xl">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
         {/* Image as Section Background with Blur Overlay */}
         <div className="absolute inset-0 w-full h-full z-0">
           <Image
             src="/images/other/backdrop.png"
             alt="Menu Background"
             fill
             priority
             className="object-cover w-full h-full rounded-2xl sm:rounded-3xl  opacity-100"
           />
            <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 dark:from-black/80 dark:via-gray-900/70 dark:to-black/80 rounded-2xl sm:rounded-3xl"></div>
         </div>
      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-linear-to-r from-orange-500/10 to-red-500/10 dark:from-orange-400/20 dark:to-red-400/20 border border-orange-200/50 dark:border-orange-700/50 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Recognitions & Press
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-yellow-200 dark:text-gray-50 mb-6">
            Awards & <span className="bg-linear-to-r from-orange-600 via-red-600 to-orange-600 dark:from-orange-400 dark:via-red-400 dark:to-orange-400 bg-clip-text text-transparent">Media</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-100 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Honored by the community and featured in renowned publications for our culinary excellence and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center justify-center">
          {images.map((img) => (
            <div key={img.src} className="flex flex-col items-center">
              <button
                className="focus:outline-none"
                onClick={() => openModal(img.src, img.alt)}
                aria-label={`View full ${img.alt}`}
              >
                <Image src={img.src} alt={img.alt} width={400} height={288} className="rounded-xl shadow-lg w-full h-72 object-cover mb-4 transition-transform duration-200 hover:scale-105 cursor-pointer" />
              </button>
              <p className="text-gray-700 dark:text-gray-200 font-semibold text-center">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full image view */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeModal}>
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 focus:outline-none"
              onClick={closeModal}
              aria-label="Close full image view"
            >
              &times;
            </button>
            <Image src={modalImg} alt={modalAlt} width={900} height={650} className="rounded-xl shadow-2xl w-full h-auto max-h-[80vh] object-contain" />
            <p className="mt-6 text-lg text-white font-semibold text-center drop-shadow-lg">
              {images.find(img => img.src === modalImg)?.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsMedia;
