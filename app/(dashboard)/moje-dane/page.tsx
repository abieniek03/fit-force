import { Metadata } from "next";

import {BmiForm} from "@/app/_components/dashboard/my-parameters/BmiForm";

import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";

export const metadata: Metadata = {
  title: "Moje dane",
};

export default function MyParametersPage() {
  

  return (
    <>
      <DashboardPageTitle>Moje dane</DashboardPageTitle>
      <BmiForm/>
    </>
  );
}
