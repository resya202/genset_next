import CoverImage from "@/app/components/coverImage";
import React from "react";
import CollageWithLogos from "../components/collageWithLogos";
import { clientCoverImage } from "@/app/translations/client";

export default function ClientsPage() {
  return (
    <section>
      <CoverImage
        imageSrc="/FAQ/IMG_7299.webp"
        translationObject={clientCoverImage}
      />

      <div className="min-h-screen text-black max-w-[1480px] bg-white shadow-md mx-auto my-10 rounded-lg pt-10 px-10">
        <CollageWithLogos />
      </div>
    </section>
  );
}
