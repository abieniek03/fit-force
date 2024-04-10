import { AddWeight } from "./AddWeight";
import { fetchData, IWeight } from "@/app/_utils/fetch/fetchData";

import { format } from "date-fns";
import { CalcDifference } from "./CalcDiffrence";
import { AllWeights } from "./AllWeights";

interface Props {
  campId: string;
}

export async function LatestWeights({ campId }: Props) {
  const { data } = await fetchData(`/weight/camp-id=${campId}?sort=desc`);

  return (
    <div className="rounded-md border p-4">
      <div className="mb-4 flex justify-between border-b pb-4">
        <h3 className="text-xl font-semibold">Waga</h3>
        <AddWeight />
      </div>
      <div className="min-h-10">
        {data.length ? (
          data.slice(0, 5).map((el: IWeight, index: number) => (
            <div
              className="grid grid-cols-6 px-2 py-1 odd:bg-slate-100"
              key={index}
            >
              <span className="col-span-4">
                {format(new Date(el.date), "dd.MM.yyyy")}
              </span>
              <span className="text-end">{el.weight}</span>
              <span className="flex items-center justify-end">
                <CalcDifference
                  weight={Number(el.weight)}
                  prevWeight={Number(data[index - 1]?.weight)}
                />
              </span>
            </div>
          ))
        ) : (
          <p className="mt-10 text-center text-sm text-secondary">
            Brak danych
          </p>
        )}
      </div>
      {data.length > 5 && (
        <div className="flex justify-center pt-4">
          <AllWeights campId={campId} />
        </div>
      )}
    </div>
  );
}
