import { useEffect, useState } from "react"
import { IDiscount, searchDiscount } from "../../models"
import { searchNameDiscount, getAllDiscount } from "../../api/discountCode"
import { useForm } from "react-hook-form"
const ListDiscountCode = () => {
    const [discount, setDiscount] = useState<IDiscount[]>([])
    useEffect(() => {
        const getDiscount = async () => {
            const { data } = await getAllDiscount()
            setDiscount(data.DiscountCode)
        }
        getDiscount()
    }, [])
    const { register, handleSubmit } = useForm<searchDiscount>({
    })
    const onChange = async (data: searchDiscount) => {
        try {
            const search = await searchNameDiscount(data)
            setDiscount(search.data.checkDiscountFind)
        } catch (errors) {
            console.log(errors)
        }

    }

    return <div>
        <form action="">
            <input type="text"{...register("name")} />
            <button type="submit" onClick={handleSubmit(onChange)}>Search</button>
        </form>
        {discount.map((discount) => (
            <tr key={discount._id}>
                <td>{discount.name}</td>
                <td>{discount.price}</td>
                <td>{discount.soLuong}</td>
            </tr>
        ))}
    </div >
}

export default ListDiscountCode