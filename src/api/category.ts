import instance from ".";
import { AddCategory, UpdateCategory } from "../model/category";
import { IProduct, SignupForm, category } from "../models";

export const getAllCategory = () => {
    const uri = "/category"
    return instance.get(uri)
}
export const getByIdCategory = (id: String) => {
    const uri = "/category/" + id
    return instance.get(uri)
}
export const deleteIdCategory = (id: String) => {
    return instance.delete("/category/" + id)
}
export const postIdcategory = (data: AddCategory) => {
    return instance.post("/category/", data)
}
export const putIdcategory = (id: String, data: UpdateCategory) => {
    return instance.put("/category/" + id, data)
}
