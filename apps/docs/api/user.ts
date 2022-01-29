import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User, UserResult } from "../types/User";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001/users`,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<UserResult, void>({
      query: () => `/`,
      providesTags: ["User"],
    }),
    createUser: builder.mutation<UserResult, User>({
      query(body) {
        return {
          url: `/`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
    patchUser: builder.mutation<number, User>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation<number, number>({
      query(id) {
        return {
          url: `${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useCreateUserMutation,
  usePatchUserMutation,
  useDeleteUserMutation,
} = userApi;
