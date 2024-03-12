import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Rejestracja",
};

export default function SignUpPage() {
  return <SignUp />;
}
