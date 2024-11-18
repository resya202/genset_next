"use client";
import React from "react";
import { useLanguage } from "@/app/context/languageContext";
import { featuresTranslations } from "@/app/translations/services";

const FeaturesSection = () => {
  const { language } = useLanguage();
  const { title, description, features } = featuresTranslations[language];

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 text-center">
      {/* Title and Description */}
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-10">{description}</p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition duration-300 bg-gray-50 hover:bg-primaryDarkBlue hover:text-white`}
          >
            {/* Icon */}
            <div
              className={`text-5xl mb-4 transition duration-300 ${
                index === 1
                  ? "text-white hover:text-white"
                  : "text-blue-500 hover:text-white"
              }`}
            >
              {feature.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            {/* Description */}
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
