import DashboardMenu from "@/app/_components/dashboard/DashboardMenu";
import { ILayout } from "@/app/_types/types";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({ children }: Readonly<ILayout>) {
  return (
    <>
      <div className="absolute right-4 top-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="lg:flex">
        <DashboardMenu />
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </>
  );
}
