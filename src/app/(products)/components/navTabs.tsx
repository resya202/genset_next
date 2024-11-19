"use client";
import React, { useState } from "react";
import FawdeTable from "./fawde-table";
import KubotaTable from "./kubota-table";
import CumminsTable from "./cummins-table";
import PerkinsTable from "./perkins-table";
import Link from "next/link";

export default function NavTabs() {
  const [activeTab, setActiveTab] = useState("tabs-with-pill-light-1");

  const renderTabContent = () => {
    switch (activeTab) {
      case "tabs-with-pill-light-1":
        return <FawdeTable />;
      case "tabs-with-pill-light-2":
        return <KubotaTable />;
      case "tabs-with-pill-light-3":
        return <CumminsTable />;
      case "tabs-with-pill-light-4":
        return <PerkinsTable />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs bg-white w-full shadow-md p-6 rounded-lg">
      <div className="flex">
        <ul className="flex flex-wrap transition-all duration-300 overflow-hidden gap-4">
          <li>
            <Link
              href="#"
              onClick={() => setActiveTab("tabs-with-pill-light-1")}
              className={`inline-block py-3 px-6 font-medium ${
                activeTab === "tabs-with-pill-light-1"
                  ? "bg-primaryOrange  text-primaryDarkBlue rounded-full"
                  : "rounded-full text-primaryDarkBlue"
              }`}
            >
              Fawde Products
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => setActiveTab("tabs-with-pill-light-2")}
              className={`inline-block py-3 px-6 font-medium ${
                activeTab === "tabs-with-pill-light-2"
                  ? "bg-primaryOrange  text-primaryDarkBlue rounded-full"
                  : "rounded-full text-primaryDarkBlue"
              }`}
            >
              Kubota Products
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => setActiveTab("tabs-with-pill-light-3")}
              className={`inline-block py-3 px-6 font-medium ${
                activeTab === "tabs-with-pill-light-3"
                  ? "bg-primaryOrange  text-primaryDarkBlue rounded-full"
                  : "rounded-full text-primaryDarkBlue"
              }`}
            >
              Cummins Products
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => setActiveTab("tabs-with-pill-light-4")}
              className={`inline-block py-3 px-6 font-medium ${
                activeTab === "tabs-with-pill-light-4"
                  ? "bg-primaryOrange  text-primaryDarkBlue rounded-full"
                  : "rounded-full text-primaryDarkBlue"
              }`}
            >
              Perkins Products
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-3">{renderTabContent()}</div>
    </div>
  );
}
