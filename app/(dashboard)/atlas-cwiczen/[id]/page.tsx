import Image from "next/image";
import { redirect } from "next/navigation";

import { IServerComponentProps } from "@/app/_types/types";
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

export default async function ExercisesPage({ params }: IServerComponentProps) {
  const query = gql`
    {
      allTrainingGroups(filter: { path: {eq: ${params.id} } }){
        title
        path
      }
      allExercises(filter: {group: { eq: ${params.id} } }) {
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
  const { allTrainingGroups, allExercises } = data;

  if (!allTrainingGroups.length) redirect("/atlas-cwiczen");

  return (
    <div className="max-w-screen-3xl mx-auto mt-2 rounded-md bg-accent p-4">
      <div className="mb-16 text-center">
        <DashboardPageTitle>{allTrainingGroups[0].title}</DashboardPageTitle>
      </div>
      {allExercises.length ? (
        <div className="grid gap-16">
          {allExercises.map((exercise: IExercise, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-md border bg-accent p-4 lg:w-full lg:flex-row"
            >
              <div className="mb-4 lg:mb-0 lg:mr-8">
                <Image
                  src={exercise.image?.url}
                  alt={exercise.title}
                  width={400}
                  height={200}
                  className="rounded-md"
                />
              </div>
              <div className="lg:w-3/4">
                <h3 className="mb-4 text-xl font-semibold">{exercise.title}</h3>
                <p>{exercise.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-semibold text-primary">
          Brak danych...
        </p>
      )}
    </div>
  );
}
