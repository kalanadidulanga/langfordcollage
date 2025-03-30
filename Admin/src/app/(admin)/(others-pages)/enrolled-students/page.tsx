import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";
import Pagetable from "./pagetable";

export const metadata: Metadata = {
  title: "Langford Collage | Admin",
  description: "Online Degrees Without The High Fees",
};
export default function BlankPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Enrolled Student Management" />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      <div className="mx-auto w-full">
          <Pagetable />
        </div>
      </div>
    </div>
  );
}
