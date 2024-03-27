import { type ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface IServerComponentProps {
  params: {
    id: string;
  };
  searchParams: {};
}
