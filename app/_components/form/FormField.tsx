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
  return (
    <div className="text-secondary">
      <label htmlFor={id} className="mb-1 block">
        {label}
      </label>
      <input
        type={type || "text"}
        min={minValue || 0}
        max={maxValue}
        className="w-full rounded-lg border px-4 py-2 focus:outline-primary"
      />
    </div>
  );
}
