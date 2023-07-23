import { Tabs, TabsProps } from "antd";
import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <>
      {/* Header */}

      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <img
                  src="https://brademar.com/wp-content/uploads/2022/10/ShopDunk-Logo-PNG-1.png"
                  className="w-[100px]"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                  />
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Content */}
      <Outlet />
      {/* Footer */}
      <footer>
        <div className="grid grid-cols-4 mx-[60px] gap-[50px] pl-[20px] my-[80px]">
          <div className="">
            <div className="text-xl">Tìm cửa hàng</div>
            <div className="">Tìm cửa hàng gần nhất</div>
            <div className="">Mua hàng từ xa</div>
            <div className="text-red-500">
              Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
            </div>
            <div className="text-xl">Phương thức thanh toán</div>
            <div className="flex">
              <div className="mr-[20px]">
                <img src="/citi.png" alt="" />
              </div>
              <div className="mr-[20px]">
                <img src="/moca.png" alt="" />
              </div>
              <div className="mr-[20px]">
                <img src="/ke.png" alt="" />
              </div>
              <div className="mr-[20px]">
                <img src="/vnpay.png" alt="" />
              </div>
              <div className="mr-[20px]">
                <img src="/vpbank.png" alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="">Gọi mua hàng:1800.2044(8h00 - 22h00)</div>
            <div className="">Gọi khiếu nại:1800.2063(8h00 - 21h30)</div>
            <div className="">Gọi bảo hành:1800.2064(8h00 - 21h00)</div>
            <div className="text-xl">Đối tác dịch vụ bảo hành</div>
            <div className="">Điện Thoại - Máy tính</div>
            <div className="text-xl">Trung tâm bảo hành uỷ quyền Apple</div>
            <div className="">
              <img src="/footer.png" alt="" />
            </div>
          </div>
          <div className="">
            <div className="">Mua hàng và thanh toán Online</div>
            <div className="">Mua hàng trả góp Online</div>
            <div className="">Tra thông tin đơn hàng</div>
            <div className="">Tra điểm Smember</div>
            <div className="">Tra thông tin bảo hành</div>
            <div className="">Tra cứu hoá đơn VAT điện tử</div>
            <div className="">Trung tâm bảo hành chính hãng</div>
            <div className="">Quy định về việc sao lưu dữ liệu</div>
            <div className="text-red-500">Dịch vụ bảo hành điện thoại</div>
          </div>
          <div className="">
            <div className="">Quy chế hoạt động</div>
            <div className="">Chính sách Bảo hành</div>
            <div className="">Chính sách Bảo hành</div>
            <div className="">Khách hàng doanh nghiệp (B2B)</div>
            <div className="text-red-500">Ưu đãi thanh toán</div>
            <div className="">Tuyển dụng</div>
          </div>
        </div>

        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </footer>
    </>
  );
};

export default UserLayout;
