"use client";
import React from "react";
import Image from "next/image";
import { squareLogos } from "@/app/data/logos";
import { useLanguage } from "@/app/context/languageContext";
import { collageData } from "@/app/translations/client";

const CollageWithLogos = () => {
  const { language } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        We&apos;re many brilliant minds, collaborating on the same platform
      </h2>
      <p className="text-center text-gray-600 mb-8">
        At Pagedone, we foster a culture of adaptability and youthful
        innovation, leveraging our state-of-the-art technology to rapidly adjust
        to market research, conditions, and customer needs.
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

      {/* Logos Section */}
      <div className="mt-16 w-full">
        <h3 className="text-2xl font-bold text-center mb-6">Other Clients</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-8 p-4 w-[50rem]">
            {squareLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-24 h-24 bg-white border shadow-sm rounded-lg flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollageWithLogos;
