export interface IHistory {
    _id?: string
    user_id: UsersHistory,
    diaChi?: string,
    cart_id?: CartHistory,
    status?: Status,
}
export enum Status {
    "Đơn hàng chờ xác nhận" = "Đơn hàng chờ xác nhận",
    "Đang được chuẩn bị" = "Đang được chuẩn bị",
    "Đang giao" = "Đang giao",
    "Hoàn thành" = "Hoàn thành",
}
interface UsersHistory {
    _id?: string,
    name?: string,
    email?: string
}
interface CartHistory {
    _id?: string
}