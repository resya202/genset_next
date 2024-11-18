import CoverImage from "@/app/components/coverImage";
import { aboutCoverImage } from "@/app/translations/about";
import React from "react";
import { squareLogos } from "@/app/data/logos";
import Image from "next/image";
import CollageWithLogos from "../components/collageWithLogos";

export default function ClientsPage() {
  return (
    <section>
      <CoverImage
        imageSrc="/FAQ/IMG_7299.webp"
        translationObject={aboutCoverImage}
      />

      <div className="min-h-screen text-black max-w-[1480px] bg-white shadow-md mx-auto my-10 rounded-lg pt-10 px-10">
        <CollageWithLogos />
      </div>
    </section>
  );
}
