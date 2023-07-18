
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
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img src="./banner1.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img src="./banner.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img src="./banner2.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                </div>
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className='my-[45px]'>
                Danh mục sản phẩm
            </div>
            <div className="grid grid-cols-8 gap-3">
                {category.map(category => <Category
                    data={category}
                    key={category._id} />)}
            </div>
            <div className='my-[45px]'>
                ĐIỆN THOẠI NỔI BẬT NHẤT
            </div>
            <div className="grid grid-cols-5 gap-3">
                {products.map(product => <Product
                    data={product}
                    key={product._id} />)}
            </div>
        </div>
    </>
}

export default Home