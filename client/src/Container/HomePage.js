import React from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Search from "../components/Home/Search";
import Carousel from "../components/Carousal/Carousal";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Search />
      <Carousel />
    </div>
  );
};

export default HomePage;
