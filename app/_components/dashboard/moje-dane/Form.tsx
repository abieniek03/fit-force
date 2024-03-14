// Form.tsx
"use client";

import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from "react-hook-form";

type Inputs = {
  weight: number;
  height: number;
};

const Form = () => {
    const { register, handleSubmit, watch } = useForm<Inputs>();
  
    const calculateBMI = (weight: number, height: number) => {
      if (weight && height) {
        const bmi = weight / ((height / 100) * (height / 100)); 
        return bmi.toFixed(2);
      }
      return '';
    };
  
    const onSubmit = (data: Inputs) => {
      console.log(data); 
    };
  
    return (
      <form
        className="border border-gray-300 p-4 rounded-md"
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
        <div className="flex items-center mt-4">
          <input
            {...register("height")}
            type="number"
            placeholder="Height (cm)"
            className="w-full rounded-md border border-primary px-4 py-2 focus:outline-none focus:ring-1 focus:ring-content"
          />
        </div>
        
        <button type="submit" className="mt-4 rounded-md bg-primary px-4 py-2 text-white hover:bg-content">
          Calculate BMI
        </button>
  
        {watch("weight") && watch("height") && (
          <div className="mt-4">
            <p>Weight: {watch("weight")} kg</p>
            <p>Height: {watch("height")} cm</p>
            <p>BMI: {calculateBMI(Number(watch("weight")), Number(watch("height")))}</p>
          </div>
        )}
      </form>
  
  );
};



export default Form;