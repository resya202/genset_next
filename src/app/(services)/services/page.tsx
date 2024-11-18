import CoverImage from "@/app/components/coverImage";
import React from "react";
import { servicesCoverImage } from "@/app/translations/services";
import FeaturesSection from "../components/feature";
import Testimonials from "@/app/components/testimonials";

export default function ClientsPage() {
  return (
    <section>
      <CoverImage
        imageSrc="/FAQ/IMG_7299.webp"
        translationObject={servicesCoverImage}
      />

      <div className="min-h-screen text-black max-w-[1480px] bg-white shadow-md mx-auto my-10 rounded-lg py-10 px-10">
        <FeaturesSection />

        <Testimonials />
      </div>
    </section>
  );
}
