"use client";
import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import { featuresTranslations } from "../translations/home";
import Image from "next/image";

export default function Features() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const t = featuresTranslations[language];

  return (
    <section className="flex flex-col lg:flex-row items-center px-6 py-12 gap-8 bg-gray-100 rounded-lg">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-gray-900">{t.heading}</h2>
        <p className="mt-4 text-gray-600">{t.description}</p>

        {/* Accordion Section */}
        <div className="mt-6">
          {t.features.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {/* Accordion Header */}
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-medium ${
                    activeIndex === index ? "text-purple-600" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <span
                  className={`text-xl transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⌄
                </span>
              </div>

              {/* Accordion Content */}
              {activeIndex === index && (
                <p className="mt-4 text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-[400px] h-[300px] lg:w-[500px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/features/IMG_7124.webp"
            alt={language === "en" ? "Workspace Image" : "Gambar Tempat Kerja"}
            className="w-full h-full object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
}
