import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory } from "../model/category"
const CategoryAPI = createApi({
    reducerPath: "category",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088/api",
    }),
    tagTypes: ["category"],
    endpoints: builder => ({
        getCategories: builder.query<ICategory[], void>({
            query: () => "/category/",
            providesTags: ["category"]
        }),
        getByIdCategory: builder.query<ICategory, string>({
            query: (id: string) => `/category/${id}`,
            providesTags: ["category"]
        })
    })
})
export const { useGetCategoriesQuery, useGetByIdCategoryQuery } = CategoryAPI
export default CategoryAPI