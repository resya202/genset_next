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

  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power1.out", duration: 0.8 },
      });

      // Animate left section elements
      timeline
        .from(".left-section h1", { x: -50, opacity: 0 })
        .from(".left-section p", { x: -50, opacity: 0 }, "-=0.4")
        .from(
          ".left-section button",
          { x: -50, opacity: 0, stagger: 0.2 },
          "-=0.4"
        )
        .from(".left-section section", { x: -50, opacity: 0 }, "-=0.4");

      // Animate right section after left section finishes
      gsap.from(".right-section", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: timeline.duration(),
        ease: "power1.out",
      });
    }, componentRef);

    // Cleanup to avoid memory leaks
    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef}>
      <div className="flex flex-col lg:flex-row items-center px-6 py-12 shadow-md my-20 rounded-lg max-w-[1480px] mx-auto">
        {/* Left Section */}
        <div className="left-section lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            {t.heading.split(" ").map((word, i) =>
              word === "journey" || word === "perjalanan" ? (
                <span key={i} className="text-primaryOrange">
                  {word}
                </span>
              ) : (
                ` ${word} `
              )
            )}
          </h1>
          <p className="mt-4 text-gray-600">{t.description}</p>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 bg-primaryBlack text-white rounded-lg hover:bg-primaryOrange hover:text-black font-semibold">
              {t.bookingButton}
            </button>
            <button className="px-6 py-3 text-black bg-primaryOrange rounded-lg hover:text-white">
              {t.downloadButton}
            </button>
          </div>

          {/* Statistics Section */}
          <section className="w-[95%] flex justify-between items-center py-4 bg-gray-100 mt-10 rounded-lg">
            <div className="text-center border-r pr-2 w-1/3">
              <h3 className="text-3xl font-bold text-primaryOrange">
                5+ Years
              </h3>
              <p className="text-gray-600">{t.statistics.yearsOperated}</p>
            </div>
            <div className="text-center border-r pr-2 w-1/3">
              <h3 className="text-3xl font-bold text-primaryOrange">1000+</h3>
              <p className="text-gray-600">{t.statistics.satisfiedBuyers}</p>
            </div>
            <div className="text-center pr-2 w-1/3">
              <h3 className="text-3xl font-bold text-primaryOrange">90%</h3>
              <p className="text-gray-600">{t.statistics.satisfiedRate}</p>
            </div>
          </section>
        </div>

        {/* Right Section */}
        <div className="right-section lg:w-1/2 mt-8 lg:mt-0 relative flex justify-center items-center">
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/genset/IMG_7822.webp"
              alt={language === "en" ? "Plane" : "Pesawat"}
              fill
              sizes="(min-width: 768px) 900px, 500px"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="absolute w-[24rem] h-[15rem] bottom-0 left-0 bg-white flex items-end justify-start rounded-tr-lg rounded-bl-lg rounded-br-lg">
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
      </div>
    </section>
  );
}
