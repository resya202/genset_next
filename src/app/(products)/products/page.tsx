import React from "react";
import CoverImage from "@/app/components/coverImage";
import { clientCoverImage } from "@/app/translations/client";
import NavTabs from "../components/navTabs";
import LogoMarquee from "@/app/components/logoMarquee";
import GensetTypes from "../components/GensetType";

export default function Products() {
  return (
    <section>
      <CoverImage
        imageSrc="/FAQ/IMG_7299.webp"
        translationObject={clientCoverImage}
      />
      <div className="my-10 max-w-[1480px] mx-auto p-6">
        <NavTabs />

        <GensetTypes />
        <LogoMarquee title="Some of our satisfied clients" />
      </div>
    </section>
  );
}
