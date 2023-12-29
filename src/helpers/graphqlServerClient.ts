import { GraphQLClient } from "graphql-request";
import fetch from "cross-fetch";

const hasuraEndPoint = process.env.NEXT_PUBLIC_HASURA_ENDPOINT_URL || "";

const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || "";

export const gqlServerClient = new GraphQLClient(hasuraEndPoint, {
  headers: {
    "x-hasura-admin-secret": hasuraAdminSecret,
    "content-type": "application/json",
  },
  fetch: fetch,
});
