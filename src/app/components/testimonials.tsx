"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/languageContext";
import { testimonialsTranslations } from "../translations/home"; // Assuming this file exists
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Review = {
  id: number;
  src: string;
  name: string;
  from: string;
  companyName: string;
  testimonial: string;
};

export default function Testimonials() {
  const { language } = useLanguage();
  const t = testimonialsTranslations[language]; // Get translations

  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === t.reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [t.reviews.length]);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === t.reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? t.reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      aria-label="user-testimonials"
      className="text-white font-semibold rounded-lg mt-20 bg-white"
    >
      <div
        aria-label="testimonials-headers"
        className="header margin-auto flex flex-col gap-4 text-center mb-12 bg-primaryDarkBlue py-4 rounded-tr-lg rounded-tl-lg"
      >
        <h2 className="text-3xl font-bold">{t.title}</h2>
        <p className="text-sm max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div
        aria-label="testimonials-body"
        className="relative h-[40rem] mx-auto overflow-hidden rounded-lg shadow-lg"
      >
        <button
          aria-label="previous-slide"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-primaryDarkBlue text-white rounded-full p-3 hover:bg-primaryOrange transition"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          aria-label="next-slide"
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-primaryDarkBlue text-white rounded-full p-3 hover:bg-primaryOrange transition"
        >
          <FaArrowRight size={20} />
        </button>

        {/* Image and testimonial */}
        {t.reviews.map((el: Review, index: number) => (
          <div
            key={el.id}
            className={`absolute inset-0 flex flex-col items-center text-center pb-10 transition-opacity duration-1000 ease-in-out px-4 ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="w-full h-96 relative rounded-lg overflow-hidden">
              <Image
                src={el.src}
                alt={el.name}
                fill
                sizes="(min-width: 768px) 900px, 500px"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-primaryDarkBlue p-6 mt-6 rounded-lg max-w-2xl">
              <p className="text-lg italic mb-4">{el.testimonial}</p>
              <p className="font-bold">{el.name}</p>
              <p className="text-sm">{el.companyName}</p>
            </div>
          </div>
        ))}

        {/* Dots for navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {t.reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex
                  ? "bg-primaryOrange"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
