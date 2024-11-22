"use client";

import { cnm } from "../utils/style";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { useLanguage } from "../context/languageContext";
import { productTranslations } from "../translations/home";
import ContactForm from "./EmailForm";

type GeneratorHighlight = {
  generator: string;
  image: string;
  startingPriceUsd: number;
};

export const generatorHighlightDummy: GeneratorHighlight[] = [
  {
    generator: "SP301 - Silent Type",
    image: "/products/dc72307c-1c55-4343-b799-e4465da419b8.webp",
    startingPriceUsd: 200000,
  },
  {
    generator: "SP150C - Silent Type",
    image: "/products/IMG_7822.webp",
    startingPriceUsd: 200000,
  },
  {
    generator: "SP150C - Open Type",
    image: "/products/IMG_8313.webp",
    startingPriceUsd: 200000,
  },
  {
    generator: "SP500C - Open Type",
    image: "/products/IMG_8314.webp",
    startingPriceUsd: 200000,
  },
  {
    generator: "SP300C - Open Type",
    image: "/products/IMG_8315.webp",
    startingPriceUsd: 200000,
  },
];

export default function ProductList() {
  const { language } = useLanguage();

  const t = productTranslations[language] || productTranslations["en"];

  return (
    <section className="mt-20">
      <div className="">
        <div className="w-full p-4 lg:p-7 bg-primaryDarkBlue rounded-2xl flex flex-col">
          <div className="w-full flex flex-col gap-6 lg:flex-row lg:items-center justify-between">
            <h1 className="font-medium text-white text-2xl lg:text-[40px] lg:leading-snug max-w-lg">
              {t.generatorHeading}
            </h1>

            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 font-semibold w-full lg:w-auto text-black">
              <button className={"w-full lg:w-auto"}>
                <div className="px-4 py-3 lg:px-8  rounded-lg bg-primaryOrange text-sm lg:text-base transition-colors hover:bg-white hover:text-primaryBlack  whitespace-nowrap">
                  {t.catalogButton}
                </div>
              </button>
              <button className={"w-full lg:w-auto"}>
                <div className="px-4 py-3 lg:px-8 rounded-lg bg-lemongrass bg-primaryOrange text-sm lg:text-base transition-colors hover:bg-white hover:text-primaryBlack ">
                  {t.orderButton}
                </div>
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 mt-20">
            <div className="flex lg:flex-row flex-col w-full gap-4 h-full lg:h-96">
              {generatorHighlightDummy.map((item, idx) => (
                <div
                  key={idx}
                  className={cnm(
                    "flex-grow flex-shrink-0 lg:basis-1/6 rounded-2xl overflow-hidden relative bg-primaryBlack flex flex-col group transition-all duration-500 ease-in-out",
                    "hover:flex-grow-[3] hover:lg:basis-[25%]"
                  )}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-64 lg:h-full overflow-hidden">
                    <Image
                      src={item.image}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      fill
                      sizes="(min-width: 768px) 900px, 500px"
                      alt={item.generator}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute w-full h-[10%] lg:h-[40%] pointer-events-none bg-gradient-to-b from-transparent to-white/20 bottom-0"></div>

                  {/* Content */}
                  <div className="flex flex-col lg:gap-0 lg:flex-row lg:items-center justify-between w-full mt-auto p-4">
                    <div className="flex flex-col gap-1 lg:mt-auto text-white relative items-start">
                      <p className="font-semibold text-lg">{item.generator}</p>
                      <p className="lg:h-0 font-light overflow-hidden lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:h-10 transition-all duration-500 ease-in-out whitespace-nowrap">
                        Start from{" "}
                        {item.startingPriceUsd.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                    </div>
                    <button className="hidden lg:block">
                      <div
                        className={cnm(
                          "w-10 shrink-0 aspect-square rounded-full bg-lemongrass relative opacity-0 flex items-center justify-center",
                          "translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                        )}
                      >
                        <FaArrowUp className="text-xl text-primaryOrange" />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* spacer */}
          <div className="w-full h-44"></div>
        </div>

        {/* Join */}
        <div className="w-full px-2 lg:px-7 -mt-40">
          <div className="w-full min-h-[400px] bg-primaryOrange rounded-2xl flex flex-col lg:flex-row overflow-hidden text-black">
            <div className="flex flex-col items-start w-full lg:max-w-xl p-6 lg:p-10">
              <p className="text-3xl lg:text-[40px] font-medium lg:leading-snug">
                {t.joinHeading}
              </p>
              <p className="text-lg lg:text-xl font-light mt-10">
                {t.emailPrompt}
              </p>
              <ContactForm />
            </div>
            <div className="w-full h-[27rem] lg:h-auto lg:grow relative">
              <Image
                src="/products/IMG_8315.webp"
                alt="holding-house"
                fill
                sizes="(min-width: 768px) 1000px, 600px"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
