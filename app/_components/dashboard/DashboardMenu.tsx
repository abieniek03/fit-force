"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import logo from "@/app/_assets/images/logo-secondary.svg";
import { IoIosClose } from "react-icons/io";

interface IMenuItems {
  id: string;
  path: string;
  label: string;
}

export default function DashboardMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: IMenuItems[] = [
    { id: "dashboard", path: "/dashboard", label: "Dashboard" },
    { id: "moje-dane", path: "/moje-dane", label: "Moje dane" },
    { id: "atlas-cwiczen", path: "/atlas-cwiczen", label: "Atlas ćwiczeń" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={clsx(
          "mt-4 rounded-e-lg bg-primary px-3 py-1.5 font-bold text-accent transition-all lg:hidden",
        )}
      >
        Menu
      </button>
      <nav
        className={clsx(
          isOpen ? "left-0" : "-left-full",
          "absolute top-0 z-50 h-screen w-full bg-primary transition-all duration-500 lg:sticky lg:left-0 lg:top-0 lg:block lg:w-[260px] lg:rounded-e-xl lg:transition-none",
        )}
      >
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            alt="FitForce"
            width={100}
            height={30}
            className="my-5 ml-5 lg:w-1/2"
          />
          <button
            onClick={() => setIsOpen(false)}
            className={"p-2 text-3xl text-accent lg:hidden"}
          >
            <IoIosClose />
          </button>
        </div>
        <div>
          {menuItems.map((el, index) => (
            <Link
              onClick={() => setIsOpen(false)}
              href={el.path}
              key={index}
              className={clsx(
                "block p-2 pl-6",
                el.id === pathname.split("/")[1]
                  ? "bg-accent font-bold"
                  : "text-accent",
              )}
            >
              {el.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
