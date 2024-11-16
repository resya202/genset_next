"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/languageContext";
import { heroTranslations } from "../translations/home";

export default function Hero() {
  const { language } = useLanguage();

  // Get the correct translations based on the selected language
  const t = heroTranslations[language];

  // Refs for animations
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftSectionRef.current || !rightSectionRef.current) {
      // If the refs are null, return early to avoid runtime errors
      return;
    }

    // GSAP Timeline for left section
    const tl = gsap.timeline({
      defaults: { ease: "power1.out", duration: 0.8 },
    });

    // Animate the left section
    tl.from(leftSectionRef.current.querySelector("h1"), {
      x: -50,
      opacity: 0,
    })
      .from(
        leftSectionRef.current.querySelector("p"),
        {
          x: -50,
          opacity: 0,
        },
        "-=0.4"
      )
      .from(
        leftSectionRef.current.querySelectorAll(
          "button"
        ) as NodeListOf<Element>, // Explicit type casting for NodeList
        {
          x: -50,
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.4"
      )
      .from(
        leftSectionRef.current.querySelector("section"),
        {
          x: -50,
          opacity: 0,
        },
        "-=0.4"
      );

    // Animate the right section after the left section finishes
    gsap.from(rightSectionRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: tl.duration(), // Wait until the left section animation completes
      ease: "power1.out",
    });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center px-6 py-12">
      {/* Left Section */}
      <div ref={leftSectionRef} className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-900">
          {t.heading.split(" ").map((word, i) =>
            word === "journey" || word === "perjalanan" ? (
              <span key={i} className="text-tealGreen">
                {word}
              </span>
            ) : (
              ` ${word} `
            )
          )}
        </h1>
        <p className="mt-4 text-gray-600">{t.description}</p>
        <div className="mt-6 flex justify-center lg:justify-start gap-4">
          <button className="px-6 py-3 bg-tealGreen text-white rounded-lg hover:bg-green-700">
            {t.bookingButton}
          </button>
          <button className="px-6 py-3 bg-gray-100 text-tealGreen border border-tealgrebg-tealGreen rounded-lg hover:bg-gray-200">
            {t.downloadButton}
          </button>
        </div>

        {/* Statistics Section */}
        <section className="w-[95%] flex justify-between items-center py-4 bg-gray-100 mt-6 rounded-lg">
          <div className="text-center border-r pr-2 w-1/3">
            <h3 className="text-3xl font-bold text-tealGreen">5+ Years</h3>
            <p className="text-gray-600">{t.statistics.yearsOperated}</p>
          </div>
          <div className="text-center border-r pr-2 w-1/3">
            <h3 className="text-3xl font-bold text-tealGreen">1000+</h3>
            <p className="text-gray-600">{t.statistics.satisfiedBuyers}</p>
          </div>
          <div className="text-center pr-2 w-1/3">
            <h3 className="text-3xl font-bold text-tealGreen">90%</h3>
            <p className="text-gray-600">{t.statistics.satisfiedRate}</p>
          </div>
        </section>
      </div>

      {/* Right Section */}
      <div
        ref={rightSectionRef}
        className="lg:w-1/2 mt-8 lg:mt-0 relative flex justify-center items-center"
      >
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/genset/IMG_7822.webp"
            alt={language === "en" ? "Plane" : "Pesawat"}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-lg rounded-tr-lg rounded-bl-lg"
          />
        </div>

        <div className="absolute w-[24rem] h-[15rem] bottom-[0px] left-[0px] bg-white flex items-end justify-start rounded-tr-lg rounded-bl-lg rounded-br-lg">
          <div className="w-[95%] h-[93%] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/genset/IMG_7776.webp"
              alt={language === "en" ? "Woman" : "Wanita"}
              layout="responsive"
              width={200}
              height={250}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
