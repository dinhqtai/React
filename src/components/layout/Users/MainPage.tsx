import React from "react";
import HeaderU from "./HeaderU";
import { Outlet } from "react-router-dom";
import FooterU from "./FooterU";
import SliderImage from "./slider";

const MainPage = () => {
  return (
    <>
      <HeaderU />

      <Outlet />
      <FooterU></FooterU>
    </>
  );
};

export default MainPage;
