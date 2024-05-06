import { Metadata } from "next/types";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Rejestracja",
};

export default function SignUpPage() {
  return <SignUp />;
}
