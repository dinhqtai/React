import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return <>
        {/* Header */}
        <header className="bg-red-500 h-[80px] flex">
            <div className="container ml-[230px] flex items-center gap-4 my-auto">
                <img className="w-[65px] h-[57px]" src="/logo.png" alt="" />
                <div className='relative '>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-[92px] ">
                        <img src="/timkiem.png" alt="" />
                    </span>
                    <input className="w-[700px] h-[35px] rounded-lg ml-[80px] bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search ..." type="text" />
                </div>
            </div>
        </header>
        {/* Content */}
        <Outlet />
        {/* Footer */}
        <footer>
            <div className='grid grid-cols-4 mx-[60px] gap-[50px] pl-[20px] my-[80px]'>
                <div className=''>
                    <div className='text-xl'>Tìm cửa hàng</div>
                    <div className=''>Tìm cửa hàng gần nhất</div>
                    <div className=''>Mua hàng từ xa</div>
                    <div className='text-red-500'>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</div>
                    <div className='text-xl'>Phương thức thanh toán</div>
                    <div className='flex' >
                        <div className='mr-[20px]'><img src="/citi.png" alt="" /></div>
                        <div className='mr-[20px]'><img src="/moca.png" alt="" /></div>
                        <div className='mr-[20px]'><img src="/ke.png" alt="" /></div>
                        <div className='mr-[20px]'><img src="/vnpay.png" alt="" /></div>
                        <div className='mr-[20px]'><img src="/vpbank.png" alt="" /></div>
                    </div>

                </div>
                <div className=''>
                    <div className=''>Gọi mua hàng:1800.2044(8h00 - 22h00)</div>
                    <div className=''>Gọi khiếu nại:1800.2063(8h00 - 21h30)</div>
                    <div className=''>Gọi bảo hành:1800.2064(8h00 - 21h00)</div>
                    <div className='text-xl'>Đối tác dịch vụ bảo hành</div>
                    <div className=''>Điện Thoại - Máy tính</div>
                    <div className='text-xl'>Trung tâm bảo hành uỷ quyền Apple</div>
                    <div className=''><img src="/footer.png" alt="" /></div>
                </div>
                <div className=''>
                    <div className=''>Mua hàng và thanh toán Online</div>
                    <div className=''>Mua hàng trả góp Online</div>
                    <div className=''>Tra thông tin đơn hàng</div>
                    <div className=''>Tra điểm Smember</div>
                    <div className=''>Tra thông tin bảo hành</div>
                    <div className=''>Tra cứu hoá đơn VAT điện tử</div>
                    <div className=''>Trung tâm bảo hành chính hãng</div>
                    <div className=''>Quy định về việc sao lưu dữ liệu</div>
                    <div className='text-red-500'>Dịch vụ bảo hành điện thoại</div>
                </div>
                <div className=''>
                    <div className=''>Quy chế hoạt động</div>
                    <div className=''>Chính sách Bảo hành</div>
                    <div className=''>Chính sách Bảo hành</div>
                    <div className=''>Khách hàng doanh nghiệp (B2B)</div>
                    <div className='text-red-500'>Ưu đãi thanh toán</div>
                    <div className=''>Tuyển dụng</div>
                </div>

            </div>
            <div className='bg-stone-200 pb-[50px]'>
                <div className='grid grid-cols-3 mx-[150px] gap-[50px] mr-[20px] pt-[20px]'>
                    <div className='text-xs'>
                        <div className='pt-2'>Điện thoại iPhone 13-Điện thoại iPhone 12-Điện thoại iPhone 11</div>
                        <div className='pt-2'>Điện thoại iPhone 13 Pro Max-Điện thoại iPhone 11 Pro Max</div>
                        <div className='pt-2'>iPhone cũ giá rẻ-iPhone 13 cũ-iPhone 12 cũ-iPhone 11 cũ</div>
                    </div>
                    <div className='text-xs'>
                        <div className='pt-2'>Điện thoại iPhone-Điện thoại Samsung-Điện thoại Samsung A</div>
                        <div className='pt-2'>Điện thoại OPPO-Điện thoại Xiaomi-Điện thoại Vivo-Điện thoại Nokia</div>
                        <div className='pt-2'>Samsung Fold 3-Samsung S22-Samsung A73-Samsung A53</div>
                    </div>
                    <div className='text-xs'>
                        <div className='pt-2'>Laptop-Laptop HP-Laptop Dell-Laptop Acer</div>
                        <div className='pt-2'>Microsoft Surface-Laptop Lenovo-Laptop Asus</div>
                        <div className='pt-2'>Máy tính để bàn-Màn hình máy tính-Camera-Camera hành trình</div>
                    </div>
                </div>
                <h4 className='text-xs text-center mt-[20px]'>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</h4>
            </div>
        </footer>
    </>
}

export default UserLayout