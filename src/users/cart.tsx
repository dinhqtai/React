
const Cart = () => {
    return <>
        <div className="w-[45%] mx-auto my-[40px]">
            <div className="flex gap-[222px] text-red-700 text-lg ">
                <a className="flex gap-[10px]" href=""><img className="w-[12px] h-[14px] mt-[7px]" src="./cart.png" alt="" />Trở về</a>
                <p className="">Giỏ hàng</p>
            </div>
            <div className="w-[75%]  flex mx-[80px] my-[40px] pt-[20px] border border-red-500 rounded-lg">
                <div><img className="w-[180px] h-[180px]" src="./phone.png" alt="" /></div>
                <div className="block">
                    <div>Samsung Galaxy S22-Đen</div>
                    <div className="flex gap-[10px]">
                        <p className="text-red-500">16.090.000 ₫</p>
                        <p className="text-xs pt-[5px] text-slate-400">21.990.000 ₫</p>
                        <p className="h-[22px] border bg-red-700 text-white text-xs rounded-lg my-auto">Giảm 27%</p>
                    </div>
                    <div className="flex gap-[20px] my-[15px]">
                        <p>Chọn số lượng:</p>
                        <div className="border-2 border-stone-400 rounded">
                            <button className="w-[25.6px]">-</button>
                            <input className="w-[30px]" type="text" />
                            <button className="w-[25.6px]">+</button>
                        </div>
                    </div>
                    <div className="w-[300px] border rounded-lg bg-slate-300 text-sm mb-[30px] ">
                        <p className="mb-[5px]">Chương trình khuyến mại:</p>
                        <p className="my-[4px]">Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
                        <p>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</p>
                    </div>

                </div>
                <div className="">
                    <a className="" href=""><img src="./delete.png" alt="" /></a>
                </div>
            </div>

            <div className="flex justify-between my-[20px]">
                <p>Tổng tiền tạm tính:</p>
                <p className="text-red-500 text-lg">17.820.000 ₫</p>
            </div>
            <div>
                <button className="w-[90%] h-[65px] mx-[34px] my-[20px] text-white bg-red-700 text-xl">Tiến hành đặt hàng</button>
                <button className="w-[90%] h-[65px] mx-[34px] mb-[80px] text-red-500 text-xl border border-red-700">Chọn thêm sản phẩm khác</button>
            </div>
        </div>
    </>
}

export default Cart