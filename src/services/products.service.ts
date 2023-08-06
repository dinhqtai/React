import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import instance from "../api"
import { IProduct } from "../models"
import { ISearchProduct } from "../model/products"
const productAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088/api"
    }),
    tagTypes: ["products"],
    endpoints: builder => ({
        fetchProduct: builder.query<IProduct[], void>({
            query: () => "/products/",
            providesTags: ["products"]
        }),
        searchProductsCategory: builder.query<IProduct[], ISearchProduct>({
            query: (body) => ({
                url: "/searchProductCategory/",
                method: "POST",
                body
            }),
            providesTags: ["products"]
        })
    })

})
export const { useFetchProductQuery, useSearchProductsCategoryQuery } = productAPI
export default productAPI