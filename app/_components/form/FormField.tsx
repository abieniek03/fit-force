"use client";

import { type ComponentProps } from "react";
import clsx from "clsx";
import { useFormContext, useController } from "react-hook-form";

interface Props {
  id: string;
  label: string;
}

export function FormField({
  label,
  id,
  ...rest
}: Readonly<ComponentProps<"input"> & Props>) {
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
        type={rest.type || "text"}
        className={clsx(
          "w-full rounded-lg border px-4 py-2 focus:outline-primary",
          errors[id]?.message &&
            "outline outline-1 outline-error focus:outline-2 focus:outline-primary",
        )}
        value={field.value}
        onChange={field.onChange}
        {...rest}
      />
      {errors[id] && (
        <p className="mt-1 text-xs text-error">
          {errors[id]?.message?.toString()}
        </p>
      )}
    </div>
  );
}
