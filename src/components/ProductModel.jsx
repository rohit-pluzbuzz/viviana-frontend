// src/components/ProductModal.jsx
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faPinterest, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function ProductModal({ product, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product]);

  if (!product) return null;

  const images = Array.isArray(product.images)
    ? product.images.map(img => `http://localhost:5000${img}`)
    : [];

  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
      <div className="bg-[#f2f2f2] rounded-2xl shadow-lg md:overflow-hidden overflow-y-auto w-[90%] max-w-6xl px-8 py-10 relative mx-auto lg:my-12 h-[90vh] md:h-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-500 hover:text-black text-2xl font-bold z-10"
        >
          ✕
        </button>

        <div className="flex flex-col lg:flex-row lg:gap-10" data-aos="fade-up">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative h-[250px] md:h-[350px] lg:h-[450px] bg-white rounded-xl overflow-hidden shadow border border-gray-300">
              {images.length > 0 ? (
                <img
                  src={images[activeImageIndex]}
                  alt={`Product Image ${activeImageIndex}`}
                  className="w-full h-full object-cover md:object-contain lg:object-cover transition-all duration-300 md:scale-200 lg:scale-none"
                  data-aos="zoom-in"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500 text-lg">
                  No image available
                </div>
              )}

              {/* Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-[#800080] px-3 p-1 rounded-full shadow hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#800080] px-3 p-1 rounded-full shadow hover:bg-gray-100"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="my-4 flex justify-center items-center gap-3 overflow-hidden">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-16 h-16 rounded-lg border-2 overflow-hidden transition-transform duration-300 ${
                      index === activeImageIndex
                        ? 'border-[#9D7052] scale-105'
                        : 'border-gray-300 hover:border-[#9D7052]'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 space-y-1 lg:space-y-12">
            {/* Breadcrumb */}
            <nav
              className="text-sm text-gray-500"
              aria-label="Breadcrumb"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="hover:text-[#9D7052]">
                    Home
                  </a>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <a href="/products" className="hover:text-[#9D7052]">
                    Products
                  </a>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <span className="text-[#9D7052]">{product.name}</span>
                </li>
              </ol>
            </nav>

            <h1
              className=" !text-xl lg:text-4xl font-extrabold text-[#800080] uppercase"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {product.name || "N/A"}
            </h1>

            <div data-aos="fade-left" data-aos-delay="300">
              <h2 className="text-md md:text-2xl font-semibold text-black border-b-2 border-[#800080] pb-1 inline-block">
                Description
              </h2>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-sm"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="flex gap-2">
                <span className="font-semibold">Item Name :</span>
                <span className="text-[#800080]">{product.name || "N/A"}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Item Code :</span>
                <span className="text-[#800080]">{product.code || "N/A"}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Weight :</span>
                <span className="text-[#800080]">{product.weight || "N/A"}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Capacity :</span>
                <span className="text-[#800080]">{product.capacity || "N/A"}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Dimension :</span>
                <span className="text-[#800080]">{product.dimensions || "N/A"}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Category :</span>
                <span className="text-[#800080]">{product.category || "N/A"}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div
              className="pt-4 border-t border-gray-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="text-gray-700 font-semibold mb-3">Share :</p>
              <div className="flex items-center gap-5 text-[#800080] text-2xl">
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
