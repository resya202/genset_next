"use client";

import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <main>{children}</main>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}
