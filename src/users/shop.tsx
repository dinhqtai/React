import { useEffect, useState } from "react"
import { IProduct } from "../models"
import { getAll, searchPriceSort, } from "../api/products"
import Product from "../components/products"
const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [mess, setMess] = useState("")
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
  }, [])
  const sortPrice = async () => {
    try {
      const { data } = await searchPriceSort()
      setProducts(data)
    } catch (err) {
      console.log(err);
    }
  }
  return <>
    <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full mt-10 ">
      <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2 ">
            <form className="flex items-center">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <form action="">
                  <input type="text" id="simple-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tìm kiếm sản phẩm" ></input>
                </form>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
            <button type="button" onClick={sortPrice} className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Sắp xếp theo giá từ lớn đến nhỏ</button>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z" />
            </svg>
          </div>

        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products ? products.map(product => <Product
          data={product}
          key={product._id} />) : null}
        {mess}
      </div>
    </div>
  </>
}
export default Shop