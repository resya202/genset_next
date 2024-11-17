import Image from "next/image";
import { useLanguage } from "../context/languageContext";
import { headerTranslations } from "../translations/home";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  // Get the correct translations based on the selected language
  const t = headerTranslations[language];

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-primaryDarkBlue z-50 text-white">
      {/* Logo */}
      <Image
        src="/BPN-Logo.png"
        width={60}
        height={60}
        className="object-cover rounded-full"
        alt="Company Logo"
      />

      {/* Navigation Links */}
      <nav className="flex gap-6">
        <a href="#home" className="hover:text-primaryOrange">
          {t.home}
        </a>
        <a href="#about" className="hover:text-primaryOrange">
          {t.aboutUs}
        </a>
        <a href="#products" className="hover:text-primaryOrange">
          {t.products}
        </a>
      </nav>

      {/* Language Selector and Booking Button */}
      <div className="flex gap-6 items-center">
        {/* English Flag */}
        <button
          className="w-10 h-10 rounded-full overflow-hidden"
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
          className="w-10 h-10 rounded-full overflow-hidden"
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
        <button className="px-4 py-2 text-sm text-black bg-primaryOrange font-bold rounded-lg hover:bg-white hover:text-black">
          {t.bookNow}
        </button>
      </div>
    </header>
  );
}
