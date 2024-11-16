import Image from "next/image";
import { useLanguage } from "../context/languageContext";
import { headerTranslations } from "../translations/home";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  // Get the correct translations based on the selected language
  const t = headerTranslations[language];

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm">
      {/* Logo */}
      <Image
        src="/dummyLogo.webp"
        width={60}
        height={60}
        className="object-cover"
        alt="Company Logo"
      />

      {/* Navigation Links */}
      <nav className="flex gap-6">
        <a href="#home" className="text-gray-700 hover:text-green-600">
          {t.home}
        </a>
        <a href="#about" className="text-gray-700 hover:text-green-600">
          {t.aboutUs}
        </a>
        <a href="#products" className="text-gray-700 hover:text-green-600">
          {t.products}
        </a>
      </nav>

      {/* Language Selector and Booking Button */}
      <div className="flex gap-6 items-center">
        {/* English Flag */}
        <button
          className="w-10 h-10 rounded-full overflow-hidden border border-neutral-100"
          onClick={() => toggleLanguage("en")}
        >
          <Image
            src="/flags/united-kingdom.png"
            alt="English Flag"
            width={40}
            height={40}
            className="object-cover"
          />
        </button>

        {/* Indonesian Flag */}
        <button
          className="w-10 h-10 rounded-full overflow-hidden border border-neutral-100"
          onClick={() => toggleLanguage("id")}
        >
          <Image
            src="/flags/indonesia.png"
            alt="Indonesian Flag"
            width={40}
            height={40}
            className="object-cover"
          />
        </button>

        {/* Booking Button */}
        <button className="px-4 py-2 text-sm text-white bg-black font-bold rounded-lg hover:bg-gray-700">
          {t.bookNow}
        </button>
      </div>
    </header>
  );
}
