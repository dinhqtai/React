import { IHistory } from "../model/history";
import { useDeleteHistoryMutation, useGetHistoryQuery } from "../services/history.service"
const HistoryPage = () => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString as any);
    const searchData: IHistory = { user_id: user._id };
    const { data } = useGetHistoryQuery(searchData as any)
    const [deleteHistory] = useDeleteHistoryMutation()
    const handlerDelete = (id: string) => {
        deleteHistory(id).unwrap().then(() => { alert('Đã xóa thành công:'); })
    }
    return <>
        <h1 className="text-xl text-gray-900 text-center">Lịch sử đơn hàng</h1>
        <div
            className="relative w-screen max-w-sm  bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 mx-auto"
            aria-modal="true"
            role="dialog"
        >
            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {data?.map((data) =>
                        <li key={data._id} className="flex items-center gap-4">
                            <div>
                                <h3 className="text-sm text-gray-900">Đơn hàng của bạn</h3>
                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">Địa chỉ: </dt>
                                        <dd className="inline">{data.diaChi}</dd>
                                    </div>

                                    <div>
                                        <dt className="inline">Mã đơn hàng: </dt>
                                        <dd className="inline">{data.cart_id?._id}</dd>
                                    </div>

                                    <div>
                                        <dt className="inline">Trạng thái đơn hàng: </dt>
                                        <dd className="inline">{data.status}</dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="flex flex-1 items-center justify-end gap-2">
                                <button onClick={() => handlerDelete(data?._id)} className="text-gray-600 transition hover:text-red-600">
                                    <span className="sr-only">Remove item</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </>
}

export default HistoryPage