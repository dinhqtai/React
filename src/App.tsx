import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./users/home";
import Login from "./users/login";
import UserLayout from "./components/layout/user";
import AdminLayout from "./components/layout/admin";
import Register from "./users/register";

import ChiTiet from "./users/chiTiet";
import Cart from "./users/cart";

import ListDiscountCode from "./admin/discountCode/listDiscountCode";
import CategoryProducts from "./users/category";
import Contact from "./users/contact";
import Shop from "./users/shop";
import Blog from "./users/blog";

import { ListPhone } from "./admin/products/listPhone";
import { Addsanpham } from "./admin/products/addsanpham";
import { AdminEditProduct } from "./admin/products/updatesanpham";
import { AdminShowCategory } from "./admin/categories/ListCate";
import { AdminUser } from "./admin/users/ListUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/discount" element={<ListDiscountCode />}></Route>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="detail/:id" element={<ChiTiet />} />
          <Route path="danhMuc/:idCategory" element={<CategoryProducts />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index path="product" element={<ListPhone />} />
          <Route path="product/create" element={<Addsanpham />} />
          <Route path="product/edit/:id" element={<AdminEditProduct />} />
          <Route path="category" element={<AdminShowCategory />} />
          <Route path="user" element={<AdminUser />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
