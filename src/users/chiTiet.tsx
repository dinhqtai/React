import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { IProduct } from "../models"
import { useEffect, useState } from "react"
import { getById } from "../api/products"
const ChiTiet = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const { id } = useParams();
    useEffect(() => {
        const fetchProductById = async () => {
            const { data } = await getById(String(id));
            setProduct(data);
        }
        fetchProductById();
    }, [id])
    return <div className="mx-auto">
        <div className="h-[45px] ">
            <ul className="text-slate-400 flex pl-[230px] gap-10 pt-[10px]">
                <li ><Link to="/">Trang chủ</Link></li>
                <li><Link to="">Điện thoại</Link></li>
                <li><Link to="">Samsung</Link></li>
                <li><Link to="">{product.name}</Link></li>
            </ul>
        </div>
        <div className="h-[60px] pl-[230px] pt-[8px] text-2xl border-2">
            {product.name}
        </div>
        <div className="flex pt-[60px] gap-[50px]">
            <div className=" pl-[250px]">
                <div><img className="w-[358px] h-[358px]" src={product.images?.[0].base_url} alt="" /></div>
                <div className="flex gap-[30px] mt-[50px]">
                    <div className="w-[65px] h-[65px] border rounded-lg border-red-600">
                        <img className="px-[20px] pt-[5px]" src="/saotrang.png" alt="" />
                        <p className="text-xs text-center">Tính năng nổi bật</p>
                    </div>
                    <div className="flex gap-[15px]">
                        <img className=" w-[60px] h-[60px] border border-indigo-600 rounded-lg " src={product.images?.[0].base_url} alt="" />
                        <img className=" w-[60px] h-[60px] border border-indigo-600 rounded-lg " src={product.images?.[0].base_url} alt="" />
                        <img className=" w-[60px] h-[60px] border border-indigo-600 rounded-lg " src={product.images?.[0].base_url} alt="" />
                        <img className=" w-[60px] h-[60px] border border-indigo-600 rounded-lg " src={product.images?.[0].base_url} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-[800px]">
                <div className="flex gap-4">
                    <p className="text-red-500 text-2xl">{product.price} ₫</p>
                    <p className="text-gray-400 pt-[6px]">{product.original_price} ₫</p>
                </div>
                <p className="w-[80%] pt-[20px]"> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan
                    tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone
                    với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                <div className="h-[50px] flex gap-[25px] mt-[285px]">
                    <button className="w-[250px] bg-red-500 border hover:border-4 action:border-4">Mua ngay</button>
                    <div className="w-[50px] border rounded-md border-red-600 ">
                        <a href=""> <img className="px-[12px] py-[12px]" src="/mua.png" alt="" /></a>
                    </div>
                    <a className="w-[70px] " href="">Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
        <div className="w-[1300px] mx-auto bg-slate-200 px-[20px] py-[20px] my-[50px]">
            <p className="text-center text-red-500 text-2xl">ĐẶC ĐIỂM NỔI BẬT</p>
            <p className="mt-[10px]">Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
            <p className="mt-[10px]">Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
            <p className="mt-[10px]">Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
            <p className="mt-[10px]">Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
        </div>
        <div className="w-[1300px] mx-auto my-[20px]">
            <p>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung.
                Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc
                Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên
                mua không? Tìm hiểu ngay nhé!</p>
            <p className="text-2xl mt-[30px] mb-[15px]">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</p>
            <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng
                , đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
            <p className="text-xl mt-[30px] mb-[15px]">Thiết kế sang trọng, màn hình Super AMOLED</p>
            <p>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone
                với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
            <p>Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone
                bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p>
            <p>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p>
        </div>
        <div className="w-[300px] h-[35px] text-center pY-auto my-[80px] mx-auto border border-2 rounded-lg border-black">
            <Link to="/">Xem thêm</Link>
        </div>
    </div>
}

export default ChiTiet