import { Metadata } from "next/types";
import Link from "next/link";
import { redirect } from "next/navigation";

import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitile";
import { EditTrainingCamp } from "@/app/_components/dashboard/my-progress/EditTrainingCamp";
import { Weights } from "@/app/_components/dashboard/my-progress/Weights";
import { IServerComponentProps } from "@/app/_types/types";
import { fetchData, ITrainingCamp } from "@/app/_utils/fetch/fetchData";

import { differenceInWeeks, isAfter, isBefore } from "date-fns";
import { differenceInDays } from "date-fns/differenceInDays";

export const metadata: Metadata = {
  title: "Moje postępy",
};

export default async function MyProgressPage(request: IServerComponentProps) {
  const { data }: { data: ITrainingCamp } = await fetchData(
    `/training-camp/${request.params.id}`,
  );

  if (data === undefined) redirect("/moje-postepy");

  const isCurrent =
    new Date() >= new Date(data.startDate) &&
    new Date() < new Date(data.endDate);

  const currentWeek = isCurrent
    ? differenceInWeeks(new Date(), new Date(data.startDate)) + 1
    : false;
  const daysToEnd = differenceInDays(new Date(data.endDate), new Date());
  const daysToStart = differenceInDays(new Date(data.startDate), new Date());

  const daysCount = isCurrent ? daysToEnd : daysToStart;

  return (
    <>
      <DashboardPageTitle>Moje postępy</DashboardPageTitle>

      <div className="mt-6 border-b text-secondary lg:mt-12 lg:flex lg:justify-between">
        <div className="mb-2 pb-2">
          <p className="mb-2 text-lg">Obecny okres treningowy</p>
          <div className="mb-1.5 flex gap-2">
            <p className="text-2xl font-bold uppercase md:text-3xl">
              {data.title}
            </p>
            <EditTrainingCamp />
          </div>

          <div className="flex">
            <span className="text-sm font-semibold uppercase text-primary md:text-base">
              {isCurrent && ` Tydzień ${currentWeek} `}
              {isAfter(new Date(), new Date(data.endDate)) && "Zakończone"}
            </span>

            {isCurrent && <span className="mx-2">|</span>}

            {isBefore(new Date(), new Date(data.endDate)) && (
              <span className="text-sm opacity-75 md:text-base">
                {daysCount} {daysCount > 1 ? "dni" : "dzień"} do{" "}
                {isCurrent ? "końca" : "rozpoczęcia"}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <Link
            href="/okresy-treningowe"
            className="mb-3 font-semibold text-primary hover:underline"
          >
            Zobacz poprzednie
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-6 lg:flex-row">
        <div className="lg:w-1/2 lg:border-r lg:pr-4">
          <Weights campId={request.params.id} />
        </div>
        <div className="h-full lg:w-1/2">
          <p className="bg-emerald-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            veniam ut, unde repellendus harum error? Debitis, qui atque numquam
            explicabo magni tenetur animi nostrum ducimus modi excepturi
            voluptates labore unde delectus blanditiis nulla perferendis minima
            facilis dolor alias iure pariatur cum! Eos sed officiis quidem rem
            cumque, libero modi deserunt animi. Mollitia repellat unde optio,
            totam minima corporis nobis amet dolor neque dolore alias qui omnis
            ipsam dolorem voluptatibus repudiandae possimus quod quo. Optio
            cupiditate officia voluptas dolore totam. Eveniet error totam vitae
            nulla culpa magnam ut? At architecto quod, veritatis fugit, tempora
            autem obcaecati nostrum corrupti deleniti cum doloremque.
          </p>
        </div>
      </div>
    </>
  );
}
