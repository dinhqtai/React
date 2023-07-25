import { AxiosError } from "axios";
import instance from ".";

import {
  AddCategory,
  ICategory,
  IProduct,
  SignupForm,
  UpdateCategory,
  category,
} from "../models";

export const getAllCategory = () => {
  const uri = "/category";
  return instance.get(uri);
};
export const getByIdCategory = (id: String) => {
  const uri = "/category/" + id;
  return instance.get(uri);
};
export const deleteIdCategory = (id: String) => {
  return instance.delete("/category/" + id);
};
export const postIdcategory = (data: AddCategory) => {
  return instance.post("/category/", data);
};
export const putIdcategory = async (data: ICategory, id: string) => {
  try {
    const response = await instance.put(`/category/${id}`, data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error: unknown) {
    if (
      error instanceof AxiosError &&
      error.response &&
      error.response.status === 400
    ) {
      throw new Error(error.response.data.message);
    } else {
      console.log(error);
      throw new Error("Đã xảy ra lỗi khi chỉnh sửa!");
    }
  }
};
