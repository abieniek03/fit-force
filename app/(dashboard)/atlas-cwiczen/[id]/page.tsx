import Image from "next/image";
import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";
import { IServerComponentProps } from "@/app/_types/types";

const exercises = [
  {
    title: "Przysiad ze sztangą",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description:
      "Stań prosto, trzymając sztangę na karku za pomocą odpowiedniego uchwytu Opuszczaj ciało w dół, jakbyś siadał na krzesło, zachowując plecy proste Wróć do pozycji wyjściowej, napinając mięśnie nóg.",
  },
  {
    title: "Wykroki ze sztangą",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description:
      "Stań prosto, trzymając sztangę na plecach za pomocą odpowiedniego uchwytu. Zrób duży krok do przodu, opuszczając kolano drugiej nogi w dół. Wróć do pozycji wyjściowej i powtórz na drugą stronę.",
  },
  {
    title: "Wyciskanie nogami na maszynie do wyciskania",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description:
      "Usiądź na maszynie do wyciskania z nogami na podnośniku. Wypchnij podnośnik w górę, prostując nogi. Powoli opuszczaj podnośnik do pozycji wyjściowej.",
  },
  {
    title: "Wspięcia na palce",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description:
      "To ćwiczenie skupia się głównie na mięśniach łydek, ale również angażuje czworoglowe Stań prosto na podłożu płaskim, trzymając się np. poręczy. Podnoś obie pięty, unosząc się na palcach.Opuszczaj się powoli z powrotem na płaskość stóp.",
  },
  {
    title: "Przysiady ze sztangielkami",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description:
      "Trzymając sztangielki wzdłuż ciała, stań prosto. Opuszczaj ciało w dół, jak przy tradycyjnym przysiadzie, zachowując plecy proste. Wróć do pozycji wyjściowej.",
  },
  {
    title: "Proste wznoszenie nóg",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description:
      "Leż na ławce z głową w dół, trzymając się krawędzi ławki. Unosź nogi prosto do góry, napinając mięśnie czworogłowe. Opuszczaj nogi kontrolowanie do pozycji wyjściowej.",
  },
  {
    title: "Przykładowe Ćwiczenie 1",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description: "Opis ćwiczenia 1",
  },
  {
    title: "Przykładowe Ćwiczenie 1",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description: "Opis ćwiczenia 1",
  },
  {
    title: "Przykładowe Ćwiczenie 1",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description: "Opis ćwiczenia 1",
  },
  {
    title: "Przykładowe Ćwiczenie 1",
    group: "czworoglowy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description: "Opis ćwiczenia 1",
  },
  {
    title: "Przykładowe Ćwiczenie 2",
    group: "dwugłowe uda, pośladki",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    description: "Opis ćwiczenia 2",
  },
];

export default function ExercisePage({ params }: IServerComponentProps) {
  const { id } = params;
  const muscleName = id;

  const filteredExercises = exercises.filter(
    (exercise) => exercise.group.toLowerCase() === muscleName.toLowerCase(),
  );

  if (filteredExercises.length === 0)
    return (
      <p className="text-center text-secondary">
        Brak dostępnych ćwiczeń dla tej partii mięśniowej.
      </p>
    );

  return (
    <div className="max-w-screen-3xl  mx-auto mt-2  rounded-md bg-accent p-4 text-center">
      <div className="mb-24 text-center">
        <DashboardPageTitle>{muscleName}</DashboardPageTitle>
      </div>
      <div className="grid gap-16">
        {filteredExercises.map((exercise, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-md bg-accent p-4 shadow-md lg:w-full lg:flex-row"
          >
            <div className="mb-4 lg:mb-0 lg:mr-4">
              <Image
                src={exercise.imageUrl}
                alt={exercise.title}
                width={400}
                height={200}
                className="rounded-md"
              />
            </div>
            <div className="lg:w-3/4">
              <h3 className="mb-2 text-xl font-semibold">{exercise.title}</h3>
              <p>{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
