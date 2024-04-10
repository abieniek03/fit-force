"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ILayout as Props } from "../_types/types";

const queryClient = new QueryClient();

export default function Providers({ children }: Readonly<Props>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
