"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ILayout as Props } from "../_types/types";

export default function Providers({ children }: Readonly<Props>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
