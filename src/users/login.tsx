import React from 'react'
import * as Yup from "yup"
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
    return <>
        <div className='flex h-[350px] w-[700px] mx-auto mt-[150px] rounded-2xl bg-red-500'>
            <form action="" className='w-[500px]'>
                <div className='mx-[100px]'>
                    <div className='mt-[60px]'>Email</div>
                    <input {...register("email")} className='w-[300px] h-[30px] focus:outline-none focus:border-sky-500 focus:ring-1  focus:ring-sky-500 border border-slate-300 rounded-md' type="text" />
                    <div>Mật khẩu</div>
                    <input {...register("password")} className='w-[300px] h-[30px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border border-slate-300 rounded-md' type="text" />
                    <div>
                        <button onClick={handleSubmit(onSubmit)} className='mt-[10px] w-[300px] h-[35px] bg-red-500'>Đăng nhập</button>
                    </div>
                </div>
            </form>

            <div className='bg-stone-100 w-[200px] rounded-r-2xl'>
                <img className='w-[100px] mx-auto mt-[120px]' src="./logo.png" alt="" />
            </div>
        </div>
    </>
}

export default Login