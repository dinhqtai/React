import instance from ".";
import {
  IProduct,
  ISearchProduct,
  ISearchProductName,
  postProducts,
  updateForm,
} from "../models";

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
export const postId = (data: IProduct) => {
  return instance.post("/products", data);
};
export const putId = (id: any, data: IProduct) => {
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
export const searchProducts = (data: ISearchProductName) => {
  return instance.post("/searchProducts", data);
};

export const searchPriceSort = () => {
  return instance.get("/searchPriceSort");
};
