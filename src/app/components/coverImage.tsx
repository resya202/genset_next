"use client";
import Image from "next/image";
import React from "react";
import { useLanguage } from "../context/languageContext";
import { CoverImageObjects } from "../translations/about";

export type CoverImageProps = {
  imageSrc: string;
  translationObject?: CoverImageObjects;
  /** If you pass this, it will show instead of the `translationObject[lang].title` */
  titleOverride?: string;
  /** Likewise for the subtitle/description */
  descriptionOverride?: string;
};

export default function CoverImage({
  imageSrc,
  translationObject,
  titleOverride,
  descriptionOverride,
}: Readonly<CoverImageProps>) {
  const { language } = useLanguage();

  // if they gave us a translationObject, use it; else default to blanks
  const t = translationObject?.[language] ?? { title: "", description: "" };

  // pick the override if present, otherwise the translation
  const title = titleOverride ?? t.title;
  const description = descriptionOverride ?? t.description;

  return (
    <div className="relative w-full h-[36rem] md:h-[45rem]">
      <Image
        src={imageSrc}
        alt={title}
        className="object-cover filter grayscale"
        fill
        unoptimized
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/20">
        <h2 className="text-white font-bold text-6xl lg:text-[8rem]">
          {title}
        </h2>
        {description && (
          <p className="text-white font-bold text-2xl lg:text-4xl mt-4">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
