import React from "react";
import CoverImage from "@/app/components/coverImage";
import { productCoverImage} from "@/app/translations/products";
import NavTabs from "../components/navTabs";
import LogoMarquee from "@/app/components/logoMarquee";
import GensetTypes from "../components/GensetType";

export default function Products() {
  return (
    <section>
      <CoverImage
        imageSrc="/FAQ/IMG_7299.webp"
        translationObject={productCoverImage}
      />
      <div className="my-10 md:max-w-[1480px] md:mx-auto md:p-6">
        <NavTabs />

        <GensetTypes />
        <LogoMarquee title="Some of our satisfied clients" />
      </div>
    </section>
  );
}
