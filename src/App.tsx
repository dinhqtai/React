
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./users/home";
import Login from "./users/login";
import AdminLayout from "./components/layout/admin";
import Register from "./users/register";
import Cart from "./users/cart";
import CategoryProducts from "./users/category";
import Contact from "./users/contact";
import Shop from "./users/shop";
import Blog from "./users/blog";
import { ListPhone } from "./admin/products/listPhone";
import { Addsanpham } from "./admin/products/addsanpham";
import { AdminEditProduct } from "./admin/products/updatesanpham";
import AddCate from "./admin/categories/AddCate";
import UpdateCate from "./admin/categories/UpdateCate";
import { AdminUser } from "./admin/users/ListUser";
import Detail from "./users/chiTiet";
import MainPage from "./components/layout/Users/MainPage";
import { AdminShowCategory } from "./admin/categories/ListCate";
import History from "./users/history";
import { AdminOrder } from "./admin/Order/Order";
import { EditOrder } from "./admin/Order/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="history" element={<History />} />
          <Route path="danhMuc/:idCategory" element={<CategoryProducts />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index path="product" element={<ListPhone />} />
          <Route path="order" element={<AdminOrder />} />
          <Route path="order/edit/:id" element={<EditOrder />} />
          <Route path="product/create" element={<Addsanpham />} />
          <Route path="product/edit/:id" element={<AdminEditProduct />} />
          <Route path="category" element={<AdminShowCategory />} />
          <Route path="category/addCate" element={<AddCate />} />
          <Route path="category/edit/:id" element={<UpdateCate />} />
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
