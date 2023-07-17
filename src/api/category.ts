import instance from ".";
import { IProduct, SignupForm,category } from "../models";

export const getAllcategory = () => {
    const uri = "/category/"
    return instance.get(uri)
}
export const getByIdcategory = (id: String) => {
    const uri = "/category/" + id
    return instance.get(uri)
}
export const deleteIdcategory = (id:String) =>{
    return instance.delete("/category/" + id)
}
export const postIdcategory = (data:category) =>{
    return instance.post("/category/",data)
}
export const putIdcategory = (id:String) =>{
    return instance.put("/category/" + id)
}