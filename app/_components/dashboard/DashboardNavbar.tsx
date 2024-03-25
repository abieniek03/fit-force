import Link from "next/link";
import Image from "next/image";
import logoPrimary from "@/app/_assets/images/logo-primary.svg";
import { UserButton } from "@clerk/nextjs";

export default function DashboardNavbar() {
  return (
    <nav className="sticky top-0 z-10 mx-auto flex max-w-7xl items-center justify-between bg-white p-4 lg:relative">
      <Link href="/dashboard">
        <Image src={logoPrimary} alt="FitForce" width={150} height={100} />
      </Link>
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
}
