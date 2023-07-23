import { useEffect, useState } from "react"
import { IProduct } from "../models"
import Product from "../components/products"
import { useParams } from "react-router-dom"
import { getAll, searchProductsCategory } from "../api/products"
import { ISearchProduct } from "../model/products"
import { ICategory } from "../model/category"
import { getByIdCategory } from "../api/category"
const CategoryProducts = () => {
    const { idCategory } = useParams()
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory>()
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const getName = await getByIdCategory(String(idCategory))
                setCategory(getName.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchCategory()
        const fetchProduct = async () => {
            try {
                const searchData: ISearchProduct = { category_id: String(idCategory) };
                const getProducts = await searchProductsCategory(searchData)
                setProducts(getProducts.data)
            } catch (err) {
            }
        }
        fetchProduct()
        window.scrollTo(0, 0);
    }, [])
    return <div className="">
        <div className=" mt-20 mx-[5%] text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-left">Danh Sách Sản Phẩm {category?.name} </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-0 my-10">

            {products && products.length > 0 ? products.map(product => <Product
                product={product}
                key={product._id} />) : (
                <div className="block mx-auto my-10 text-center text-[#24] font-semibold text-gray-900 sm:text-3xl ">Sản phẩm chưa đc cập nhật</div>
            )}
        </div>
    </div>
}

export default CategoryProducts