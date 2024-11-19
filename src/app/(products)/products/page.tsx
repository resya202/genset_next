import React from "react";
import FawdeTable from "../components/fawde-table";
import KubotaTable from "../components/kubota-table";
import CumminsTable from "../components/cummins-table";
import PerkinsTable from "../components/perkins-table";
import CoverImage from "@/app/components/coverImage";
import { clientCoverImage } from "@/app/translations/client";

export default function Products() {
  return (
    <section>
      <CoverImage
        imageSrc="/FAQ/IMG_7299.webp"
        translationObject={clientCoverImage}
      />
      <div className="min-h-screen my-10 max-w-[1480px] mx-auto bg-white p-6 rounded-lg">
        <FawdeTable />
        <KubotaTable />
        <CumminsTable />
        <PerkinsTable />
      </div>
    </section>
  );
}
