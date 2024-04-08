import { AddWeight } from "./AddWeight";
import { fetchData, IWeight } from "@/app/_utils/fetch/fetchData";

import { format } from "date-fns";
import { CalcDifference } from "./CalcDiffrence";

interface Props {
  campId: string;
}

export async function Weights({ campId }: Props) {
  const { data } = await fetchData(`/weight/camp-id=${campId}`);
  return (
    <div className="rounded-md border p-4">
      <div className="mb-4 flex justify-between border-b pb-4">
        <h3 className=" text-xl font-semibold">Waga</h3>
        <AddWeight />
      </div>

      <div>
        {data.map((el: IWeight, index: number) => (
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
        ))}
      </div>
    </div>
  );
}
