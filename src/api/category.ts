import instance from ".";
import { AddCategory } from "../model/category";
import { IProduct, SignupForm, category } from "../models";

export const getAllCategory = () => {
    const uri = "/category"
    return instance.get(uri)
}
export const getByIdcategory = (id: String) => {
    const uri = "/category/" + id
    return instance.get(uri)
}
export const deleteIdCategory = (id: String) => {
    return instance.delete("/category/" + id)
}
export const postIdcategory = (data: AddCategory) => {
    return instance.post("/category/", data)
}
export const putIdcategory = (id: String) => {
    return instance.put("/category/" + id)
}
