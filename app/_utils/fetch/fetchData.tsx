import { cookies } from "next/headers";
import axios from "@/app/_utils/axios/axiosInstance";

export interface ITrainingCamp {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  startDate: Date;
  endDate: Date;
}

export interface IWeight {
  date: string;
  weight: number;
}

export const fetchData = async (endpoint: string) => {
  const sessionToken = cookies().get("__session")?.value;

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
