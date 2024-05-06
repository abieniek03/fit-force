"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { Loading } from "../_components/Loading";
import { ILayout } from "../_types/types";

import axios from "@/app/_utils/axios/axiosInstance";
import { getSessionToken } from "../_utils/helpers/getSessionToken";

export function UserProfileChecker({ children }: Readonly<ILayout>) {
  const router = useRouter();
  const pathname = usePathname();
  const sessionToken = getSessionToken();

  const getUserData = async () => {
    try {
      const response = await axios.get("user-profile", {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return error;
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["user-data"],
    queryFn: getUserData,
  });

  useEffect(() => {
    if (data?.response?.status === 404) {
      router.push("/moje-dane/dodaj");
    } else {
      if (pathname === "/moje-dane/dodaj") {
        router.push("/");
      }
    }
  }, [data]);

  return <>{isLoading ? <Loading /> : children}</>;
}
