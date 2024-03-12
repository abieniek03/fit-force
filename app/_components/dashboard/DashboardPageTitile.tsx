import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DashboardPageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}