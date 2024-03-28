import { cookies } from "next/headers";
import axios from "@/app/_utils/axios/axiosInstance";

export interface IResponseData {
  data: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    startDate: Date;
    endDate: Date;
  };
}

export const fetchTrainingCampData = async (endpoint: string) => {
  const sessionToken = cookies().get("__session")?.value;

  try {
    const response = await axios.get(`/training-camp${endpoint}`, {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
