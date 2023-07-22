import { useEffect, useState } from "react";
import Product from "../components/products";
import { IProduct } from "../models";
import { getAll, searchProductsName } from "../api/products";
import { getAllcategory } from "../api/category";
import { ICategory } from "../model/category";
import Category from "../components/category";
import { useForm } from "react-hook-form";
import { ISearchProductName } from "../model/products";
import { NavLink } from "react-router-dom";
import SliderImage from "../components/layout/Users/slider";
const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [mess, setMess] = useState("");
  const { register, handleSubmit } = useForm<ISearchProductName>({});
  const formatter = (value: number) =>
    `${value} ₫`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
    const fetchCategory = async () => {
      try {
        const { data } = await getAllcategory();
        setCategory(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, []);
  const onSubmit = async (data: ISearchProductName) => {
    try {
      const search = await searchProductsName(data);
      if (search.data.checkSearchName.length === 0) {
        setMess("Sản phẩm không tồn tại");
        setProducts([]);
      } else {
        setProducts(search.data.checkSearchName);
      }
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <>
      <SliderImage />
      <div className="grid  mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-0 my-10 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-100">
          <img
            src="https://shopdunk.com/images/uploaded/BONUSt7.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="h-32 rounded-lg bg-gray-100">
          <img
            src="https://shopdunk.com/images/uploaded/Bonus%20banner-26.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="h-32 rounded-lg bg-gray-100">
          <img
            src="https://shopdunk.com/images/uploaded/Bonus%20banner-16.png"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div className="py-10 z-[-99]">
        <h2 className="text-center font-bold text-[30px]">iPhone</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-0 my-10">
          {products && products.length > 0 ? (
            products.map((product: IProduct) => (
              <NavLink key={product._id} to={`detail/${product._id}`}>
                <div
                  key={product._id}
                  className="group z-[-99] relative border shadow rounded-[10px] p-4 w-[250px]"
                >
                  <div className="flex justify-center items-center min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-50">
                    <img
                      title="image"
                      src={product.images}
                      className="h-full w-full m-4 object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[#1D1D1F] font-bold text-[18px]">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-[#0066CC] font-bold text-[16px]">
                      {formatter(product.price)}
                    </span>
                    <del className="ml-3 text-[14px] font-semibold text-[#707070]">
                      {formatter(product.price)}
                    </del>
                  </div>

                  <div className="mt-4 text-[#f59e0b] text-[13px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>

                  <div className="flex justify-end items-center">
                    <span className="text-[#777] text-[12px]">Yêu thích</span>
                    <i className="fa-regular fa-heart text-red-400 ml-1 mt-1"></i>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <div>Không có dữ liệu</div>
          )}
        </div>
        <button className="border-[#0066CC]-50 border-2 border-[#0066CC] hover:bg-[#0066CC] rounded-lg py-2 px-10 mx-auto hover:text-white text-[#0066CC] text-[14px] flex items-center">
          Xem tất cả iPhone
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="py-10 z-[-99]">
        <h2 className="text-center font-bold text-[30px]">iPhone</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-0 my-10">
          {products && products.length > 0 ? (
            products.map((product: IProduct) => (
              <NavLink key={product._id} to={`detail/${product._id}`}>
                <div
                  key={product._id}
                  className="group z-[-99] relative border shadow rounded-[10px] p-4 w-[250px]"
                >
                  <div className="flex justify-center items-center min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-50">
                    <img
                      title="image"
                      src={product.images}
                      className="h-full w-full m-4 object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[#1D1D1F] font-bold text-[18px]">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-[#0066CC] font-bold text-[16px]">
                      {formatter(product.price)}
                    </span>
                    <del className="ml-3 text-[14px] font-semibold text-[#707070]">
                      {formatter(product.price)}
                    </del>
                  </div>

                  <div className="mt-4 text-[#f59e0b] text-[13px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>

                  <div className="flex justify-end items-center">
                    <span className="text-[#777] text-[12px]">Yêu thích</span>
                    <i className="fa-regular fa-heart text-red-400 ml-1 mt-1"></i>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <div>Không có dữ liệu</div>
          )}
        </div>
        <button className="border-[#0066CC]-50 border-2 border-[#0066CC] hover:bg-[#0066CC] rounded-lg py-2 px-10 mx-auto hover:text-white text-[#0066CC] text-[14px] flex items-center">
          Xem tất cả iPhone
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="py-10 z-[-99]">
        <h2 className="text-center font-bold text-[30px]">iPhone</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-0 my-10">
          {products && products.length > 0 ? (
            products.map((product: IProduct) => (
              <NavLink key={product._id} to={`detail/${product._id}`}>
                <div
                  key={product._id}
                  className="group z-[-99] relative border shadow rounded-[10px] p-4 w-[250px]"
                >
                  <div className="flex justify-center items-center min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-50">
                    <img
                      title="image"
                      src={product.images}
                      className="h-full w-full m-4 object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[#1D1D1F] font-bold text-[18px]">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-[#0066CC] font-bold text-[16px]">
                      {formatter(product.price)}
                    </span>
                    <del className="ml-3 text-[14px] font-semibold text-[#707070]">
                      {formatter(product.price)}
                    </del>
                  </div>

                  <div className="mt-4 text-[#f59e0b] text-[13px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>

                  <div className="flex justify-end items-center">
                    <span className="text-[#777] text-[12px]">Yêu thích</span>
                    <i className="fa-regular fa-heart text-red-400 ml-1 mt-1"></i>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <div>Không có dữ liệu</div>
          )}
        </div>
        <button className="border-[#0066CC]-50 border-2 border-[#0066CC] hover:bg-[#0066CC] rounded-lg py-2 px-10 mx-auto hover:text-white text-[#0066CC] text-[14px] flex items-center">
          Xem tất cả iPhone
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <img
        src="https://shopdunk.com/images/uploaded/Trang%20ch%E1%BB%A7/2.jpeg"
        className="w-full max-w-screen-xl px-4 sm:px-6 mx-auto"
        alt=""
      />
      <div className="py-10 z-[-99]">
        <h2 className="text-center font-bold text-[30px]">iPhone</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-0 my-10">
          {products && products.length > 0 ? (
            products.map((product: IProduct) => (
              <NavLink key={product._id} to={`detail/${product._id}`}>
                <div
                  key={product._id}
                  className="group z-[-99] relative border shadow rounded-[10px] p-4 w-[250px]"
                >
                  <div className="flex justify-center items-center min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-75 lg:h-50">
                    <img
                      title="image"
                      src={product.images}
                      className="h-full w-full m-4 object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[#1D1D1F] font-bold text-[18px]">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-[#0066CC] font-bold text-[16px]">
                      {formatter(product.price)}
                    </span>
                    <del className="ml-3 text-[14px] font-semibold text-[#707070]">
                      {formatter(product.price)}
                    </del>
                  </div>

                  <div className="mt-4 text-[#f59e0b] text-[13px]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>

                  <div className="flex justify-end items-center">
                    <span className="text-[#777] text-[12px]">Yêu thích</span>
                    <i className="fa-regular fa-heart text-red-400 ml-1 mt-1"></i>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <div>Không có dữ liệu</div>
          )}
        </div>
        <button className="border-[#0066CC]-50 border-2 border-[#0066CC] hover:bg-[#0066CC] rounded-lg py-2 px-10 mx-auto hover:text-white text-[#0066CC] text-[14px] flex items-center">
          Xem tất cả iPhone
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Home;
