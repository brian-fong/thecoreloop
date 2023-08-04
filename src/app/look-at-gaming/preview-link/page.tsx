"use client";

import React from "react";
import TCL_Logo from "@/components/core/TCL_Logo";
import Preview_Link from "@/components/look-at-gaming/preview-link/Preview_Link";

export default function page(): React.ReactElement {
  return (
    <main className="root-container">
      <TCL_Logo />

      <Preview_Link />
    </main>
  );
}
