"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { Alert } from "../../Alert";
import { Dialog } from "../../Dialog";
import { FormField } from "../../form/FormField";
import { Button } from "../../Button";

import axios from "@/app/_utils/axios/axiosInstance";
import { addTrainingCampSchema } from "@/app/_utils/validation/my-progress/add-training-camp/add-training-camp.schema";
import { getSessionToken } from "../../../_utils/helpers/getSessionToken";
import { IAddTrainingCampForm } from "../../../_utils/validation/my-progress/add-training-camp/add-training-camp.types";

export default function AddTrainingCamp() {
  const addTrainingCampForm = useForm<IAddTrainingCampForm>({
    resolver: zodResolver(addTrainingCampSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const sessionToken = getSessionToken();

  const handleApi = async (data: IAddTrainingCampForm) => {
    const response = await axios.post("/training-camp", data, {
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    return response.data;
  };

  const sendForm = (data: IAddTrainingCampForm) => {
    console.log(data);
    const dto = {
      title: data.title,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
    };

    mutate(dto);
  };

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["addTrainingCamp"],
    mutationFn: handleApi,
  });

  useEffect(() => {
    isSuccess && window.location.reload();
  }, [isSuccess]);

  return (
    <Dialog
      triggerLabel="Dodaj okres treinigowy"
      title="Dodaj okres treningowy"
    >
      <>
        <FormProvider {...addTrainingCampForm}>
          <form onSubmit={addTrainingCampForm.handleSubmit(sendForm)}>
            {isError && <Alert type="error">coś</Alert>}
            <FormField id="title" label="Nazwa" type="string" />
            <FormField id="startDate" type="date" label="Data rozpoczęcia" />
            <FormField id="endDate" type="date" label="Data zakończenia" />
            <Button styleType="primary" wFull={true} loading={isPending}>
              Wyślij
            </Button>
          </form>
        </FormProvider>
      </>
    </Dialog>
  );
}
