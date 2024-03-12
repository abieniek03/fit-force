import Image from "next/image";
import Link from "next/link";

import icon from "@/app/_assets/images/logo-icon.svg";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center text-secondary">
        <div className="mb-2 flex items-center justify-center lg:mb-4">
          <Image src={icon} alt="FitForce" height={100} />
          <h1 className="text-8xl font-bold">404</h1>
        </div>
        <p className="mb-8 text-xl font-bold text-primary md:text-2xl lg:text-3xl">
          Nie znaleziono takiej strony...
        </p>
        <Link href="/" className="underline lg:text-lg">
          Powrót do strony głównej
        </Link>
      </div>
    </div>
  );
}
