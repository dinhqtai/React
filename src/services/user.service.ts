import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IUser } from "../models"
const UserAPI = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088/api"
    }),
    endpoints: builder => ({
        getUsers: builder.query<IUser[], void>({
            query: () => "/user/"
        })
    })
})
export const { useGetUsersQuery } = UserAPI
export default UserAPI
