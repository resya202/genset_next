import React from "react";
import AchievementStory from "../components/achievements";
import CoverImage from "@/app/components/coverImage";
import { aboutCoverImage } from "@/app/translations/about";
import LogoMarquee from "@/app/components/logoMarquee";
export default function AboutPage() {
  return (
    <section>
      {/* Hero Section with Centered Text */}
      <CoverImage
        imageSrc="/FAQ/IMG_7299.webp"
        translationObject={aboutCoverImage}
      />

      {/* Achievement Story Section */}
      <div className="my-10 max-w-[1480px] mx-auto">
        <AchievementStory />

        <LogoMarquee />
      </div>
    </section>
  );
}
