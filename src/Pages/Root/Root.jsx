import React from "react";
import Navbar from "../../component/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-100">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
