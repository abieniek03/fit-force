import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function AuthRootPage() {
  const { userId } = auth();

  redirect(userId ? "/dashboard" : "/logowanie");
}
