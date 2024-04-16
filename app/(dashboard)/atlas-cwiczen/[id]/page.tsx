import Image from "next/image";
import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gql/gqlClient";

interface IExercise {
  group: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

export default async function ExerciseSection() {
  const query = gql`
    {
      allExercises {
        group
        title
        description
        image {
          url
        }
      }
    }
  `;

  const data: any = await gqlClient.request(query);
  const { allExercises } = data;
 

  return (
    <div className="max-w-screen-3xl  mx-auto mt-2  rounded-md bg-accent p-4 text-center">
      <div className="mb-24 text-center">
        <DashboardPageTitle>{allExercises[0].group}</DashboardPageTitle>
      </div>
      <div className="grid gap-16">
        {allExercises.map((exercise: IExercise, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-md bg-accent p-4 shadow-md lg:w-full lg:flex-row"
          >
            <div className="mb-4 lg:mb-0 lg:mr-4">
              <Image
                src={exercise.image?.url}
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
