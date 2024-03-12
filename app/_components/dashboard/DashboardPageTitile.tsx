import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DashboardPageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-bold text-secondary lg:text-4xl ">
      {children}
    </h1>
  );
}
