import React from 'react'
import * as Yup from "yup"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { signinUsers, signupUsers } from '../api/users'
import { SigninForm, signinSchema, SignupForm, signupSchema, uploadUsers } from '../models'
import { useLocalStorage } from '../hooks';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: yupResolver(signinSchema)
    })
    const navigate = useNavigate()

    const [user, setUser] = useLocalStorage("user", null)

    const onSubmit = async (data: SigninForm) => {
        try {
            const { data: { accessToken, user } } = await signinUsers(data)

            setUser({
                accessToken,
                ...user
            })
            if (user.role === "admin") {
                navigate(`/admin/${user._id}`);
            } else {
                navigate(`/`)
            }

        } catch (err) {
            console.log(err);

        }
    }
    return <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input {...register("email")} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input {...register("password")} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button onClick={handleSubmit(onSubmit)} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <Link to="/register"><a href="" className="text-blue-700 hover:underline dark:text-blue-500" >Create account</a></Link>
                </div>
            </form>
        </div>
    </div>
}

export default Login