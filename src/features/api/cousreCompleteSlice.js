import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const completeCourseSlice = createApi({
  reducerPath: "completeCourseSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/", // Update with your API base URL
  }),
  tagTypes: ["POST"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/users", 
        method: "POST",
        body: newUser,
      }),
      onMutate: (newUser) => {
        return { newUser };
      },
      onSuccess: (newUser, variables) => {
      },
    }),
  }),
});

export const { useCreateCompleteCourseMutation } = completeCourseSlice;
