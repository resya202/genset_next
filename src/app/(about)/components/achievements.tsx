"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/languageContext";
import { achievementTranslations } from "@/app/translations/about";

export default function AchievementStory() {
  const { language } = useLanguage();

  const t = achievementTranslations[language] || achievementTranslations["en"];

  return (
    <section className="py-12 px-6 shadow-md border rounded-lg my-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <p className="text-sm text-gray-600 uppercase font-medium">
            {t.sectionTitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {t.heading}
          </h2>
          <p className="text-gray-600">{t.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm shadow-primaryOrange transition-shadow"
              >
                <p className="text-2xl font-bold text-gray-900">{stat.title}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full h-80 lg:h-[24rem] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/FAQ/IMG_7299.webp"
            alt={t.heading}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
