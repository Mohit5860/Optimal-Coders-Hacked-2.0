import React from "react";

const Header = () => {
  return (
    <div className="flex shadow-lg">
      <h1 className="text-2xl m-2 p-2 font-bold">BloodUnity</h1>
      <a href="/signin" className="absolute right-2 text-2xl m-2 p-2 cursor-pointer">
        Sign In
      </a>
    </div>
  );
};

export default Header;
