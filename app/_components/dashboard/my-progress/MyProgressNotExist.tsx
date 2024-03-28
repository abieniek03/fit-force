import AddTrainingCamp from "./AddTrainingCamp";

export default function MyProgressNotExist() {
  return (
    <div className="mt-8">
      <p className="text-center text-3xl font-semibold leading-10 text-primary sm:text-4xl md:text-5xl lg:text-6xl">
        Nie masz jeszcze żadnego okresu treningowego
      </p>

      <div className="mt-8 flex justify-center">
        <AddTrainingCamp />
      </div>
    </div>
  );
}
