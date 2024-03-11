import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ILayout } from "./_types/types";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "FitForce",
  description: "Aplikacja FitForce - tworzona w ramach projektu studenckiego.",
};

export default function RootLayout({ children }: Readonly<ILayout>) {
  return (
    <html lang="pl">
      <body className={`${font.className} text-content`}>{children}</body>
    </html>
  );
}
