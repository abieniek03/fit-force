import { redirect } from "next/navigation";
import { fetchData, ITrainingCamp } from "@/app/_utils/fetch/fetchData";

import { MyProgressNotExist } from "@/app/_components/dashboard/my-progress/MyProgressNotExist";
import { Loading } from "@/app/_components/Loading";

export default async function MyProgressRootPage() {
  const { data }: { data: ITrainingCamp } = await fetchData(
    "/training-camp?latest=true",
  );

  if (data.id === undefined) return <MyProgressNotExist />;

  if (data.id) {
    redirect(`moje-postepy/${data.id}`);
  }

  return <Loading />;
}
