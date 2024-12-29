import CoverImage from "@/app/components/coverImage";
import React from "react";
import { servicesCoverImage } from "@/app/translations/services";
import FeaturesSection from "../components/feature";
import Testimonials from "@/app/components/testimonials";
import LogoMarquee from "@/app/components/logoMarquee";
import ImageGallery from "../components/imageGallery";

export default function ClientsPage() {
  const galleryImages = [
    "/features/service1.png",
    "/features/service2.png",
    "/features/service3.png",
    "/features/service4.png",
    "/features/service5.png",
  ];
  return (
    <section>
      <CoverImage
        imageSrc="/genset/project4.webp"
        translationObject={servicesCoverImage}
      />
      <div className="min-h-screen text-black max-w-[1480px] md:shadow-md mx-auto my-10 rounded-lg py-10 md:px-10">
        <FeaturesSection />

        <ImageGallery images={galleryImages} />

        <Testimonials />

        <LogoMarquee title="Our Satisfied Clients" />
      </div>
    </section>
  );
}
