import { Metadata } from "next/types";
import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";

export const metadata: Metadata = {
  title: "Moje dane",
};

export default function DashboardPage() {
  return (
    <>
      <DashboardPageTitle>Moje dane</DashboardPageTitle>
    </>
  );
}
