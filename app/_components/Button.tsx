import { type ComponentProps, type ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonStyleType = "primary" | "secondary";

interface Props {
  styleType: ButtonStyleType;
  children: ReactNode;
  size?: string;
  path?: string;
}

export function Button({
  styleType,
  children,
  size,
  path,
  onClick,
  ...rest
}: Readonly<ComponentProps<"button"> & Props>) {
  const buttonStyles = clsx(
    `rounded-lg px-4 py-2 bg-${styleType} text-accent ${size ? `text-${size}` : ""} transition-all duration-200 hover:bg-opacity-85 outline-primary`,
  );

  if (path) {
    return (
      <Link href={path} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
