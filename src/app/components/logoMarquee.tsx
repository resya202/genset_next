import React from "react";
import Image from "next/image";

const LogoMarquee = () => {
  const logosRow1 = [
    "/logos/circle/logo-indomobil.png",
    "/logos/circle/logo-aeon.png",
    "/logos/circle/logo-azhar.png",
    "/logos/circle/logo-alstom.png",
    "/logos/circle/logo-bakrie.png",
    "/logos/circle/logo-cuan.png",
    "/logos/circle/logo-sakura.png",
    "/logos/circle/logo-obayashi.png",
  ];

  const logosRow2 = [
    "/logos/circle/logo-kajima.png",
    "/logos/circle/logo-kpp.png",
    "/logos/circle/logo-lotte.png",
    "/logos/circle/logo-menteng.png",
    "/logos/circle/logo-nusantara-tiga.png",
    "/logos/circle/logo-pasaraya.png",
    "/logos/circle/logo-pelindo.png",
    "/logos/circle/logo-pertamina.png",
  ];

  const logosRow3 = [
    "/logos/circle/logo-PLN.png",
    "/logos/circle/logo-PSN.png",
    "/logos/circle/logo-ptpn.png",
    "/logos/circle/logo-schneider.png",
    "/logos/circle/logo-sinarmas.png",
    "/logos/circle/logo-taiyo.png",
    "/logos/circle/logo-yamaha.png",
    "/logos/circle/logo-ykk.png",
  ];

  const renderRow = (
    logos: string[],
    direction: "left" | "right",
    rowKey: string
  ) => (
    <div
      className={`flex ${
        direction === "right" ? "animate-marquee-left" : "animate-marquee-right"
      } space-x-10 px-4`}
      key={rowKey}
    >
      {[...logos, ...logos].map((logo, index) => (
        <div
          key={`${rowKey}-${index}`}
          className="flex-shrink-0 w-28 h-28 relative bg-white rounded-full overflow-hidden"
        >
          <Image
            src={logo}
            alt={`Logo ${index + 1}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-white py-10 rounded-lg mt-20">
      <h2 className="text-center text-xl text-primaryDarkBlue font-bold mb-6">
        Some of our valuable clients
      </h2>
      <div className="w-full space-y-6">
        {/* First row */}
        <div className="w-full">{renderRow(logosRow1, "right", "row1")}</div>
        {/* Second row */}
        <div className="w-full">{renderRow(logosRow2, "left", "row2")}</div>
        {/* Third row */}
        <div className="w-full">{renderRow(logosRow3, "right", "row3")}</div>
      </div>
    </div>
  );
};

export default LogoMarquee;
