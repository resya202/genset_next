import CoverImage from "@/app/components/coverImage";
import React from "react";
import CollageWithLogos from "../components/collageWithLogos";
import { clientCoverImage } from "@/app/translations/client";

export default function ClientsPage() {
  return (
    <section>
      <CoverImage
        imageSrc="/FAQ/COVERIMAGECLIENTS.webp"
        translationObject={clientCoverImage}
      />

      <div className="text-black max-w-[1480px] bg-white mx-auto my-10 rounded-lg pt-10 md:px-10 overflow-x-hidden">
        <CollageWithLogos />
      </div>
    </section>
  );
}
