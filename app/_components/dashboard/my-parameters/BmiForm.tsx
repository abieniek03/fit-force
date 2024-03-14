"use client";

import { useForm } from "react-hook-form";

type Inputs = {
  weight: number;
  height: number;
};

export function BmiForm() {
  const { register, handleSubmit, watch } = useForm<Inputs>();

  const calculateBMI = (weight: number, height: number) => {
    if (weight && height) {
      const bmi = weight / ((height / 100) * (height / 100));
      return bmi.toFixed(2);
    }
    return "";
  };

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form
      className="rounded-md border border-gray-300 p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center">
        <input
          {...register("weight")}
          type="number"
          placeholder="Weight (kg)"
          className="w-full rounded-md border border-primary px-4 py-2 focus:outline-none focus:ring-1 focus:ring-content"
        />
      </div>
      <div className="mt-4 flex items-center">
        <input
          {...register("height")}
          type="number"
          placeholder="Height (cm)"
          className="w-full rounded-md border border-primary px-4 py-2 focus:outline-none focus:ring-1 focus:ring-content"
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded-md bg-primary px-4 py-2 text-white hover:bg-content"
      >
        Calculate BMI
      </button>

      {watch("weight") && watch("height") && (
        <div className="mt-4">
          <p>Weight: {watch("weight")} kg</p>
          <p>Height: {watch("height")} cm</p>
          <p>
            BMI:{" "}
            {calculateBMI(Number(watch("weight")), Number(watch("height")))}
          </p>
        </div>
      )}
    </form>
  );
}
