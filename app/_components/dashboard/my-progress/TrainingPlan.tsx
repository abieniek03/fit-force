import Link from "next/link";
export function TrainingPlan() {
  return (
    <div className="rounded-md border p-4">
      <div className="mb-4 flex justify-between border-b pb-4">
        <h3 className="text-xl font-semibold">Plan treningowy</h3>
      </div>
      <div className="text-center text-sm">
        <p className="mx-auto mb-2 max-w-sm">
          Funkcja będzie dostępna w przyszłości, aby dowiedzieć się o
          ćwiczeniach przejdź do
        </p>
        <Link
          href="/atlas-cwiczen"
          className="font-semibold uppercase text-primary hover:underline"
        >
          Atlasu Ćwiczeń
        </Link>
      </div>
    </div>
  );
}
