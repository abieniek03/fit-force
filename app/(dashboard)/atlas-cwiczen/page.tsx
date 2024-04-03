"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image"; // Import Image component
import Link from "next/link"; // Import Link component
import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";
import { motion } from "framer-motion";

const muscleGroups = [
  {
    name: "czworogłowe uda",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg",
    link: "/czworoglowy",
  },
  {
    name: "dwugłowe uda, pośladki",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/dwuglowe-uda-posladki",
  },
  {
    name: "barki",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg",
    link: "/barki",
  },
  {
    name: "klatka",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/klatka",
  },
  {
    name: "plecy",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/plecy",
  },
  {
    name: "biceps",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/biceps",
  },
  {
    name: "triceps",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/triceps",
  },
  {
    name: "brzuch",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/brzuch",
  },
  {
    name: "sztuki walki",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/sztuki-walki",
  },
  {
    name: "cardio",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/cardio",
  },
  {
    name: "stretching",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg",
    link: "/stretching",
  },
];

interface IExercise {
  title: string;
  group: string;
  imageUrl: string;
  description: string;
}

const exercises: IExercise[] = [];

export default function ExerciseBookSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredExercises = exercises.filter((exercise) =>
    exercise.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="mt-2 w-full rounded-md bg-accent p-4">
      <DashboardPageTitle>Atlas Ćwiczeń</DashboardPageTitle>
      <div className="mb-11 mt-14">
        <input
          type="text"
          placeholder="Znajdź kategorię..."
          className="w-full rounded-md border border-secondary px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mt-24 grid grid-cols-1 gap-10  lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {muscleGroups.map((group) => (
          <motion.div
            key={group.name}
            className="group relative mb-6 rounded-md hover:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/atlas-cwiczen/${group.link}`}>
              <div className="cursor-pointer">
                <div className="absolute inset-0 z-30 flex items-center justify-center rounded-lg bg-black opacity-40">
                  <p className="text-lg font-bold text-accent">{group.name}</p>
                </div>
                <div className="relative z-10">
                  <Image
                    src={group.imageUrl}
                    alt={group.name}
                    width={400}
                    height={100}
                    className="box-shadow w-full rounded-t-md object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-lg font-bold text-accent">
                      {group.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredExercises.map((exercise) => (
          <motion.div
            key={exercise.title}
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="overflow-hidden rounded-lg border">
              <h3 className="mb-2 bg-primary px-4 py-2 text-lg font-bold text-white">
                {exercise.title}
              </h3>
              <div>
                <Image
                  className="box-shadow w-full rounded-t-md object-cover md:rounded-l-md"
                  src={exercise.imageUrl}
                  alt={exercise.title}
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-4">
                <p>{exercise.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
