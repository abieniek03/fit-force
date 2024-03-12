import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "FitForce - Rejestracja",
};

export default function SignUpPage() {
  return <SignUp />;
}
 