import instance from ".";
import { IProduct, postProducts, updateForm } from "../models";

export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}
export const getById = (id: String) => {
    const uri = "/products/" + id
    return instance.get(uri)
}
export const deleteId = (id:String) =>{
    return instance.delete("/products/" + id)
}
export const postId = (data:postProducts) =>{
    return instance.post("/products",data)
}
export const putId = (id:String,data:updateForm) =>{
    return instance.put("/products/" + id,data)
}