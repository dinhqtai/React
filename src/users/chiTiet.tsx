import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { IProduct } from "../models"
import { useEffect, useState } from "react"
import { getById, searchProductsCategoryDetail } from "../api/products"
import { ISearchProduct } from "../model/products"
import Product from "../components/products"
const ChiTiet = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const [productCategory, setProductCategory] = useState<IProduct[]>([])
    const { id } = useParams();
    useEffect(() => {
        const fetchProductById = async () => {
            const { data } = await getById(String(id));
            setProduct(data);
        }
        fetchProductById();
        const fetchProductCategory = async () => {
            const searchData: ISearchProduct = { category_id: product.category_id };
            const { data } = await searchProductsCategoryDetail(searchData);
            setProductCategory(data);
            console.log(searchData);

        }
        fetchProductCategory();
    }, [id]);
    return <div>
        {/* detail */}
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full mb-8 md:w-1/2 md:mb-0">
                        <div className="sticky top-0 z-50 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                <img src={product.images} alt=""
                                    className="object-cover w-full lg:h-full " />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="lg:pl-20">
                            <div className="mb-8 ">
                                <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                    {product.name}</h2>
                                <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                    <span>{product.price}</span>
                                </p>
                                <p className="max-w-md text-gray-700 dark:text-gray-400">
                                    {product.desc}
                                </p>
                            </div>
                            <div className="w-32 mb-8 ">
                                <label
                                    className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">Quantity</label>
                                <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                                    <button
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="number"
                                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                        placeholder="1" />
                                    <button
                                        className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    className="w-full p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700">
                                    Buy now</button>
                                <button
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* related product */}
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                        Related product
                    </a>

                    <div className="flex items-center" id="store-nav-content">

                        <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
                            </svg>
                        </a>

                        <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
                            </svg>
                        </a>

                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {productCategory ? productCategory.map(product => <Product
                        data={product}
                        key={product._id} />) : null}
                </div>
            </nav>

        </div>
    </div>
}

export default ChiTiet