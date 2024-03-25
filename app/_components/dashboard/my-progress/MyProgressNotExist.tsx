import { Dialog } from "../../Dialog";

export default function MyProgressNotExist() {
  return (
    <div className="mt-8">
      <p className="text-center text-3xl font-semibold leading-10 text-primary sm:text-4xl md:text-5xl lg:text-6xl">
        Nie masz jeszcze żadnego okresu treningowego
      </p>
      <Dialog triggerLabel="Dodaj" title="Dodaj okres treningowy">
        <p>Siema, tutaj formularz będzie</p>
      </Dialog>
    </div>
  );
}
