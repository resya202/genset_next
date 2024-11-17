// components/Loading.tsx
"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div className="animate-spin rounded-full h-24 w-24 border-8 border-white overflow-hidden">
        <div className="h-1/3 bg-primaryDarkBlue"></div>
        <div className="h-1/3 bg-white flex items-center justify-center"></div>
        <div className="h-1/3 bg-primaryOrange"></div>
      </div>
    </div>
  );
}
