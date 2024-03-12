import { Metadata } from "next/types";
import { currentUser } from "@clerk/nextjs";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await currentUser();

  const getCurrentDate = () => {
    const formattedDate = format(new Date(), "EEEE, d MMMM yyyy", {
      locale: pl,
    });

    return `${formattedDate.slice(0, 1).toLocaleUpperCase()}${formattedDate.slice(1)}`;
  };
  return (
    <>
      <header className="border-b pb-4">
        <DashboardPageTitle>Cześć {user?.firstName}!👋</DashboardPageTitle>
        <div>
          <span>{getCurrentDate()}</span>
        </div>
      </header>
    </>
  );
}
