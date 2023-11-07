import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const coursSlice = createApi({
  reducerPath: "coursSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mockfly.dev/mocks/ad7c7049-cc77-4de1-9fd2-b9312c9d7c8d",
  }),
  tagTypes: ["GET"],
  endpoints: (builder) => ({
    getCourse: builder.query({
      query: () => "/course",
    }),
  }),
});
export const { useGetCourseQuery } = coursSlice;
