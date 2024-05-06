import { ILayout } from "@/app/_types/types";
import { UserProfileChecker } from "../_hoc/UserProfileChecker";
import { DashboardNavbar } from "@/app/_components/dashboard/DashboardNavbar";

export default function DashboardLayout({ children }: Readonly<ILayout>) {
  return (
    <UserProfileChecker>
      <DashboardNavbar />
      <main className="mx-auto max-w-7xl p-4">{children}</main>
    </UserProfileChecker>
  );
}
