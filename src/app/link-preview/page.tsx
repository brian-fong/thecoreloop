"use client";
import React from "react";
import TCL_Logo from "@/components/core/TCL_Logo";
import Link_Preview from "@/components/link-preview/Link_Preview";


export default function page(): React.ReactElement {
  return (
    <main className="root-container">
      <TCL_Logo />

      <Link_Preview />
    </main>
  );
}
