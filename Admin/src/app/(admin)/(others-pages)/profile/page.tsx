import UserInfoCard from "@/components/user-profile/UserInfoCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Langford College | Admin",
  description: "Online Degrees Without The High Fees",
};

export default function Profile() {
  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserInfoCard />
        </div>
      </div>
    </div>
  );
}
