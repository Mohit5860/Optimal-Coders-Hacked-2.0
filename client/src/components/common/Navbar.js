import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex mx-96 justify-between mt-2 p-5 ">
      <Link to="/">Home</Link>
      <Link to="/campaigns">Campaigns</Link>
      <Link to="/requests">Requests</Link>
      <Link to="/about">About Us</Link>
    </div>
  );
};

export default Navbar;
