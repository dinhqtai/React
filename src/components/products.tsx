import { Link, NavLink } from "react-router-dom"
import { Route } from "react-router-dom"
import { IProduct } from "../models"
const formatter = (value: number) =>
    `${value} ₫`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
type Props = {
    product: IProduct
}
const Product = ({ product }: Props) => {
    return <NavLink key={product._id} to={`detail/${product._id}`}>
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
            </div>

            <div className="mt-4 text-[#f59e0b] text-[13px]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
        </div>
    </NavLink>


}

export default Product