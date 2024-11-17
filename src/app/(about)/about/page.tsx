import React from "react";
import AchievementStory from "../components/achievements";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section>
      {/* Hero Section with Centered Text */}
      <div className="relative w-full h-[35rem]">
        <Image
          src={"/FAQ/IMG_7299.webp"}
          alt="Primary About Image"
          className="object-cover filter grayscale"
          fill
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/20">
          <h2 className="text-white font-bold text-6xl lg:text-[8rem]">
            Tentang Kami
          </h2>
          <p className="text-white font-bold text-2xl lg:text-4xl mt-4">
            BPN Indonesia
          </p>
        </div>
      </div>

      {/* Achievement Story Section */}
      <div className="my-10 max-w-[1480px] mx-auto">
        <AchievementStory />
      </div>
    </section>
  );
}
