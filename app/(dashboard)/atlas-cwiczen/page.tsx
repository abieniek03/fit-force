"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";

import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gql/gqlClient";

interface ITrainingGroup {
  title: string;
  image: {
    url: string;
  };
  path: string;
}

export default async function TrainingGroupPage() {
  const query = gql`
    {
      allTrainingGroups {
        title
        image {
          url
        }
        path
      }
    }
  `;

  const { allTrainingGroups }: any = await gqlClient.request(query);

  return (
    <div className="mt-2 w-full rounded-md bg-accent p-4">
      <div className="text-center">
        <DashboardPageTitle>Atlas Ćwiczeń</DashboardPageTitle>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {allTrainingGroups.map((group: ITrainingGroup, index: number) => (
          <motion.div
            key={index}
            className="group relative mb-6 rounded-md hover:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/atlas-cwiczen/${group.path}`}
              className="overflow-hidden"
            >
              <div className="relative z-10 rounded-md bg-black">
                <Image
                  src={group.image?.url}
                  alt={group.path}
                  width={400}
                  height={200}
                  className="box-shadow w-full overflow-hidden rounded-t-md object-cover opacity-50 lg:h-48"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <p className="text-center text-xl font-bold text-accent md:text-3xl lg:text-xl xl:text-lg">
                    {group.title}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
