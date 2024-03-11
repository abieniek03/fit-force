import { ILayout } from "@/app/_types/types";

export default function AuthLayout({ children }: Readonly<ILayout>) {
  return (
    <main className="flex h-screen items-center justify-center">
      {children}
    </main>
  );
}
