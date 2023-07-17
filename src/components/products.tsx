import { Link } from "react-router-dom"
import { IProduct } from "../models"
type Props = {
    data: IProduct
}
const Product = ({ data }: Props) => {
    return <Link to={`detail/${data._id}`} className="block w-[226px] h-[430px] mx-auto">
        <img alt="Art"
            src={data.images?.[0].base_url}
            className="w-[80%] h-[45%] mx-auto"
        />

        <h3 className="mt-4 text-lg">
            {data.name}
        </h3>
        <div className="flex ">
            <p className="text-lg text-red-500">{data.price} ₫</p>
            <p className="text-base ml-[5px] text-slate-400">{data.original_price} ₫</p>
        </div>
    </Link>

}

export default Product