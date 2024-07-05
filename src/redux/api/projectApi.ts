import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addNewProject: build.mutation({
      query: (data) => ({
        url: "/project/add-new-project",
        method: "POST",
        body: JSON.stringify(data), // Ensure data is serialized to JSON
        headers: {
          "Content-Type": "application/json", // Ensure headers are set
        },
      }),
      invalidatesTags: ["project"],
    }),
    getAllSpecialist: build.query({
      query: () => ({
        url: "/specialities",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddNewProjectMutation, useGetAllSpecialistQuery } =
  projectApi;
