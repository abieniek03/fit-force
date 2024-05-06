import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient("https://graphql.datocms.com/");

gqlClient.setHeader(
  "Authorization",
  `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN as string}`,
);
