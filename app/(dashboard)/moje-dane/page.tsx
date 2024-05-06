import { Metadata } from "next/types";
import { currentUser } from "@clerk/nextjs";
import { differenceInYears } from "date-fns";
import clsx from "clsx";

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
    const value =
      latestWeight.data.weight / Math.pow(userProfile.data.height / 100, 2);
    return Number(value.toFixed(1));
  };

  const setBmiInfo = (bmi: number) => {
    let info: string;

    switch (true) {
      case bmi >= 16 && bmi < 17:
        info = "wychudzenie";
        break;
      case bmi >= 17 && bmi < 18.5:
        info = "niedowaga";
        break;
      case bmi >= 18.5 && bmi < 25:
        info = "Prawidłowe";
        break;
      case bmi >= 25 && bmi < 30:
        info = "nadwaga";
        break;
      case bmi >= 30 && bmi < 35:
        info = "otyłość I stopnia";
        break;
      case bmi >= 35 && bmi < 40:
        info = "otyłość II stopnia";
        break;
      case bmi > 40:
        info = "otyłość III stopnia";
        break;
      default:
        info = "wygłodzenie";
    }

    return info;
  };

  const bmi = calcBmi();
  const bmiInfo = setBmiInfo(bmi);

  return (
    <>
      <DashboardPageTitle>Moje dane</DashboardPageTitle>

      <div className="mt-8 rounded-md border p-4">
        <div className="mb-4 flex flex-col items-center justify-center border-b pb-4">
          <p className="text-xl text-content/50">
            {user?.firstName}, {calcAge(userProfile.data.birthDate)}
          </p>
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
          </table>

          <div className="mt-8 text-center">
            <p className="mb-2 text-3xl">BMI</p>
            <p className="text-6xl">{bmi}</p>
            <p
              className={clsx(
                "uppercase",
                bmi >= 18.5 && bmi < 25 && "text-green-500",
                ((bmi >= 17 && bmi < 18.5) || (bmi >= 25 && bmi < 30)) &&
                  "text-orange-600",
                (bmi < 17 || bmi >= 30) && "text-red-600",
              )}
            >
              {bmiInfo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
