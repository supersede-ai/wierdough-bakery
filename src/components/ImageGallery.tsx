import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/micro-interactions.css';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, columns = 3 }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Allow scrolling again
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-4`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="img-hover-zoom card-hover rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <div className="relative group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title && <h3 className="text-xl font-semibold mb-1">{image.title}</h3>}
                  {image.description && <p className="text-sm">{image.description}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                {selectedImage.title && <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>}
                {selectedImage.description && <p className="text-sm">{selectedImage.description}</p>}
              </div>
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.findIndex(img => img.src === selectedImage.src);
                  const prevIndex = (currentIndex - 1 + images.length) % images.length;
                  setSelectedImage(images[prevIndex]);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = images.findIndex(img => img.src === selectedImage.src);
                  const nextIndex = (currentIndex + 1) % images.length;
                  setSelectedImage(images[nextIndex]);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
