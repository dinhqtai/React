import React, { useEffect, useState } from "react";
import { IProduct } from "../models";
import { useParams } from "react-router-dom";
import { getById, searchProductsCategoryDetail } from "../api/products";
import { ISearchProduct } from "../model/products";

const Detail = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [productCategory, setProductCategory] = useState<IProduct[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchProductById = async () => {
      const { data } = await getById(String(id));
      setProduct(data);
    };
    fetchProductById();
    const fetchProductCategory = async () => {
      const searchData: ISearchProduct = { category_id: product.category_id };
      const { data } = await searchProductsCategoryDetail(searchData);
      setProductCategory(data);
      console.log(searchData);
    };
    fetchProductCategory();
  }, [id]);
  console.log(productCategory);

  return (
    <>
      <nav aria-label="Breadcrumb " className="bg-[#F5F5F7]">
        <ol className="flex  items-center mx-auto max-w-screen-xl px-4 py-2 gap-1 text-sm text-gray-600">
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700">
              {" "}
              iPhone{" "}
            </a>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700">
              {" "}
              iPhone 14 series{" "}
            </a>
          </li>
        </ol>
      </nav>
      <section>
        <div className=" mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1  items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2   p-6  gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src={product.images}
                className="aspect-square bg-[#F5F5F7]  p-6 w-full rounded-xl object-cover"
              />

              <div className="grid grid-cols-4 gap-4 lg:mt-4">
                <img
                  alt="Les Paul"
                  src={product.images}
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src={product.images}
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src={product.images}
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src={product.images}
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="">
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                {product.category_id}
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {product.name}
                  </h1>

                  <p className="text-[14px] text-[#007bff] ">171 đánh giá</p>

                  <div className="-ms-0.5 flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">{product.price} đ</p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none">
                  <p>{product.desc}</p>
                </div>

                <button className="mt-2 text-sm font-medium underline">
                  Read More
                </button>
              </div>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">
                    Dung lượng
                  </legend>

                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="color_tt" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        128GB
                      </span>
                    </label>

                    <label htmlFor="color_fr" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        256GB
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        512GB
                      </span>
                    </label>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Màu sắc</legend>

                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="xam" className="cursor-pointer">
                      <input
                        type="radio"
                        title="xam"
                        name="size"
                        id="xam"
                        className="peer bg-[#4C4B49] sr-only border"
                      />

                      <span className="group bg-[#4C4B49] inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:border-3 peer-checked:border-[#007bff] peer-checked:p-1  peer-checked:text-white"></span>
                    </label>

                    <label htmlFor="white" className="cursor-pointer">
                      <input
                        type="radio"
                        title="white"
                        name="size"
                        id="white"
                        className="peer bg-[#4C4B49] sr-only border"
                      />

                      <span className="group bg-[#E3E5E3] inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:border-3 peer-checked:border-[#007bff] peer-checked:p-1  peer-checked:text-white"></span>
                    </label>

                    <label htmlFor="yellow" className="cursor-pointer">
                      <input
                        type="radio"
                        title="yellow"
                        name="size"
                        id="yellow"
                        className="peer bg-[#4C4B49] sr-only border"
                      />

                      <span className="group bg-[#FCEBD3] inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:border-3 peer-checked:border-[#007bff] peer-checked:p-1  peer-checked:text-white"></span>
                    </label>

                    <label htmlFor="violet" className="cursor-pointer">
                      <input
                        type="radio"
                        title="violet"
                        name="size"
                        id="violet"
                        className="peer bg-[#4C4B49] sr-only border"
                      />

                      <span className="group bg-[#61586B] inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:border-3 peer-checked:border-[#007bff] peer-checked:p-1  peer-checked:text-white"></span>
                    </label>
                  </div>
                </fieldset>

                <div className="mt-8 flex gap-4">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>

                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value="1"
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
