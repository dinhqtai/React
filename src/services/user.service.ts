import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IUser, SigninForm, SignupForm } from "../models"
const UserAPI = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8088/api"
    }),
    tagTypes: ["user"],
    endpoints: builder => ({
        getUsers: builder.query<IUser[], void>({
            query: () => "/user/",
            providesTags: ["user"]
        }),
        SignUp: builder.mutation<void, SignupForm>({
            query: (body) => ({
                url: "/signup",
                method: "POST",
                body
            }),
            invalidatesTags: ["user"]
        }),
        SignIn: builder.mutation<void, SigninForm>({
            query: (body) => ({
                url: "/signin",
                method: "POST",
                body
            }),
            invalidatesTags: ["user"]
        })
    })
})
export const { useGetUsersQuery, useSignUpMutation, useSignInMutation } = UserAPI
export default UserAPI
