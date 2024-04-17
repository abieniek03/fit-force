"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from "@tanstack/react-query";

import { Alert } from "../../Alert";
import { Dialog } from "../../Dialog";
import { FormField } from "../../form/FormField";
import { Button } from "../../Button";

import axios from "@/app/_utils/axios/axiosInstance";
import { getSessionToken } from "../../../_utils/helpers/getSessionToken";
import { addWeightSchema } from "@/app/_utils/validation/my-progress/add-weght/add-weight.schema";
import { IAddWeightForm } from "@/app/_utils/validation/my-progress/add-weght/add-weight.types";

export function AddWeight() {
  const pathname = usePathname();
  const campId = pathname.split("/")[2];

  const addWeightForm = useForm<IAddWeightForm>({
    resolver: zodResolver(addWeightSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const sessionToken = getSessionToken();

  const getCampData = async () => {
    try {
      const response = await axios.get(`/training-camp/${campId}`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return error.data;
    }
  };

  const addWeight = async (data: IAddWeightForm) => {
    try {
      const response = await axios.post("/weight", data, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return error.data;
    }
  };

  const sendForm = (data: IAddWeightForm) => {
    try {
      const dto = {
        campId,
        date: new Date(data.date).toISOString(),
        weight: Number(data.weight),
      };

      mutate(dto);
    } catch (error: any) {
      console.log(error);
    }
  };
  const camp = useQuery({
    queryKey: ["getCampData"],
    queryFn: getCampData,
  });

  const campData = camp?.data?.data;

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["addWeight"],
    mutationFn: addWeight,
  });

  const formattedDate = (date: string) => {
    return date.split("T")[0];
  };

  useEffect(() => {
    isSuccess && window.location.reload();
  }, [isSuccess]);

  return (
    <Dialog triggerLabel="Dodaj" triggerType="accent" title="Dodaj wagę">
      <FormProvider {...addWeightForm}>
        <form onSubmit={addWeightForm.handleSubmit(sendForm)}>
          {isError && <Alert type="error">Nie udało się dodać wagi.</Alert>}
          <FormField
            id="date"
            type="date"
            label="Data"
            min={formattedDate(campData?.startDate || "")}
            max={formattedDate(campData?.endDate || "")}
          />
          <FormField id="weight" type="number" label="Waga" step="0.1" />
          <Button styleType="primary" wFull={true} loading={isPending}>
            Dodaj
          </Button>
        </form>
      </FormProvider>
    </Dialog>
  );
}
