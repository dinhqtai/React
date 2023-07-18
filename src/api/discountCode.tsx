import instance from ".";
import { IDiscount, searchDiscount } from "../models";
export const getAllDiscount = () => {
    const uri = "/discount"
    return instance.get(uri)
}
export const getByIdDiscount = (id: String) => {
    const uri = "/discount" + id
    return instance.get(uri)
}
export const deleteIdDiscount = (id: String) => {
    return instance.delete("/discount" + id)
}
export const postIdDiscount = (data: IDiscount) => {
    return instance.post("/discount", data)
}
export const putIdDiscount = (id: String) => {
    return instance.put("/discount" + id)
}
export const checkDiscount = (data: string) => {
    return instance.post("/checkDiscount", data)
}
export const searchNameDiscount = (data: searchDiscount) => {
    return instance.post("/searchNameDiscount", data)
}