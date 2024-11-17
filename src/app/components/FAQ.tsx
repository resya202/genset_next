/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../context/languageContext";
import { faqTranslations } from "../translations/home";
import { BiSupport } from "react-icons/bi";

export default function FAQ() {
  const { language } = useLanguage();
  const [isFAQVisible, setIsFAQVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Get translations for the current language
  const t = faqTranslations[language];

  // Use IntersectionObserver to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === faqRef.current) {
              setIsFAQVisible(true);
            }
            if (entry.target === imageRef.current) {
              setIsImageVisible(true);
            }
            if (entry.target === buttonRef.current) {
              setIsButtonVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (faqRef.current) observer.observe(faqRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (faqRef.current) observer.unobserve(faqRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className="shadow-md py-12 px-6 mt-20">
      <div className="flex flex-col lg:flex-row items-start gap-8 max-w-7xl mx-auto">
        {/* FAQ Section */}
        <div className="lg:w-2/3">
          <h2 className="text-center lg:text-left text-3xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <div
            ref={faqRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-transform duration-700 ${
              isFAQVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {t.faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-primaryOrange transition-shadow`}
              >
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-primaryBlack text-white rounded-full">
                    ?
                  </span>
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div
            ref={buttonRef}
            className={`mt-8 bg-white p-6 rounded-lg shadow-md text-center lg:text-left flex justify-center flex-col items-center transition-transform duration-700 ${
              isButtonVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <p className="text-gray-600">{t.contactPrompt}</p>
            <button className="mt-4 flex items-center justify-center gap-2 bg-primaryBlack text-white text-lg font-medium px-6 py-3 rounded-full hover:bg-primaryOrange transition">
              <BiSupport className="text-2xl" />
              {t.contactLink}
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`lg:w-1/3 flex justify-center items-center transition-transform duration-700 ${
            isImageVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          <div className="relative w-full h-[300px] lg:h-[46rem] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/FAQ/IMG_7299.webp"
              alt={
                language === "en"
                  ? "Frequently Asked Questions Illustration"
                  : "Ilustrasi Pertanyaan yang Sering Diajukan"
              }
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
