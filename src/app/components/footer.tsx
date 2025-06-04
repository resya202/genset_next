/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { useLanguage } from "../context/languageContext";
import { footerTranslations } from "../translations/home";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

export default function Footer() {
  const { language } = useLanguage();
  const t = footerTranslations[language];

  return (
    <footer className="bg-primaryDarkBlue border-t px-4 md:px-8 py-6 mt-20 rounded-tr-lg rounded-tl-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-white">
        {/* Contact Section */}
        <div>
          <h4 className="text-lg text-center md:text-start font-bold mb-4 mx-auto">
            {t.contactTitle}
          </h4>
          <Link
            href={process.env.NEXT_PUBLIC_MAPS_LOCATION!}
            className="flex items-center gap-2 hover:text-primaryOrange mb-2"
          >
            <GrMapLocation className="text-2xl text-primaryOrange" />
            <p className="text-sm">{t.contactAddress}</p>
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
        <div className="hidden md:block">
          <h4 className="text-lg font-bold mb-4">{t.pagedone}</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <p className="hover:text-primaryOrange">{t.home}</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:text-primaryOrange">{t.about}</p>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <p className="hover:text-primaryOrange">{t.products}</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="hidden md:block">
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

        {/* Newsletter Section */}
        <div className="hidden md:block w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-10 h-10">
              <Image
                src="/BPN-Logo.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>

            {/* <h4 className="text-sm md:text-lg font-bold">
              {t.newsletterTitle}
            </h4> */}
          </div>
          {/* <p className="hidden md:block text-sm mb-4">
            {t.newsletterDescription}
          </p> */}
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center rounded-lg overflow-hidden gap-2">
              {/* <input
                type="email"
                className="px-4 py-3 outline-none grow placeholder-gray-500 w-full md:w-auto"
                placeholder={t.placeholder}
              /> */}
              {/* <button className="bg-primaryOrange text-white px-4 py-3 hover:bg-primaryOrange transition">
                {t.subscribe}
              </button> */}
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-start text-black">
              <Link
                href="https://www.instagram.com/bpnenergi/profilecard/?igsh=MWZ2YjhuYXo3NzJ4Mw=="
                className="flex items-center gap-2"
              >
                <FaInstagram className="text-2xl text-red-400" />
                Instagram
              </Link>
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
