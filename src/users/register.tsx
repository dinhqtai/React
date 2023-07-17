import React from 'react'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { signupUsers } from '../api/users'
import { signinSchema, SignupForm, signupSchema, uploadUsers } from '../models'
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    })
    const navigate = useNavigate()
    const onSubmit = async (data: SignupForm) => {
        try {
            const signup = await signupUsers(data);
            navigate('/login')
        } catch (err) {
            console.log(err)
        }

    }
    return <>
        <div className='flex h-[400px] w-[700px] mx-auto mt-[150px] rounded-2xl bg-red-100'>
            <form action="" className='w-[500px]'>
                <div className='mx-[100px]'>
                    <div className='mt-[40px]'>Name</div>
                    <input {...register('name')} className='w-[300px] h-[30px] focus:outline-none focus:border-sky-500 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 border ' type="text" />
                    <div className='text-red-600  text-[10px]'>
                        {errors.name && errors.name.message}
                    </div>
                    <div className=''>Email</div>
                    <input {...register('email')} className='w-[300px] h-[30px] focus:outline-none focus:border-sky-500 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 border ' type="text" />
                    <div className='text-red-600  text-[10px]'>
                        {errors.email && errors.email.message}
                    </div>
                    <div>Số điện thoại</div>
                    <input  {...register('phone')} className='w-[300px] h-[30px] focus:outline-none focus:border-sky-500 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 border ' type="text" />
                    <div className='text-red-600  text-[10px]'>
                        {errors.phone && errors.phone.message}
                    </div>
                    <div>Mật khẩu</div>
                    <input {...register('password')} className='w-[300px] h-[30px] focus:outline-none focus:border-sky-500 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 border ' type="text" />
                    <div className='text-red-600  text-[10px]'>
                        {errors.password && errors.password.message}
                    </div>
                    <div>Nhập lại mật khẩu</div>
                    <input {...register('confirmPassword')} className='w-[300px] h-[30px] focus:outline-none focus:border-sky-500 border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 border ' type="text" />
                    <div className='text-red-600  text-[10px]'>
                        {errors.confirmPassword && errors.confirmPassword.message}
                    </div>
                    {/* <input {...register('role')} className='hidden' type="text" value={"member"} /> */}
                    <div>

                        <button type='submit' onClick={handleSubmit(onSubmit)} className='mt-[20px] w-[300px] h-[35px] bg-red-500'>Đăng nhập</button>
                    </div>
                </div>
            </form>

            <div className='bg-stone-100 w-[200px] rounded-r-2xl'>
                <img className='w-[100px] mx-auto mt-[120px]' src="./logo.png" alt="" />
            </div>
        </div>
    </>
}

export default Register