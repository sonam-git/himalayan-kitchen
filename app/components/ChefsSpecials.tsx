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
      src: "/images/awards/hk-rg2.jpg",
      alt: "Google Guru Article",
      caption: "Featured in Google Guru"
    },
    {
      src: "/images/awards/hk-news.jpg",
      alt: "News Media",
      caption: "Local News Media Recognition"
    }
  ];

  const openModal = (src: string, alt: string) => {
    setModalImg(src);
    setModalAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section id="awards" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden w-full rounded-2xl sm:rounded-3xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Awards & Media</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
