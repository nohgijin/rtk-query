import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { VersionResult } from "../types/Version";

export const versionApi = createApi({
  reducerPath: "versionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:1337/api/versions`,
  }),
  endpoints: (builder) => ({
    getVersion: builder.query<VersionResult, void>({
      query: () => `/`,
    }),
  }),
});

export const { useGetVersionQuery, useLazyGetVersionQuery } = versionApi;
