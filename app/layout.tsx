import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ILayout } from "@/app/_types/types";

import { ClerkProvider } from "@clerk/nextjs";
import { plPL } from "@clerk/localizations";
import Providers from "./_hoc/Providers";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: {
    template: "%s - FitForce",
    default: "FitForce",
  },
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
        variables: {
          colorPrimary: theme.primary,
          colorText: theme.secondary,
          colorAlphaShade: theme.secondary,
        },
      }}
    >
      <html lang="pl">
        <body className={`${font.className} text-content accent-primary`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
