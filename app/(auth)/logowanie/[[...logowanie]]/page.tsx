import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "FitForce - Logowanie",
};

export default function SingInPage() {
  return <SignIn />;
}
