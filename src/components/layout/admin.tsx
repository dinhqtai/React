import { Outlet, useParams } from 'react-router-dom'
import { getByIdUsers } from '../../api/users';
import { useEffect, useState } from 'react';
import { IProduct } from '../../models';
const AdminLayout = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const { idAdmin } = useParams();
    useEffect(() => {
        const getAdmin = async () => {
            const { data } = await getByIdUsers(String(idAdmin));
            setProduct(data);
        }
        getAdmin()
    }, [idAdmin])
    return <>
        {/* Header */}
        <header className="bg-blue-500 h-[80px] flex">
            <div className="container ml-[50px] flex items-center gap-4 my-auto">
                <img className="w-[65px] h-[57px]" src="/logo.png" alt="" />
                <div className='text-slate-50'>
                    Dashboard
                </div>
                <div className='relative '>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-[92px] ">
                        <img src="/timkiem.png" alt="" />
                    </span>
                    <input className="w-[600px] h-[35px] rounded-lg ml-[80px] bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search ..." type="text" />
                </div>
            </div>
            <div className="w-[200px] my-auto text-slate-50 text-xl mr-[150px]">
                <a href="">Xin chào {product.name}</a>
            </div>
        </header>
        <div className='flex'>
            <div className='w-[350px] pl-[50px] pt-[30px] '>
                <div className='h-[40px] w-[200px] bg-white hover:bg-blue-500 active:bg-blue-500 focus:outline-none focus:ring focus:ring-violet-300  rounded-lg hover:text-white pl-[40px] py-[6px] my-[10px]'>Sản phẩm chung</div>
                <div className='h-[40px] w-[200px] bg-white hover:bg-blue-500 active:bg-blue-500 focus:outline-none focus:ring focus:ring-violet-300  rounded-lg hover:text-white pl-[40px] py-[6px] my-[10px]'>Laptop</div>
                <div className='h-[40px] w-[200px] bg-white hover:bg-blue-500 active:bg-blue-500 focus:outline-none focus:ring focus:ring-violet-300  rounded-lg hover:text-white pl-[40px] py-[6px] my-[10px]'>Máy tính bảng</div>
                <div className='h-[40px] w-[200px] bg-white hover:bg-blue-500 active:bg-blue-500 focus:outline-none focus:ring focus:ring-violet-300  rounded-lg hover:text-white pl-[40px] py-[6px] my-[10px]'>Âm thanh</div>
            </div>
            <div className='w-full border-l-2'>
                <Outlet />
            </div>
        </div>
    </>
}

export default AdminLayout