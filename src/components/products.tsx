import { Link } from "react-router-dom"
import { IProduct } from "../models"
type Props = {
    data: IProduct
}
const Product = ({ data }: Props) => {
    return <a href={`detail/${data._id}`} className="block w-[226px] h-[430px] mx-auto">
        <img alt="Art"
            src={data.images}
            className="w-[80%] h-[45%] mx-auto"
        />

        <h3 className="mt-4 text-lg">
            {data.name}
        </h3>
        <div className="flex ">
            <p className="text-lg text-red-500">{data.price} ₫</p>
        </div>
        
    </a>


}

export default Product