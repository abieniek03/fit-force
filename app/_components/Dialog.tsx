"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import clsx from "clsx";

import { MdClose } from "react-icons/md";

interface Props {
  triggerLabel: string | JSX.Element;
  triggerType: "primary" | "accent";
  title: string;
  children: JSX.Element;
}

export function Dialog({
  triggerLabel,
  triggerType,
  title,
  children,
}: Readonly<Props>) {
  return (
    <>
      <RadixDialog.Root>
        <RadixDialog.Trigger asChild>
          <button
            className={clsx(
              triggerType === "primary" &&
                "rounded-lg bg-primary px-4 py-2 text-accent",
              triggerType === "accent" && "text-sm text-primary md:p-1",
            )}
          >
            {triggerLabel}
          </button>
        </RadixDialog.Trigger>
        <RadixDialog.Portal>
          <RadixDialog.Overlay className="fixed inset-0 left-0 top-0 z-20 bg-black/75" />
          <RadixDialog.Content className="fixed left-1/2 top-1/2 z-20 w-[93vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-4 lg:p-8">
            <div className="mb-4 flex items-center justify-between border-b pb-4">
              <RadixDialog.Title className="text-2xl font-bold text-secondary">
                {title}
              </RadixDialog.Title>
              <RadixDialog.Close asChild>
                <button className="p-1">
                  <MdClose className="text-2xl font-bold text-secondary" />
                </button>
              </RadixDialog.Close>
            </div>
            <div>{children}</div>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </>
  );
}
