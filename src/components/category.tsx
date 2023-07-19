import { Link } from "react-router-dom"
import { ICategory } from "../model/category"
type Props = {
    data: ICategory
}

const Category = ({ data }: Props) => {
    return <Link to={`danhMuc/${data._id}`} className="sm:w-1/8 p-2">
        <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div className="mb-3">
                <img
                    className="w-auto mx-auto rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Yo0zUTJhbGZSSsP3S3-J56oTsHl4MysuUQ&usqp=CAU"
                    alt=""
                />
            </div>
            <h2 className="text-xl font-medium text-gray-700 mb-2 mt-8">{data.name}</h2>
        </div>
    </Link>

}

export default Category