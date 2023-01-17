import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../pages/home/Footer";
import Navbar from "./Navbar";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar />
      <div
        className={` ${
          pathname === "/" ? "max-w-[1600px] px-5" : "max-w-7xl"
        } max-w-[1600px] mx-auto`}
      >
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Main;
