import React from "react";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-200  ...">
      <Header />
      <Navbar />
      <div className="flex-grow">
        {" "}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
