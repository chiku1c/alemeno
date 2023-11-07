import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchSlice = createApi({
  reducerPath: "searchSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mockfly.dev/mocks/ad7c7049-cc77-4de1-9fd2-b9312c9d7c8d", // Same base URL as coursSlice
  }),
  tagTypes: ["GET"],
  endpoints: (builder) => ({
    searchCourse: builder.query({
      query: (searchTerm) => `/course/search?term=${searchTerm}`, // Replace with the actual API endpoint for searching courses
    }),
  }),
});

export const { useSearchCourseQuery } = searchSlice;
