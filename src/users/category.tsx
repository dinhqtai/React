import { useEffect, useState } from "react"
import { IProduct } from "../models"
import Product from "../components/products"
import { useParams } from "react-router-dom"
import { getAll, searchProductsCategory } from "../api/products"
import { ISearchProduct } from "../model/products"
import { ICategory } from "../model/category"
import { getByIdcategory } from "../api/category"
const CategoryProducts = () => {
    const { idCategory } = useParams()
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory>()
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const getName = await getByIdcategory(String(idCategory))
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
    }, [])
    return <>
        <div className="mb-4 mt-20 mx-[5%] text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-left">Danh Sách Sản Phẩm {category?.name} </div>
        <div className="grid grid-cols-5 gap-3 mt-[100px]">
            {products.map(product => <Product
                data={product}
                key={product._id} />)}
        </div></>
}

export default CategoryProducts