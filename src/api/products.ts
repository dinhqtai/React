import instance from ".";
import { ISearchProduct, ISearchProductName } from "../model/products";
import { IProduct, postProducts, updateForm } from "../models";

export const getAll = () => {
  const uri = "/products";
  return instance.get(uri);
};
export const getById = (id: String) => {
  const uri = "/products/" + id;
  return instance.get(uri);
};
export const deleteId = (id: String) => {
  return instance.delete("/products/" + id);
};
export const postId = (data: postProducts) => {
  return instance.post("/products", data);
};
export const putId = (id: any, data: updateForm) => {
  return instance.put("/products/" + id, data);
};
export const searchProductsCategory = (data: ISearchProduct) => {
  return instance.post("/searchProductCategory", data);
};
export const searchProductsCategoryDetail = (data: ISearchProduct) => {
  return instance.post("/searchProductCategoryDetail", data);
};
export const searchProductsName = (data: ISearchProductName) => {
  return instance.post("/searchProductsName", data);
};
export const searchProductsNameOne = (data: ISearchProductName) => {
  return instance.post("/searchProductsNameOne", data);
};
export const searchPriceSort = () => {
  return instance.get("/searchPriceSort");
};
