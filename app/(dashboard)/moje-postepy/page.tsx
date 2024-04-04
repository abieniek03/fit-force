import { redirect } from "next/navigation";
import {
  fetchTrainingCampData,
  IResponseData as ITrainingCampData,
} from "@/app/_utils/fetch/fetchTrainingCampData";

import MyProgressNotExist from "@/app/_components/dashboard/my-progress/MyProgressNotExist";
import { Loading } from "@/app/_components/Loading";

export default async function MyProgressRootPage() {
  const { data }: ITrainingCampData =
    await fetchTrainingCampData("?latest=true");

  if (data.id === undefined) return <MyProgressNotExist />;

  if (data.id) {
    redirect(`moje-postepy/${data.id}`);
  }

  return <Loading />;
}
