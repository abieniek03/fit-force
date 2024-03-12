import { ILayout } from "@/app/_types/types";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({ children }: Readonly<ILayout>) {
  return (
    <>
      <div className="absolute right-4 top-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <main className="p-4">{children}</main>
    </>
  );
}
