import { UserButton } from "@clerk/nextjs";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "FitForce - Dashboard",
};

export default function DashboardPage() {
  return (
    <main>
      <h1>Hello from DASHBOARD!👋</h1>
    </main>
  );
}
