import { Metadata } from "next/types";
import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Logowanie",
};

export default function SingInPage() {
  return <SignIn />;
}
