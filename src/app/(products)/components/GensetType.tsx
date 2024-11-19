"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { translationObject } from "@/app/translations/products";
import { useLanguage } from "@/app/context/languageContext";
import { BiSupport } from "react-icons/bi";

const GensetTypes = () => {
  const { language } = useLanguage();
  const t = translationObject[language];
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power1.out", duration: 0.8 },
      });

      // Animate left section elements
      timeline
        .from(".open-generator", { x: -50, opacity: 0 })
        .from(".open-generator h2", { x: -50, opacity: 0 }, "-=0.4")
        .from(".open-generator p", { x: -50, opacity: 0 }, "-=0.4")
        .from(".open-generator button", { x: -50, opacity: 0 }, "-=0.4");

      // Animate right section elements
      gsap.from(".silent-generator", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: timeline.duration(),
        ease: "power1.out",
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      className="py-12 px-6 bg-white w-full p-6 rounded-lg shadow-md mt-20"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-primaryDarkBlue mb-12">
        {t.title}
      </h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Open Generator Type */}
        <div className="open-generator flex flex-col md:flex-row items-center space-x-6 w-full md:w-1/2">
          <div className="relative w-64 h-40 rounded-lg flex-shrink-0">
            <Image
              src="/genset/open.png"
              alt={t.openGenerator.title}
              fill
              className="object-contain rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primaryDarkBlue mb-4">
              {t.openGenerator.title}
            </h2>
            <p className="text-gray-600 mb-4">{t.openGenerator.description}</p>
            <button className="bg-primaryOrange text-primaryDarkBlue rounded-lg hover:bg-primaryDarkBlue hover:text-white flex items-center gap-2 p-4">
              <BiSupport className="text-2xl" />

              {t.openGenerator.buttonText}
            </button>
          </div>
        </div>

        {/* Silent Generator Type */}
        <div className="silent-generator flex flex-col md:flex-row items-center space-x-6 w-full md:w-1/2">
          <div className="relative w-64 h-40 flex-shrink-0 rounded-lg">
            <Image
              src="/genset/silent.png"
              alt={t.silentGenerator.title}
              fill
              className="object-contain rounded-lg overflow-hidden"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primaryDarkBlue mb-4">
              {t.silentGenerator.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {t.silentGenerator.description}
            </p>
            <button className="bg-primaryOrange text-primaryDarkBlue rounded-lg hover:bg-primaryDarkBlue hover:text-white flex items-center gap-2 p-4">
              <BiSupport className="text-2xl" />
              {t.silentGenerator.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GensetTypes;
