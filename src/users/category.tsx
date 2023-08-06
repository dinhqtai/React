import { useParams } from "react-router-dom"
import { ISearchProduct } from "../model/products"
import { useSearchProductsCategoryQuery } from "../services/products.service"
import { useGetByIdCategoryQuery } from "../services/category.service"
import Product from "../components/products"
import { useEffect } from "react"
const CategoryProducts = () => {
    const { idCategory } = useParams()
    const { data } = useGetByIdCategoryQuery(String(idCategory))
    const searchData: ISearchProduct = { category_id: String(idCategory) };
    const { data: searchProductsCategory } = useSearchProductsCategoryQuery(searchData);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="">
            <div className="mt-20 mx-[5%] text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-left">
                Danh Sách Sản Phẩm {data?.name}
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-0 my-10">
                {searchProductsCategory && searchProductsCategory.length > 0 ? (
                    searchProductsCategory.map((product) => <Product product={product} key={product._id} />)
                ) : (
                    <div className="block mx-auto my-10 text-center text-[#24] font-semibold text-gray-900 sm:text-3xl">
                        Sản phẩm chưa được cập nhật
                    </div>
                )}
            </div>
        </div>
    );
}

export default CategoryProducts