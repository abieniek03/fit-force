import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import axios from "@/app/_utils/axios/axiosInstance";
import MyProgressNotExist from "@/app/_components/dashboard/my-progress/MyProgressNotExist";

export default async function MyProgressRootPage() {
  const sessionToken = cookies().get("__session")?.value;

  const getData = async () => {
    try {
      const response = await axios.get(`/training-camp?latest=true`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  const { data } = await getData();

  if (data.id) redirect(`moje-postepy/${data.id}`);

  return <MyProgressNotExist />;
}
