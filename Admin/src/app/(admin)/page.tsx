
import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";

export const metadata: Metadata = {
  title: "Langford Collage | Admin",
  description: "Online Degrees Without The High Fees",
};

export default function Ecommerce() {

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6">
        <EcommerceMetrics />
      </div>
    </div>
  );
}
