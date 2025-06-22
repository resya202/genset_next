"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/languageContext";
import { ClientPage, collageData } from "@/app/translations/client";
import LogosWithText from "./logosWithText";

const CollageWithLogos = () => {
  const { language } = useLanguage();
    const t = ClientPage[language];

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        {t.passion}
      </h2>
      <p className="text-center text-gray-600 mb-8">
        {t.atBPN}
      </p>
      <div className="space-y-12">
        {collageData.map((row, index) => {
          const { title, description } = row.translation[language];
          const images = row.images;

          return (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 items-center justify-center"
            >
              {/* Left two images */}
              <div className="grid grid-rows-2 gap-4">
                <div className="relative w-full h-40 border">
                  <Image
                    src={images[0]}
                    alt={`Collage Image ${index}-1`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-full h-40 border">
                  <Image
                    src={images[1]}
                    alt={`Collage Image ${index}-2`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Main large image */}
              <div className="relative w-[30rem] h-96 col-span-2">
                <Image
                  src={images[2]}
                  alt={`Collage Image ${index}-3`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Right-side text */}
              <div className="col-span-2 flex flex-col justify-center items-center">
                <div className="flex w-28 h-28 relative bg-white rounded-full overflow-hidden border mb-4">
                  <Image
                    src={images[3]}
                    alt={`Logo ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <LogosWithText />
    </section>
  );
};

export default CollageWithLogos;
