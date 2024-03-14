import { Metadata } from "next";
import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";

export const metadata: Metadata = {
  title: "Moje dane",
};

export default function MyParametersPage() {
  return (
    <>
      <DashboardPageTitle>Moje dane</DashboardPageTitle>
    </>
  );
}
