"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../context/languageContext";
import { heroTranslations } from "../translations/home";

export default function Hero() {

  const redirectToWhatsApp = async () => {
    const phoneNumber = "+6285877777271"; // Set your actual WhatsApp number here
    const message = "Halo, saya tertarik untuk mengetahui lebih lanjut mengenai layanan BPN Energi dan produk genset yang Anda tawarkan. Saya mendapatkan informasi ini melalui situs web Anda.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    try {
      console.log("hit");
      
      // Call the API to update the click count
      await fetch("/api/updateWhatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
  
      // Redirect to WhatsApp
      window.location.href = whatsappURL;
    } catch (error) {
      console.error('Failed to record WhatsApp click:', error);
    }
  };
  const { language } = useLanguage();

  const t = heroTranslations[language];
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power1.out", duration: 0.8 },
      });

      timeline
        .from(".left-section h1", { x: -50, opacity: 0 })
        .from(".left-section p", { x: -50, opacity: 0 }, "-=0.4")
        .from(
          ".left-section button",
          { x: -50, opacity: 0, stagger: 0.2 },
          "-=0.4"
        )
        .from(".left-section section", { x: -50, opacity: 0 }, "-=0.4");

      gsap.from(".right-section", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: timeline.duration(),
        ease: "power1.out",
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef}>
      <div className="flex flex-col lg:flex-row items-center px-4 lg:px-10 py-12 shadow-md my-20 rounded-md max-w-[1480px] mx-auto bg-white ">
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
          <div className="mt-6 flex flex-col md:flex-row justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 md:w-56 bg-primaryBlack text-white rounded-lg hover:bg-primaryOrange hover:text-black font-semibold"
            onClick={redirectToWhatsApp}>
              {t.bookingButton}
            </button>
            <button
            className="px-6 py-3 md:w-56 text-black bg-primaryOrange rounded-lg hover:text-white"
            onClick={() => {
              const productPageUrl = '/products'; // Replace with the actual URL of your product page
              window.location.href = productPageUrl;
            }}
          >
            {t.downloadButton}
          </button>
          </div>

          {/* <section className="w-full lg:w-[95%] flex justify-between items-center py-4 bg-gray-50 mt-10 rounded-lg text-lg lg:text-3xl">
            <div className="text-center border-r pr-2 w-1/3">
              <h3 className="font-bold text-primaryOrange">5+ Years</h3>
              <p className="text-xs text-gray-600">
                {t.statistics.yearsOperated}
              </p>
            </div>
            <div className="text-center border-r pr-2 w-1/3">
              <h3 className="font-bold text-primaryOrange">1000+</h3>
              <p className="text-xs text-gray-600">
                {t.statistics.satisfiedBuyers}
              </p>
            </div>
            <div className="text-center pr-2 w-1/3">
              <h3 className="font-bold text-primaryOrange">90%</h3>
              <p className="text-xs text-gray-600">
                {t.statistics.satisfiedRate}
              </p>
            </div>
          </section> */}
        </div>

        <div className="right-section w-full lg:w-1/2 mt-8 lg:mt-0 relative flex justify-center items-center flex-col lg:flex-row gap-8">
          <div className="relative w-full h-[15rem] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/genset/IMG_7822.webp"
              alt={language === "en" ? "Plane" : "Pesawat"}
              fill
              sizes="(min-width: 768px) 900px, 500px"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="lg:absolute w-full lg:w-[24rem] lg:h-[15rem] bottom-0 left-0 bg-white flex items-end justify-start rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <div className="w-full h-full lg:w-[95%] lg:h-[93%] rounded-lg overflow-hidden shadow-lg">
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
