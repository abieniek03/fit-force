"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { Alert } from "@/app/_components/Alert";
import { FormField } from "@/app/_components/form/FormField";
import { Button } from "@/app/_components/Button";

import axios from "@/app/_utils/axios/axiosInstance";
import { getSessionToken } from "../../../_utils/helpers/getSessionToken";
import { addMyDataSchema } from "@/app/_utils/validation/my-data/add/add-my-data";
import { IAddMyData } from "@/app/_utils/validation/my-data/add/add-my-data.types";
import { useEffect } from "react";

export default function AddUserDataPage() {
  const router = useRouter();

  const addUserDataForm = useForm<IAddMyData>({
    resolver: zodResolver(addMyDataSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const sessionToken = getSessionToken();

  const addUserProfile = async (data: IAddMyData) => {
    try {
      const response = await axios.post("user-profile", data, {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      return response.data;
    } catch (error: any) {
      return error.data;
    }
  };

  const sendForm = (data: IAddMyData) => {
    try {
      const dto = {
        birthDate: new Date(data.birthDate).toISOString(),
        height: Number(data.height),
      };

      mutate(dto);
    } catch (error: any) {
      console.log(error);
    }
  };

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["addUserProfile"],
    mutationFn: addUserProfile,
  });

  useEffect(() => {
    console.log(isSuccess);
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary lg:text-4xl">
        Dane użytkownika
      </h1>
      <FormProvider {...addUserDataForm}>
        <form
          className="mt-8 max-w-md"
          onSubmit={addUserDataForm.handleSubmit(sendForm)}
        >
          {isError && <Alert type="error">Nie udało się dodać danych.</Alert>}
          <FormField id="birthDate" type="date" label="Data urodzenia" />
          <FormField id="height" type="number" label="Wzrost" />
          <Button styleType="primary" wFull={true} loading={isPending}>
            Dodaj
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
