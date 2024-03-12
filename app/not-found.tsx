import Image from "next/image";
import icon from "@/app/_assets/images/logo-icon.svg";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-10 flex items-center justify-center">
          <Image src={icon} alt="FitForce" height={100} className="mr-5" />
          <h1 className="text-8xl font-bold text-primary">404</h1>
        </div>
        <h2 className="mb-20 text-xl text-secondary">
          Nie znaleziono takiej strony...
        </h2>
        <a
          href="/"
          className="cursor-pointer text-lg text-primary hover:underline"
        >
          Powrót do strony głównej
        </a>
      </div>
    </div>
  );
}
