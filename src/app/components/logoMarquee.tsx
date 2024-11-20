import React from "react";
import Image from "next/image";
import { circleLogo1, circleLogo2, circleLogo3 } from "../data/logos";

// Define the type for the props
type LogoMarqueeProps = {
  title: string;
};

// Define the data type for logos
type Logos = string[];

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ title }) => {
  const renderRow = (
    logos: Logos,
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
          className="flex-shrink-0 size-16 md:size-24 relative bg-white rounded-full overflow-hidden"
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
        {title}
      </h2>
      <div className="w-full space-y-6">
        {/* First row */}
        <div className="w-full">{renderRow(circleLogo1, "right", "row1")}</div>
        {/* Second row */}
        <div className="w-full">{renderRow(circleLogo2, "left", "row2")}</div>
        {/* Third row */}
        <div className="w-full">{renderRow(circleLogo3, "right", "row3")}</div>
      </div>
    </div>
  );
};

export default LogoMarquee;
