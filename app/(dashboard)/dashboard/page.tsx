import { Metadata } from "next/types";
import { currentUser } from "@clerk/nextjs";

import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <>
      <DashboardPageTitle>Cześć {user?.firstName}!👋</DashboardPageTitle>
    </>
  );
}
