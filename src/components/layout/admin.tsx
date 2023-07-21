import { Outlet, useParams } from "react-router-dom";
import { getByIdUsers } from "../../api/users";
import { useEffect, useState } from "react";
import { IProduct } from "../../models";
import { SideBarAdmin } from "./Admin/SideBarAdmin";
import { HeaderAdmin } from "./Admin/HeaderAdmin";
import FooterAdmin from "./Admin/FooterAdmin";
const AdminLayout = () => {
  return (
    <>
      <SideBarAdmin
        header={<HeaderAdmin />}
        content={<Outlet />}
        footer={<FooterAdmin />}
      />
    </>
  );
};

export default AdminLayout;
