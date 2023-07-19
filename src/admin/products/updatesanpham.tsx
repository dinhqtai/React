import { useParams } from "react-router-dom"
import { getById, putId } from "../../api/products"
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react"
import { IProduct, updateForm, updateSchema } from "../../models"

const Updatesanpham = () => {
    const { idAdmin, id } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<updateForm>({
        resolver: yupResolver(updateSchema),
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }
    })
    const onSubmit = async (product: updateForm) => {
        console.log(product)
        try {
            if (id) {
                const response = await putId(id, product)
                navigate(`/admin/${idAdmin}`);
            }
        } catch (err) {
            console.log(err);

        }

    }

    const fetchProductById = async (id: string) => {
        const { data } = await getById(id)
        return data

    }
    return <>
        <h2 className="text-xl font-semibold px-[45px] pt-[30px]">Cập nhật Sản phẩm</h2>
        <form action="" className="flex gap-[40px]">
            <div className=" w-[300px] h-[300px] border rounded-md border-red-500 ml-[50px] mt-[15px] border-gray-400">
                <div className="btn_img h-[220px] relative">
                    <div className="flex flex-col">
                        <img className="w-[50px] mx-auto mt-[80px]" src="/icon.png" alt="" />
                        <p className="text-center text-xl text-sky-500">Thêm ảnh</p>
                    </div>
                    <div className="image w-[50px] mx-auto mt-[80px] "></div>
                    <input className="img_hidden absolute w-[98%] h-[220px] top-[0px] left-[3px] opacity-0" type="file" />
                </div>
            </div>
            <div className="w-full mx-[40px]">
                <div className="text-lg border-b-2">Thông tin sản phẩm</div>
                <div className="ml-[10px]">
                    <div className="my-[5px]">
                        <div>Tên sản phẩm</div>
                        <input className="w-[790px] h-[35px] mt-[5px] pl-[10px] outline-none border rounded" type="text"  {...register("name")} />
                    </div>
                    <p className='text-red-600 text-[10px]'>
                        {errors.name && errors.name.message}
                    </p>
                    <div className="flex gap-[20px] ">
                        <div>
                            <div>Giá gốc</div>
                            <input className="w-[385px] h-[35px] mt-[5px] pl-[10px] outline-none border rounded" type="text"  {...register("price")} />
                            <p className='text-red-600 text-[10px]'>
                                {errors.price && errors.price.message}
                            </p>
                        </div>
                        <div>
                            <div>Giá khuyến mãi</div>
                            <input className="w-[385px] h-[35px] my-[5px] pl-[10px] outline-none border rounded" type="text"  {...register("original_price")} />
                            <p className='text-red-600 text-[10px]'>
                                {errors.original_price && errors.original_price.message}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>Danh mục</div>
                        <select className="w-[385px] h-[40px] my-[10px] outline-none border-2 pl-[15px] rounded" aria-label="Default select example">
                            <option selected>Laptop</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <div>Mô tả dài</div>
                        <textarea id="" className="w-[790px] h-[140px] my-[10px] outline-none border rounded"  {...register("description")}  ></textarea>
                    </div>
                    <p className='text-red-600 text-[10px]'>
                        {errors.description && errors.description.message}
                    </p>
                    <button type="submit" onClick={handleSubmit(onSubmit)} className="w-[100px] h-[40px] bg-sky-500 border rounded">Thêm mới</button>
                </div>
            </div>
        </form >
    </>
}

export default Updatesanpham