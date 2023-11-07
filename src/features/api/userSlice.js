import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "userSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["GET"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/posts",
      transformResponse: (response) => {
        const localStorageData = JSON.parse(localStorage.getItem("alluser"));
        if (localStorageData && response) {
          response.data = [...localStorageData];
        }
        return response.data;
      },
    }),
  }),
});

export const { useGetUserQuery } = userSlice;
