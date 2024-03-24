import Link from "next/link";
import Image from "next/image";
import logoPrimary from "@/app/_assets/images/logo-primary.svg";
import { UserButton } from "@clerk/nextjs";

export default function DashboardNavbar() {
  return (
    <nav className="sticky top-0 mx-auto flex max-w-7xl items-center justify-between p-3 lg:relative xl:py-5">
      <Link href="/">
        <Image src={logoPrimary} alt="FitForce" width={150} height={100} />
      </Link>
      <UserButton />
    </nav>
  );
}
