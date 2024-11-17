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
    <footer className="bg-primaryDarkBlue border-t px-8 py-6 mt-20 rounded-tr-lg rounded-tl-lg">
      <div className=" px-6 mx-auto flex text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-2/3">
          <div>
            <h4 className="text-lg font-bold mb-4">{t.contactTitle}</h4>
            <Link
              href={process.env.NEXT_PUBLIC_MAPS_LOCATION!}
              className="flex items-center gap-2 hover:text-primaryOrange mb-2"
            >
              <GrMapLocation className="text-2xl text-primaryOrange" />
              {t.contactAddress}
            </Link>
            <p className="flex items-center gap-2 hover:text-primaryOrange mb-2">
              <IoLogoWhatsapp className="text-2xl text-primaryOrange" />
              {t.contactPhone}
            </p>
            <p className="flex items-center gap-2 hover:text-primaryOrange">
              <MdAlternateEmail className="text-2xl text-primaryOrange" />
              {t.contactEmail}
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t.pagedone}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <p className=" hover:text-primaryOrange">{t.home}</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className=" hover:text-primaryOrange">{t.about}</p>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <p className=" hover:text-primaryOrange">{t.products}</p>
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
                  <p className="hover:text-primaryOrange">{t.faqs}</p>
                </Link>
              </li>
              <li>
                <Link href="/quick-start">
                  <p className="hover:text-primaryOrange">{t.quickStart}</p>
                </Link>
              </li>
              <li>
                <Link href="/documentation">
                  <p className="hover:text-primaryOrange">{t.documentation}</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/BPN-Logo.png"
              alt="Pagedone Logo"
              className="w-8 h-8 object-cover"
            />
            <h4 className="text-lg font-bold">{t.newsletterTitle}</h4>
          </div>
          <p className="text-sm mb-4">{t.newsletterDescription}</p>
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="email"
                className="px-4 py-3 outline-none grow placeholder-gray-500"
                placeholder={t.placeholder}
              />
              <button className="bg-primaryOrange text-white px-4 py-3 hover:bg-primaryOrange transition">
                {t.subscribe}
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-4 mt-4 border p-4 rounded-lg w-44">
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
              <p className="text-black text-sm mt-4">
                Or you can click these icons to go to our social media page!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
}
