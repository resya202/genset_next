"use client";

import Link from "next/link";
import { useLanguage } from "../context/languageContext";
import { footerTranslations } from "../translations/home";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  const { language } = useLanguage();
  const t = footerTranslations[language];

  return (
    <footer className="bg-gray-100 border-t border-gray-200 px-8 py-6 mt-20 rounded-tr-lg rounded-tl-lg">
      <div className=" px-6 mx-auto flex text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-2/3">
          <div>
            <h4 className="text-lg font-bold mb-4">{t.contactTitle}</h4>
            <Link
              href={process.env.NEXT_PUBLIC_MAPS_LOCATION!}
              className="flex items-center gap-2 text-gray-600 mb-2"
            >
              <GrMapLocation className="text-2xl text-tealGreen" />
              {t.contactAddress}
            </Link>
            <p className="flex items-center gap-2 text-gray-600 mb-2">
              <IoLogoWhatsapp className="text-2xl text-tealGreen" />
              {t.contactPhone}
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <MdAlternateEmail className="text-2xl text-tealGreen" />
              {t.contactEmail}
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t.pagedone}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <p className="text-gray-600 hover:text-tealGreen">{t.home}</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="text-gray-600 hover:text-tealGreen">
                    {t.about}
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <p className="text-gray-600 hover:text-tealGreen">
                    {t.products}
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t.resources}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq">
                  <p className="text-gray-600 hover:text-green-600">{t.faqs}</p>
                </Link>
              </li>
              <li>
                <Link href="/quick-start">
                  <p className="text-gray-600 hover:text-green-600">
                    {t.quickStart}
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/documentation">
                  <p className="text-gray-600 hover:text-green-600">
                    {t.documentation}
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/dummyLogo.webp"
              alt="Pagedone Logo"
              className="w-8 h-8 object-cover"
            />
            <h4 className="text-lg font-bold">{t.newsletterTitle}</h4>
          </div>
          <p className="text-gray-600 mb-4">{t.newsletterDescription}</p>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              className="px-4 py-3 outline-none grow placeholder-gray-500"
              placeholder={t.placeholder}
            />
            <button className="bg-tealGreen text-white px-4 py-3 hover:bg-green-500 transition">
              {t.subscribe}
            </button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Link href="https://twitter.com">
              <FaSquareXTwitter className="text-2xl text-black" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="text-2xl text-red-400" />
            </Link>
            <Link href="https://facebook.com">
              <FaFacebook className="text-2xl text-blue-500" />
            </Link>
            <Link href="https://youtube.com">
              <IoLogoYoutube className="text-2xl text-red-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
}
