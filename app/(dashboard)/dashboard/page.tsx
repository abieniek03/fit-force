import { Metadata } from "next/types";
import { currentUser } from "@clerk/nextjs";
import { format } from "date-fns";
import { pl } from "date-fns/locale";

import Link from "next/link";
import Image from "next/image";

import DashboardPageTitle from "@/app/_components/dashboard/DashboardPageTitile";

import imageMyProgress from "@/app/_assets/images/my-progress.jpg";
import imageExceriesBoook from "@/app/_assets/images/exceries-book.jpg";
import imageMyParameters from "@/app/_assets/images/my-parameters.jpg";

export const metadata: Metadata = {
  title: "Dashboard",
};

interface IMenuItem {
  title: string;
  image: any;
  path: string;
}

const menuItems: IMenuItem[] = [
  {
    title: "Moje postępy",
    image: imageMyProgress,
    path: "moje-postepy",
  },
  {
    title: "Atlas ćwiczeń",
    image: imageExceriesBoook,
    path: "atlas-cwiczen",
  },
  {
    title: "Moje dane",
    image: imageMyParameters,
    path: "moje-dane",
  },
];

export default async function DashboardPage() {
  const user = await currentUser();

  const getCurrentDate = () => {
    const formattedDate = format(new Date(), "EEEE, d MMMM yyyy", {
      locale: pl,
    });

    return `${formattedDate.slice(0, 1).toLocaleUpperCase()}${formattedDate.slice(1)}`;
  };

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold text-secondary lg:text-4xl">
          Cześć {user?.firstName}!👋
        </h1>

        <span>{getCurrentDate()}</span>
      </header>
      <div>
        <div className="mt-4 flex flex-col justify-between gap-4 lg:mt-8 lg:flex-row">
          {menuItems.map((el: IMenuItem, index: number) => (
            <Link
              href={el.path}
              key={index}
              className="group relative h-[560px] w-full overflow-hidden rounded-lg "
            >
              <Image
                src={el.image}
                alt={el.title}
                className="h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute bottom-8 left-8 text-5xl font-bold text-primary md:text-6xl">
                <span>{el.title.split(" ")[0]}</span>
                <br />
                <span>{el.title.split(" ")[1]}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
