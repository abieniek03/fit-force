import Link from "next/link";
import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";
import {
  fetchTrainingCampData,
  ITrainingCampElement,
} from "@/app/_utils/fetch/fetchTrainingCampData";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

export default async function AllTrainingCamps() {
  const { data } = await fetchTrainingCampData(`/`);

  return (
    <>
      <DashboardPageTitle>Wszystkie okresy treningowe</DashboardPageTitle>
      <div className="my-4 flex flex-col gap-y-4 lg:my-8">
        {data.map((el: ITrainingCampElement, index: number) => (
          <Link
            href={`/moje-postepy/${el.id}`}
            key={index}
            className="block rounded-lg border p-4 transition-all duration-300 hover:border-secondary"
          >
            <p className="text-lg font-semibold text-secondary">{el.title}</p>
            <div className="text-sm">
              <span>
                {format(el.startDate, "dd MMM yyyy", {
                  locale: pl,
                })}
              </span>
              <span className="mx-1">-</span>
              <span>
                {format(el.endDate, "dd MMM yyyy", {
                  locale: pl,
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
