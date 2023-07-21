import * as Yup from "yup";
export interface IProduct {
  _id: string;
  name: string;
  price: number;
  desc: string;
  images: string;
  category_id: string;
  soLuong: string;
}
export interface IDiscount {
  _id: string;
  name: string;
  price: number;
  soLuong: number;
}
export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;

  password: string;
  role: string;
}
export interface searchDiscount {
  name: string;
}
export interface ISpecification {
  name: string;
  attributes: { code: string; name: string; value: string }[];
}
export const signupSchema = Yup.object({
  name: Yup.string().max(15, "Tối đa 15 kí tự").min(5, "Tối thiểu 5 kí tự"),
  email: Yup.string()
    .email("Email sai định dạng")
    .required("Trường dữ liệu bắt buộc"),
  phone: Yup.number().required("Trường dữ liệu bắt buộc"),
  password: Yup.string()
    .min(6, "Tối thiếu 6 ký tự")
    .required("Trường dữ liệu bắt buộc"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Mật khẩu không khớp"
  ),
  // role:Yup.string(),
});

export type SignupForm = Yup.InferType<typeof signupSchema>;
export const uploadUsers = Yup.object({
  email: Yup.string()
    .email("Email sai định dạng")
    .required("Trường dữ liệu bắt buộc"),
  phone: Yup.number().required("Trường dữ liệu bắt buộc"),
  password: Yup.string()
    .min(6, "Tối thiếu 6 ký tự")
    .required("Trường dữ liệu bắt buộc"),
  // role:Yup.string(),
});
export type uploadUsers = Yup.InferType<typeof uploadUsers>;

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("Email sai định dạng")
    .required("Trường dữ liệu bắt buộc"),
  password: Yup.string()
    .min(6, "Tối thiếu 6 ký tự")
    .required("Trường dữ liệu bắt buộc"),
  // role: Yup.number()
});

export type SigninForm = Yup.InferType<typeof signinSchema>;

export const updateSchema = Yup.object({
  _id: Yup.string().required(),
  name: Yup.string().required(),
  price: Yup.number().required(),
  images: Yup.string().required(),
  desc: Yup.string().min(10, "Tối thiếu 10 ký tự").required(),
});

export type updateForm = Yup.InferType<typeof updateSchema>;

export const categorySchema = Yup.object({
  name: Yup.string().required("Trường dữ liệu bắt buộc"),
  price: Yup.number().required("Trường dữ liệu bắt buộc"),
  original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
  description: Yup.string()
    .min(10, "Tối thiếu 10 ký tự")
    .required("Trường dữ liệu bắt buộc"),
});
export type category = Yup.InferType<typeof categorySchema>;

export const postProducts = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().required(),
  images: Yup.string().required(),
  desc: Yup.string().min(10, "Tối thiếu 10 ký tự").required(),
});

export type postProducts = Yup.InferType<typeof postProducts>;
