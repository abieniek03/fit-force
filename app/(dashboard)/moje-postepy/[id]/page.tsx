import { Metadata } from "next/types";
import Link from "next/link";

import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";
import { IServerComponentProps } from "@/app/_types/types";
import {
  fetchTrainingCampData,
  IResponseData as ITrainingCampData,
} from "@/app/_utils/fetch/fetchTrainingCampData";

import { differenceInWeeks, isAfter, isBefore } from "date-fns";
import { differenceInDays } from "date-fns/differenceInDays";

export const metadata: Metadata = {
  title: "Moje postępy",
};

export default async function MyProgressPage(request: IServerComponentProps) {
  const { data }: ITrainingCampData = await fetchTrainingCampData(
    `/${request.params.id}`,
  );

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
          <p className="mb-1.5 text-2xl font-bold uppercase md:text-3xl">
            {data.title}
          </p>

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
            href="/moje-postepy/okresy-treningowe/user-id"
            className="mb-3 font-semibold text-primary hover:underline"
          >
            Zobacz poprzednie
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-6 lg:flex-row">
        <div className="border-r lg:w-1/2 lg:pr-4">
          <p className="bg-red-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            distinctio! Tenetur excepturi et tempore quasi magnam dolore harum
            maxime id, tempora neque veniam nihil facilis ipsam veritatis rem
            aspernatur esse fugiat. Ratione dignissimos et incidunt quidem,
            quaerat cupiditate veniam quam.
          </p>
          <p className="bg-sky-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            quidem ratione amet sint suscipit id corrupti facere neque culpa
            eos. Expedita, quia accusamus, eveniet quis sed excepturi deserunt
            unde dicta illum commodi atque in, impedit alias. Dolores deserunt
            officiis dolorum?
          </p>
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
