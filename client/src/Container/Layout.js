import React from "react";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
