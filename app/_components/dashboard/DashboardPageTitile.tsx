import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DashboardPageTitle({ children }: Readonly<Props>) {
  return (
    <h1 className="text-3xl font-bold uppercase text-secondary md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}
