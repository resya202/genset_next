"use client";
import Image from "next/image";
import React from "react";
import { useLanguage } from "../context/languageContext";
import { CoverImageObjects } from "../translations/about";

type CoverImageProps = {
  imageSrc: string;
  translationObject: CoverImageObjects;
};

export default function CoverImage({
  imageSrc,
  translationObject,
}: CoverImageProps) {
  const { language } = useLanguage();

  const t = translationObject[language];

  return (
    <div className="relative w-full h-[36rem] md:h-[45rem]">
      <Image
        src={imageSrc}
        alt="Primary About Image"
        className="object-cover filter grayscale"
        fill
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/20">
        <h2 className="text-white font-bold text-6xl lg:text-[8rem]">
          {t.title}
        </h2>
        <p className="text-white font-bold text-2xl lg:text-4xl mt-4">
          {t.description}
        </p>
      </div>
    </div>
  );
}
