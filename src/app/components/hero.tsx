import Image from "next/image";
import { useLanguage } from "../context/languageContext";
import { heroTranslations } from "../translations/home";

export default function Hero() {
  const { language } = useLanguage();

  // Get the correct translations based on the selected language
  const t = heroTranslations[language];

  return (
    <section className="flex flex-col lg:flex-row items-center px-6 py-12">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
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
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            {t.bookingButton}
          </button>
          <button className="px-6 py-3 bg-gray-100 text-green-600 border border-green-600 rounded-lg hover:bg-gray-200">
            {t.downloadButton}
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 relative flex justify-center items-center">
        <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/genset/IMG_7822.webp"
            alt={language === "en" ? "Plane" : "Pesawat"}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-lg rounded-tr-lg rounded-bl-lg"
          />
        </div>

        <div className="absolute w-[24rem] h-[15rem] bottom-[0px] left-[0px] bg-white flex items-end justify-start rounded-tr-lg rounded-bl-lg">
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
