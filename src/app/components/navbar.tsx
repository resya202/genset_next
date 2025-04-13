"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import { headerTranslations } from "../translations/home";
import Link from "next/link";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = headerTranslations[language];
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
  

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-primaryDarkBlue z-50 text-white">
      <Image
        src="/BPN-Logo.png"
        width={60}
        height={60}
        className="object-cover rounded-full border-2 border-white"
        alt="Company Logo"
      />

      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:gap-6 absolute md:relative top-20 md:top-auto left-0 w-full md:w-auto bg-primaryDarkBlue md:bg-transparent transition-all duration-300 ease-in-out z-40`}
      >
        <ul className="flex flex-col md:flex-row items-end mr-4 md:items-center gap-4 md:gap-6 p-4 md:p-0">
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/"
              className="hover:text-primaryOrange"
            >
              {t.home}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/about"
              className="hover:text-primaryOrange"
            >
              {t.aboutUs}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/products"
              className="hover:text-primaryOrange"
            >
              {t.products}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/clients"
              className="hover:text-primaryOrange"
            >
              {t.clients}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/services"
              className="hover:text-primaryOrange"
            >
              {t.services}
            </Link>
          </li>
          <li className="md:hidden relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="py-2 bg-primaryDarkBlue text-white rounded flex items-center gap-2 outline-none"
            >
              {language === "en" ? "English" : "Indonesia"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute -right-4 pr-4 bg-primaryDarkBlue text-white border border-gray-300 mt-2 rounded shadow-lg">
                <li>
                  <button
                    onClick={() => {
                      toggleLanguage("en");
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 w-full text-left hover:bg-gray-700 flex gap-2 items-center"
                  >
                    <Image
                      src="/flags/united-kingdom.png"
                      alt="English Flag"
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                    English
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      toggleLanguage("id");
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 w-full text-left hover:bg-gray-700 flex gap-2 items-center"
                  >
                    <Image
                      src="/flags/indonesia.png"
                      alt="Indonesian Flag"
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                    Indonesia
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex gap-6 items-center">
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

        <button className="px-4 py-2 text-sm text-black bg-primaryOrange font-bold rounded-lg hover:bg-white hover:text-black"
                onClick={redirectToWhatsApp}
        >
          {t.bookNow}
        </button>
      </div>
    </header>
  );
}
