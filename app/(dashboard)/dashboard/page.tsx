import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main>
      <h1>Hello from DASHBOARD!👋</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
