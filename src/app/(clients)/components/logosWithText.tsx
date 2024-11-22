import React from "react";
import Image from "next/image";
import { squareLogosWithYears } from "@/app/data/logos";

const LogosWithText = () => {
  return (
    <section className="mt-16 w-full">
      <h3 className="text-2xl font-bold text-center mb-6">Other Clients</h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-4 w-full lg:w-[70rem]">
          {squareLogosWithYears.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-center lg:text-justify lg:flex-row items-center gap-4 bg-white border shadow-sm rounded-lg p-4"
            >
              <div className="relative size-24  lg:size-16 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={item.logo}
                  alt={`${item.companyName} Logo`}
                  fill
                  className="object-fill"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold">{item.companyName}</h4>
                <p className="text-sm text-gray-600">{item.partneredYears}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosWithText;
