/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/languageContext";
import { featuresTranslations } from "../translations/home";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

export default function Features() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const componentRef = useRef<HTMLDivElement>(null);

  const t = featuresTranslations[language] || featuresTranslations["en"];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Intersection Observer to detect when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when in view
        }
      },
      { threshold: 0.2 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={componentRef}
      className={`flex flex-col lg:flex-row items-center px-6 py-12 gap-8 bg-gray-100 rounded-lg transition-transform duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-gray-900">{t.heading}</h2>
        <p className="mt-4 text-gray-600">{t.description}</p>

        {/* Accordion Section */}
        <div className="mt-6">
          {t.features.map((item, index) => (
            <div
              key={index}
              className="accordion-item border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {/* Accordion Header */}
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-medium ${
                    activeIndex === index ? "text-tealGreen" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <span
                  className={`text-xl transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaArrowDown className="text-xl text-tealGreen" />
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
        <div className="relative image-container w-[400px] h-[300px] lg:w-[500px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/features/IMG_7124.webp"
            alt={t.heading || "Workspace Image"}
            className="w-full h-full object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
}
