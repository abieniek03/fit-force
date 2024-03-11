import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ILayout } from "./_types/types";

import { ClerkProvider } from "@clerk/nextjs";
import { plPL } from "@clerk/localizations";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "FitForce",
  description: "Aplikacja FitForce - tworzona w ramach projektu studenckiego.",
};

export default function RootLayout({ children }: Readonly<ILayout>) {
  const theme = {
    primary: "#ef233c",
    secondary: "#2b2d42",
    content: "#1e1e1e",
  };

  return (
    <ClerkProvider
      localization={plPL}
      appearance={{
        variables: { colorPrimary: theme.primary, colorText: theme.secondary },
      }}
    >
      <html lang="pl">
        <body className={`${font.className} text-content`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
