
import { useEffect, useState } from 'react'
import Product from '../components/products'
import { IProduct } from '../models'
import { getAll } from '../api/products'
import { getAllcategory } from '../api/category'
import { ICategory } from '../model/category'
import Category from '../components/category'
const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [category, setCategory] = useState<ICategory[]>([])
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await getAll()
                setProducts(data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchProduct()
        const fetchCategory = async () => {
            try {
                const { data } = await getAllcategory()
                setCategory(data)
            } catch (err) {
                console.log(err);

            }
        }
        fetchCategory()
    }, [])
    return <>
        <div className='w-[90%] mx-auto my-[40px]'>
            <div className='my-[45px]'>
                Danh mục sản phẩm
            </div>
            <div className="grid grid-cols-8 gap-3">
                {category ? category.map(category => <Category
                    data={category}
                    key={category._id} />) : null}
            </div>
            <div className='my-[45px]'>
                ĐIỆN THOẠI NỔI BẬT NHẤT
            </div>
            <div className="grid grid-cols-5 gap-3">
                {products ? products.map(product => <Product
                    data={product}
                    key={product._id} />) : null}
            </div>
        </div>
    </>
}

export default Home