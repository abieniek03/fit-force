import { Metadata } from "next/types";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { differenceInYears } from "date-fns";

import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { fetchData } from "@/app/_utils/fetch/fetchData";

export const metadata: Metadata = {
  title: "Moje dane",
};

export default async function DashboardPage() {
  const user = await currentUser();

  const userProfile = await fetchData("/user-profile");

  const latestWeight = await fetchData("/weight/bmi");

  const calcAge = (birthDate: Date) => {
    return differenceInYears(new Date(), birthDate);
  };

  const calcBmi = () => {
    const bmi =
      latestWeight.data.weight / Math.pow(userProfile.data.height / 100, 2);
    return bmi.toFixed(1);
  };

  return (
    <>
      <DashboardPageTitle>Moje dane</DashboardPageTitle>

      <div className="mt-8 rounded-md border p-4">
        <div className="mb-4 flex flex-col items-center justify-center border-b pb-4">
          <Image
            src={user?.imageUrl || ""}
            alt={`${user?.firstName} - zdjęcie`}
            width={50}
            height={50}
            className="mb-2 rounded-full"
          />
          <div>
            <p className="text-xl text-content/50">
              {user?.firstName}, {calcAge(userProfile.data.birthDate)}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-xs opacity-75">
          <table>
            <tr>
              <td className="w-full">Wzrost</td>
              <td className="text-right">{userProfile.data.height}</td>
            </tr>
            <tr>
              <td className="w-full">Waga</td>
              <td className="text-right"> {latestWeight.data.weight}</td>
            </tr>
            <tr>
              <td className="w-full">BMI</td>
              <td className="text-right"> {calcBmi()}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
