import { redirect } from "next/navigation";
import {
  fetchTrainingCampData,
  IResponseData as ITrainingCampData,
} from "@/app/_utils/fetch/fetchTrainingCampData";

import MyProgressNotExist from "@/app/_components/dashboard/my-progress/MyProgressNotExist";

export default async function MyProgressRootPage() {
  const { data }: ITrainingCampData =
    await fetchTrainingCampData("?latest=true");

  if (data.id) redirect(`moje-postepy/${data.id}`);

  return <MyProgressNotExist />;
}
