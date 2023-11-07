import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseDetailsSlice = createApi({
  reducerPath: "courseDetailsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mockfly.dev/mocks/ad7c7049-cc77-4de1-9fd2-b9312c9d7c8d", // Same base URL as coursSlice
  }),
  tagTypes: ["GET"],
  endpoints: (builder) => ({
    getCourseDetails: builder.query({
      query: (courseId) => `/course/${courseId}`, // Replace with the actual API endpoint for fetching course details by ID
    }),
  }),
});

export const { useGetCourseDetailsQuery } = courseDetailsSlice;
