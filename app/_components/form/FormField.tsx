"use client";
import clsx from "clsx";
import { useFormContext, useController } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  type?: string;
  minValue?: number;
  maxValue?: number;
}

export function FormField({
  label,
  id,
  type,
  minValue,
  maxValue,
}: Readonly<Props>) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { field } = useController({
    control,
    name: id,
  });

  return (
    <div className="mb-3 text-secondary">
      <label htmlFor={id} className="mb-1 block">
        {label}
      </label>
      <input
        type={type || "text"}
        min={minValue || 0}
        max={maxValue}
        className={clsx(
          "w-full rounded-lg border px-4 py-2 focus:outline-primary",
          errors[id]?.message &&
            "outline outline-1 outline-error focus:outline-2 focus:outline-primary",
        )}
        value={field.value}
        onChange={field.onChange}
      />
      {errors[id] && (
        <p className="mt-1 text-xs text-error">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
