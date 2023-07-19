import { Link } from "react-router-dom"
import { IProduct } from "../models"
type Props = {
    data: IProduct
}
const Product = ({ data }: Props) => {
    return <div className="group relative">
        <img alt="Art"
            src={data.images}
            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
        />

        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                    <a href={`detail/${data._id}`}>
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {data.name}
                    </a>
                </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">{data.price}</p>
        </div>
    </div>


}

export default Product