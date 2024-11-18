import React from "react";
import FawdeTable from "../components/fawde-table";
import KubotaTable from "../components/kubota-table";
import CumminsTable from "../components/cummins-table";
import PerkinsTable from "../components/perkins-table";

export default function Products() {
  return (
    <div className="min-h-screen">
      <FawdeTable />
      <KubotaTable />
      <CumminsTable />
      <PerkinsTable />
    </div>
  );
}
