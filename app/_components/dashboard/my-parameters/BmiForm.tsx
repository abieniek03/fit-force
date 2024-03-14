"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField } from "../../form/FormField";
import { Button } from "../../Button";
interface IFormFields {
  height: number;
  weight: number;
}

export function BmiForm() {
  const [bmiValue, setBmiValue] = useState<number>();

  const bmiFormSchema = z.object({
    height: z.string({ required_error: "Wymagane" }),
    weight: z.string({ required_error: "Wymagane" }),
  });

  const bmiForm = useForm<IFormFields>({
    resolver: zodResolver(bmiFormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const calculateBmi = (data: IFormFields) => {
    const height = Number(data.height);
    const weight = Number(data.weight);

    const bmi = weight / ((height / 100) * (height / 100));
    setBmiValue(Number(bmi.toFixed(2)));
  };

  return (
    <div className="my-8">
      <FormProvider {...bmiForm}>
        <form onSubmit={bmiForm.handleSubmit(calculateBmi)}>
          <FormField
            id="height"
            label="Wzrost"
            type="number"
            minValue={120}
            maxValue={230}
          />
          <FormField
            id="weight"
            label="Waga"
            type="number"
            minValue={30}
            maxValue={250}
          />
          <Button styleType="primary">Oblicz BMI</Button>
        </form>
      </FormProvider>

      {bmiValue && <p className="mt-4">Wartoś bmi: {bmiValue}</p>}
    </div>
  );
}
