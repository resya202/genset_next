"use client";

import React from "react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 bg-primaryDarkBlue p-6 rounded-lg">
      {images.map((src, index) => (
        <a
          key={index}
          href={src} // Open the image URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Ensure security
          className="flex items-center justify-center bg-gray-300 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  );
}
