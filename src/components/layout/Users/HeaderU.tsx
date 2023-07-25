import {
  Badge,
  Carousel,
  Dropdown,
  MenuProps,
  Space,
  Tabs,
  TabsProps,
} from "antd";
import React, { useEffect, useState } from "react";
import SliderImage from "./slider";
import { Link, NavLink, useNavigate } from "react-router-dom";

const HeaderU = () => {
  const [showForm, setShowForm] = useState(true);
  const [search, setSearch] = useState("");
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const hiddenForm = () => {
    if (showForm === false) {
      setShowForm(true);
    }
  };
  const onChange = (key: string) => {
    console.log(key);
  };

  const [open, setOpen] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <NavLink rel="noopener noreferrer" to="/admin">
          Admin
        </NavLink>
      ),
      key: "1",
    },
    {
      label: "Sign up",
      key: "2",
    },
  ];

  const itemsTabs: TabsProps["items"] = [
    {
      key: "1",
      label: `Iphone`,
    },
    {
      key: "2",
      label: `Ipad`,
    },
    {
      key: "3",
      label: `Mac`,
    },
    {
      key: "4",
      label: `Âm thanh`,
    },
    {
      key: "5",
      label: `Phụ kiện`,
    },
    {
      key: "6",
      label: `Dịch vụ`,
    },
    {
      key: "7",
      label: (
        <NavLink to={`/blog`}>Blog</NavLink>
      )
    },
    {
      key: "8",
      label: `Khuyến mại`,
    },
  ];
  return (
    <>
      <div
        onClick={hiddenForm}
        className={` ${showForm ? "" : "fixed inset-0 flex bg-black bg-opacity-50"
          }`}
      >
        <header
          className={`${showForm ? "bg-white" : "bg-black fixed w-full"}`}
        >
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className={`flex h-16 items-center justify-between`}>
              <div
                className={`${showForm ? "md:flex md:items-center md:gap-12" : "hidden"
                  }`}
              >
                <a className="block text-teal-600" href="/">
                  <img
                    src="https://brademar.com/wp-content/uploads/2022/10/ShopDunk-Logo-PNG-1.png"
                    className="w-[100px] "
                    alt=""
                  />
                </a>
              </div>

              <div className={`hidden md:block ${showForm ? "" : "w-full"} `}>
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <Tabs
                      className={` ${showForm ? "" : "hidden"}`}
                      defaultActiveKey="1"
                      items={itemsTabs}
                    />
                  </ul>
                  <input
                    onSubmit={toggleForm}
                    type="text"
                    onClick={(e) => e.stopPropagation()}
                    className={` ${showForm ? "hidden z-[-50]" : "w-full rounded-lg"
                      }`}
                    placeholder="Tìm kiếm"
                  />
                </nav>
              </div>

              <div
                className={`${showForm ? "flex items-center gap-4" : "hidden"}`}
              >
                <button title="search" onClick={toggleForm}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
                <a href="#" className="mt-1">
                  <Badge count={1} color="black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </Badge>
                </a>

                <Dropdown
                  className="hidden md:flex"
                  menu={{
                    items,
                    onClick: handleMenuClick,
                  }}
                  onOpenChange={handleOpenChange}
                  open={open}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-person my-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                        />
                      </svg>
                    </Space>
                  </a>
                </Dropdown>

                <div className="block md:hidden">
                  <button
                    title="..."
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HeaderU;
