import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex mx-96 justify-between mt-2 p-5">
      <Link to="/" className="text-2xl">
        Home
      </Link>
      <Link to="/campaigns" className="text-2xl">Campaigns</Link>
    </div>
  );
};

export default Navbar;
