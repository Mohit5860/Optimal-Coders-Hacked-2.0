import React from "react";

const Header = () => {
  return (
    <div className="flex mx-72 justify-between border border-b-slate-600 border-t-0 border-x-0">
      <h1 className="text-2xl m-2 p-2 font-bold">BloodUnity</h1>
      <a href="/signin" className=" text-2xl m-2 p-2 cursor-pointer">
        Sign In
      </a>
    </div>
  );
};

export default Header;
