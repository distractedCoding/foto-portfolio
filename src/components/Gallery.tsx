"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getAspectClass = (ratio?: string, index?: number) => {
    if (ratio === "square") return "aspect-square";
    if (ratio === "portrait") return "aspect-[3/4]";
    if (ratio === "landscape") return "aspect-[4/3]";
    // Default: alternate between ratios for visual interest
    if (index !== undefined) {
      const patterns = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]"];
      return patterns[index % patterns.length];
    }
    return "aspect-[4/5]";
  };

  const columnClass = {
    2: "sm:columns-2",
    3: "sm:columns-2 lg:columns-3",
    4: "sm:columns-2 lg:columns-3 xl:columns-4",
  };

  return (
    <>
      <div className={`columns-1 ${columnClass[columns]} gap-4`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4"
          >
            <button
              onClick={() => openLightbox(index)}
              className="relative w-full overflow-hidden group cursor-zoom block"
            >
              <div className={`relative ${getAspectClass(image.aspectRatio, index)} bg-neutral-200`}>
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 group-hover:text-neutral-500 transition-colors">
                    <span className="text-sm">Bild {index + 1}</span>
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
                
                {/* Title on hover */}
                {image.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-light">{image.title}</p>
                  </div>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
