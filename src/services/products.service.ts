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
        getProductID: builder.query<IProduct[], string>({
            query: (id) => `/products/${id}`,
            providesTags: ["products"]
        })
        ,
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
export const { useFetchProductQuery, useSearchProductsCategoryQuery, useGetProductIDQuery } = productAPI
export default productAPI