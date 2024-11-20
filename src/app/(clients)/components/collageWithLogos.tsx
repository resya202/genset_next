"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/languageContext";
import { collageData } from "@/app/translations/client";
import LogosWithText from "./logosWithText";

const CollageWithLogos = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full lg:max-w-7xl mx-auto py-10 px-4">
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
              className="lg:grid lg:grid-cols-5 gap-4 items-center justify-center relative shadow-md lg:shadow-primaryOrange border rounded-lg lg:border-none p-4 "
            >
              <div className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-2 lg:gap-4 pt-32 lg:pt-0">
                <div className="relative w-full h-40 mb-8 lg:mb-0">
                  <Image
                    src={images[0]}
                    alt={`Collage Image ${index}-1`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-full h-40">
                  <Image
                    src={images[1]}
                    alt={`Collage Image ${index}-2`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="relative w-62 lg:w-[24rem] 2xl:w-[30rem] h-80 col-span-2">
                <Image
                  src={images[2]}
                  alt={`Collage Image ${index}-3`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="w-full mt-8 text-justify px-4 lg:px-0 lg:mt-0 col-span-2 flex flex-col justify-center items-center">
                <div className="absolute top-2 flex w-28 h-28 lg:relative bg-white rounded-full overflow-hidden border mb-4">
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
