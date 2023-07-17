import instance from ".";
import { IProduct, SigninForm, SignupForm,signinSchema, updateForm, uploadUsers } from "../models";

export const getAllUsers = () => {
    const uri = "/users"
    return instance.get(uri)
}
export const getByIdUsers = (id: String) => {
    const uri = "/users/" + id
    return instance.get(uri)
}
export const deleteIdUsers = (id:String) =>{
    return instance.delete("/users" + id)
}
export const signupUsers = (data:uploadUsers) =>{
    return instance.post("/signup",data)
}
export const signinUsers = (data:SigninForm) =>{
    return instance.post("/signin",data)
}
// export const putIdUsers = (id:String,body:updateForm) =>{
//     return instance.put("/users" + id,body)
// }