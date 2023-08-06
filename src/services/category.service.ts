import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ICategory } from "../model/category"
const CategoryAPI = createApi({
    reducerPath: "category",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088/api",
    }),
    endpoints: builder => ({
        getCategories: builder.query<ICategory[], void>({
            query: () => "/category/"
        }),
        getByIdCategory: builder.query<ICategory, string>({
            query: (id: string) => `/category/${id}`
        })
    })
})
export const { useGetCategoriesQuery, useGetByIdCategoryQuery } = CategoryAPI
export default CategoryAPI