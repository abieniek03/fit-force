"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import logo from "@/app/_assets/images/logo-secondary.svg";
import { IoIosClose } from "react-icons/io";

export default function DashboardMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          "absolute top-0 h-screen w-full bg-primary p-4 transition-all duration-500 lg:sticky lg:left-0 lg:top-0 lg:block lg:w-[260px] lg:transition-none",
        )}
      >
        <div className="flex items-center justify-between">
          <Image src={logo} alt="FitForce" width={125} height={50} />
          <button
            onClick={() => setIsOpen(false)}
            className={"text-5xl text-accent lg:hidden"}
          >
            <IoIosClose />
          </button>
        </div>
      </nav>
    </>
  );
}
