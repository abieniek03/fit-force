"use client";

import Image from "next/image";
import Link from "next/link";
import { DashboardPageTitle } from "@/app/_components/dashboard/DashboardPageTitle";
import { motion } from "framer-motion";

interface IGroup {
  name: string;
  imageUrl: string;
  link: string;
}

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

export default function ExerciseBookSection() {
  return (
    <div className="mt-2 w-full rounded-md bg-accent p-4">
      <DashboardPageTitle>Atlas Ćwiczeń</DashboardPageTitle>
      <div className="mt-8 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {muscleGroups.map((group: IGroup, index: number) => (
          <motion.div
            key={index}
            className="group relative mb-6 rounded-md hover:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/atlas-cwiczen/${group.link}`}
              className="overflow-hidden"
            >
              <div className="relative z-10 rounded-md bg-black">
                <Image
                  src={group.imageUrl}
                  alt={group.name}
                  width={400}
                  height={100}
                  className="box-shadow w-full overflow-hidden rounded-t-md object-cover opacity-50"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <p className="text-center text-xl font-bold text-accent md:text-3xl lg:text-xl xl:text-lg">
                    {group.name}
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
