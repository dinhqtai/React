import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHistory } from "../model/history";
const HistoryAPI = createApi({
    reducerPath: "history",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088/api/"
    }),
    tagTypes: ["history"],
    endpoints: builder => ({
        getHistory: builder.query<IHistory[], void>({
            query: () => "history",
            providesTags: ["history"]
        }),
        getHistoryByUser: builder.query<IHistory[], any>({
            query: (body) => ({
                url: "getHistoryByUser",
                method: "POST",
                body
            }),
            providesTags: ["history"]
        }),
        deleteHistory: builder.mutation({
            query: (id: string) => ({
                url: "history/" + id,
                method: "DELETE",
            }),
            invalidatesTags: ["history"]
        })
    })

})
export const { useGetHistoryQuery, useGetHistoryByUserQuery, useDeleteHistoryMutation } = HistoryAPI
export default HistoryAPI