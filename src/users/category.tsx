import { useEffect, useState } from "react"
import { IProduct } from "../models"
import Product from "../components/products"
import { useParams } from "react-router-dom"
import { getAll, searchProductsCategory } from "../api/products"
import { ISearchProduct } from "../model/products"
const CategoryProducts = () => {
    const { idCategory } = useParams()
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const searchData: ISearchProduct = { category_id: String(idCategory) };
                const getProducts = await searchProductsCategory(searchData)
                setProducts(getProducts.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchProduct()
    }, [])
    return <>
        <div className="mb-4 mt-20 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center">Sản phẩm theo danh mục</div>
        <div className="grid grid-cols-5 gap-3 mt-[100px]">
            {products.map(product => <Product
                data={product}
                key={product._id} />)}
        </div></>
}

export default CategoryProducts