"use client";

import { useState } from "react";
import Image from "next/image";

type WorksLightboxProps = {
  images: string[];
  altPrefix?: string;
};

export default function WorksLightbox({ images, altPrefix = "Work" }: WorksLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => open(i)}
            className="relative aspect-square overflow-hidden shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 group"
            aria-label={`${altPrefix} ${i + 1}, open full view`}
          >
            <Image src={src} alt={`${altPrefix} ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={close}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] sm:h-[80vh]">
              <Image
                src={images[activeIndex]}
                alt={`${altPrefix} ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


