import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";
import { Metadata } from "next";
import Form from "@/app/_components/dashboard/moje-dane/Form";

export const metadata: Metadata = {
  title: "Moje dane",
};

export default function MyParametersPage() {
  

  return (
    <>
      <DashboardPageTitle>Moje dane</DashboardPageTitle>
      <Form/>
    </>
  );
}
