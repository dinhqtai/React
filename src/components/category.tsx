import { Link } from "react-router-dom"
import { ICategory } from "../model/category"
type Props = {
    data: ICategory
}

const Category = ({ data }: Props) => {
    return <Link to={`danhMuc/${data._id}`} className="block w-[100px] h-[150px] mx-auto">
        <img
            alt="Art"
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="py-auto"
        />
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {data.name}
        </h3>
    </Link>

}

export default Category