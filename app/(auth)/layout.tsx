import { ILayout } from "@/app/_types/types";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  description:
    "Dołącz do nas - Zdobądź Moc, Sprawność i Motywację, Każdego Dnia.",
};

export default function AuthLayout({ children }: Readonly<ILayout>) {
  return (
    <main className="flex h-screen items-center justify-center">
      {children}
    </main>
  );
}
