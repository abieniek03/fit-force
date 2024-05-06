"use client";

import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from "@tanstack/react-query";

import { Alert } from "../../Alert";
import { Dialog } from "../../Dialog";
import { FormField } from "../../form/FormField";
import { Button } from "../../Button";

import axios from "@/app/_utils/axios/axiosInstance";
import { getSessionToken } from "../../../_utils/helpers/getSessionToken";
import { editTrainingCampSchema } from "../../../_utils/validation/my-progress/edit-training-camp/edit-training-camp.schema";
import { IEditTrainingCampForm } from "@/app/_utils/validation/my-progress/edit-training-camp/edit-training-camp.types";
import { usePathname } from "next/navigation";

export function EditTrainingCamp() {
  const pathnmame = usePathname();
  const id = pathnmame.split("/")[2];

  const editTrainingCampForm = useForm<IEditTrainingCampForm>({
    resolver: zodResolver(editTrainingCampSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const sessionToken = getSessionToken();

  const getCampData = async () => {
    try {
      const response = await axios.get(`/training-camp/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return error.data;
    }
  };

  const editTrainingCamp = async (data: IEditTrainingCampForm) => {
    try {
      const response = await axios.patch(`/training-camp/${id}`, data, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return error.data;
    }
  };

  const sendForm = (data: IEditTrainingCampForm) => {
    try {
      const dto = {
        title: data.title,
        startDate: data.startDate
          ? new Date(data.startDate).toISOString()
          : data.startDate,
        endDate: data.endDate
          ? new Date(data.endDate).toISOString()
          : data.endDate,
      };

      edit.mutate(dto);
    } catch (error: any) {
      console.log(error);
    }
  };

  const currentData = useQuery({
    queryKey: ["camp-data"],
    queryFn: getCampData,
  });

  const edit = useMutation({
    mutationKey: ["editTrainingCamp"],
    mutationFn: editTrainingCamp,
  });

  const deleteCamp = async () => {
    const deleteAccept = window.confirm(
      "Czy na pewno chcesz usunąć okres treningowy?",
    );

    if (!deleteAccept) return null;

    try {
      await axios.delete(`/training-camp/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      window.location.reload();
    } catch {
      window.alert(
        "Nie udało się usunąć okresu treningowego. Spróbuj ponownie!",
      );
    }
  };

  useEffect(() => {
    edit.isSuccess && window.location.reload();
  }, [edit.isSuccess]);

  useEffect(() => {
    if (currentData.data) {
      const resetData = {
        title: currentData.data.data.title,
        startDate:
          new Date(currentData.data.data.startDate)
            .toISOString()
            .split("T")[0] || currentData.data.data.startDate,
        endDate:
          new Date(currentData.data.data.endDate).toISOString().split("T")[0] ||
          currentData.data.data.endDate,
      };

      editTrainingCampForm.reset(resetData);
    }
  }, [currentData.data]);

  return (
    <Dialog
      triggerLabel={<FaEdit className="md:text-xl" />}
      triggerType="accent"
      title="Edytuj okres treningowy"
    >
      <>
        <FormProvider {...editTrainingCampForm}>
          <form onSubmit={editTrainingCampForm.handleSubmit(sendForm)}>
            {edit.isError && (
              <Alert type="error">
                Edycja się nie powiodła. Sprawdź wprowadzone dane.
              </Alert>
            )}

            <Controller
              name="title"
              control={editTrainingCampForm.control}
              render={({ field }) => (
                <FormField {...field} id="title" label="Nazwa" />
              )}
            />

            <Controller
              name="startDate"
              control={editTrainingCampForm.control}
              render={({ field }) => (
                <FormField
                  {...field}
                  id="startDate"
                  type="date"
                  label="Data rozpoczęcia"
                />
              )}
            />

            <Controller
              name="endDate"
              control={editTrainingCampForm.control}
              render={({ field }) => (
                <FormField
                  {...field}
                  id="endDate"
                  type="date"
                  label="Data zakończenia"
                />
              )}
            />

            <Button styleType="primary" wFull={true} loading={edit.isPending}>
              Zatwierdź
            </Button>
          </form>
          <div className="mt-2">
            <Button styleType="secondary" wFull={true} onClick={deleteCamp}>
              Usuń okres treningowy
            </Button>
          </div>
        </FormProvider>
      </>
    </Dialog>
  );
}
