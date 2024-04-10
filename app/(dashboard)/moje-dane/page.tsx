import { Metadata } from "next/types";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs";

import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";

export const metadata: Metadata = {
  title: "Moje dane",
};

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <>
      <DashboardPageTitle>Moje dane</DashboardPageTitle>

      <div className="mt-8 rounded-md border p-4">
        <div className="mb-4 flex flex-col items-center justify-center border-b pb-4">
          <Image
            src={user?.imageUrl || ""}
            alt={`${user?.firstName} - zdjęcie`}
            width={50}
            height={50}
            className="mb-2 rounded-full"
          />
          <div>
            <p className="text-xl text-content/50">{user?.firstName}, 20 lat</p>
          </div>
        </div>
      </div>
    </>
  );
}
