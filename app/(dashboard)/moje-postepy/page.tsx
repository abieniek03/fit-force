"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { MyProgressNotExist } from "@/app/_components/dashboard/my-progress/MyProgressNotExist";
import { Loading } from "@/app/_components/Loading";
import { getSessionToken } from "@/app/_utils/helpers/getSessionToken";
import axios from "@/app/_utils/axios/axiosInstance";

export default function MyProgressRootPage() {
  const router = useRouter();
  const sessionToken = getSessionToken();

  const getCampData = async () => {
    try {
      const response = await axios.get("/training-camp?latest=true", {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["camp-data"],
    queryFn: getCampData,
  });

  useEffect(() => {
    if (isSuccess && data.data.id !== undefined) {
      const id = data.data.id;
      router.push(`moje-postepy/${id}`);
    }
  }, [isSuccess, data]);

  if (!isPending && (isError || !data.data.id)) return <MyProgressNotExist />;

  return <Loading />;
}
