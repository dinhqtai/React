import { Link, Outlet } from 'react-router-dom'

const UserLayout = () => {
  return <>
    {/* Header */}


    <header className="bg-white shadow-lg h-24 hidden md:flex">
      <a href="" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
        <img className="" src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png" alt="" />
      </a>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6">
            <a href="/">
              <span>Home</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="/shop">
              <span>Shop</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>About</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a >
              <span>Contact</span>
            </a>

          </li>
          <li className="p-3 xl:p-6">
            <a href="/blog">
              <span>Blog</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Contacts</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="" className="flex items-center">
              <span>Pages</span>
              <svg className="h-3 opacity-30 ml-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="hidden xl:contents">
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">


        </ul>
      </nav>
      <div className="border flex items-center px-4 lg:px-6 xl:px-8">
        <svg className="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m17.855 11.273 2.105-7a.952.952 0 0 0-.173-.876 1.042 1.042 0 0 0-.37-.293 1.098 1.098 0 0 0-.47-.104H5.021L4.395.745a.998.998 0 0 0-.376-.537A1.089 1.089 0 0 0 3.377 0H1.053C.773 0 .506.105.308.293A.975.975 0 0 0 0 1c0 .265.11.52.308.707.198.187.465.293.745.293h1.513l.632 2.254v.02l2.105 6.999.785 2.985a3.13 3.13 0 0 0-1.296 1.008 2.87 2.87 0 0 0-.257 3.06c.251.484.636.895 1.112 1.19a3.295 3.295 0 0 0 3.228.12c.5-.258.918-.639 1.208-1.103.29-.465.444-.995.443-1.535a2.834 2.834 0 0 0-.194-1h2.493a2.84 2.84 0 0 0-.194 1c0 .593.186 1.173.533 1.666.347.494.84.878 1.417 1.105a3.314 3.314 0 0 0 1.824.17 3.213 3.213 0 0 0 1.617-.82 2.95 2.95 0 0 0 .864-1.536 2.86 2.86 0 0 0-.18-1.733 3.038 3.038 0 0 0-1.162-1.346 3.278 3.278 0 0 0-1.755-.506h-7.6l-.526-2h9.179c.229 0 .452-.07.634-.201a1 1 0 0 0 .379-.524Zm-2.066 4.725a1.1 1.1 0 0 1 .585.168c.173.11.308.267.388.45.08.182.1.383.06.577a.985.985 0 0 1-.288.512 1.07 1.07 0 0 1-.54.274 1.104 1.104 0 0 1-.608-.057 1.043 1.043 0 0 1-.472-.369.965.965 0 0 1-.177-.555c0-.265.11-.52.308-.707.197-.188.465-.293.744-.293Zm-7.368 1a.965.965 0 0 1-.177.555c-.116.165-.28.293-.473.369a1.104 1.104 0 0 1-.608.056 1.07 1.07 0 0 1-.539-.273.985.985 0 0 1-.288-.512.953.953 0 0 1 .06-.578c.08-.182.214-.339.388-.448a1.092 1.092 0 0 1 1.329.124.975.975 0 0 1 .308.707Zm5.263-8.999h-1.053v1c0 .265-.11.52-.308.707a1.081 1.081 0 0 1-.744.293c-.28 0-.547-.106-.745-.293a.975.975 0 0 1-.308-.707v-1H9.474a1.08 1.08 0 0 1-.745-.293A.975.975 0 0 1 8.421 7c0-.265.11-.52.308-.707.198-.187.465-.293.745-.293h1.052V5c0-.265.111-.52.309-.707.197-.187.465-.292.744-.292.279 0 .547.105.744.292a.975.975 0 0 1 .308.707v1h1.053c.28 0 .547.106.744.293a.975.975 0 0 1 .309.707c0 .265-.111.52-.309.707a1.081 1.081 0 0 1-.744.293Z" />
        </svg>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
          <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
        </svg>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3" />
        </svg>

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

      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>

    </footer>
  </>
}

export default UserLayout