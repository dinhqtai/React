import React from 'react'
import * as Yup from "yup"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { signinUsers } from '../api/users'
import { SigninForm, signinSchema, SignupForm, signupSchema, uploadUsers } from '../models'
import { useLocalStorage } from '../hooks';
import { useSignInMutation } from '../services/user.service'
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: yupResolver(signinSchema)
    })
    const navigate = useNavigate()
    const [signIn] = useSignInMutation()
    const onSubmit = async (data: SigninForm) => {
        try {
            const result = await signIn(data);
            localStorage.setItem("user", JSON.stringify(result.data.users))
            console.log(result);
            if (result.data.users.role === "member") {
                navigate(`/`);
            } else if (result.data.users.role === "admin") {
                navigate(`/admin`);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return <div className="flex justify-center pt-[150px]">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input {...register("email")} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    <div className='text-red-600  text-[10px]'>
                        {errors.email && errors.email.message}
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input {...register("password")} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    <div className='text-red-600  text-[10px]'>
                        {errors.password && errors.password.message}
                    </div>
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