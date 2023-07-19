import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './users/home'
import Login from './users/login'
import UserLayout from './components/layout/user'
import AdminLayout from './components/layout/admin'
import Register from './users/register'
import ListPhone from './admin/listPhone'
import ChiTiet from './users/chiTiet'
import Cart from './users/cart'
import Addsanpham from './admin/addsanpham'
import Updatesanpham from './admin/updatesanpham'
import ListDiscountCode from './admin/discountCode/listDiscountCode'
import CategoryProducts from './users/category'
import Contact from './users/contact'
import Shop from './users/shop'
import Blog from './users/blog'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route path='/discount' element={<ListDiscountCode />}>
        </Route>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='contact' element={<Contact />} />
        <Route path='shop' element={<Shop />} />
        <Route path='blog' element={<Blog />} />
        <Route path='detail/:id' element={<ChiTiet />} />
        <Route path='danhMuc/:idCategory' element={<CategoryProducts />} />
      </Route>
    </Routes>
    <Routes>
      <Route path='/admin/:idAdmin' element={<AdminLayout />}>
        <Route index element={<ListPhone />} />
        <Route path='add' element={<Addsanpham />} />
        <Route path='update/:id' element={<Updatesanpham />} />
      </Route>
    </Routes>
    <Routes>
      <Route path='/login' element={<Login />}>
      </Route>
    </Routes>
    <Routes>
      <Route path='/register' element={<Register />}>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
