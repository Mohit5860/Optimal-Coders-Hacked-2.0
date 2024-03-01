import React from "react";

const Search = () => {
  return (
    <div className=" my-3 p-5 text-center w-full">
      <h1 className="text-2xl font-semibold">Search for blood</h1>
      <div className="p-5 m-5">
        <input
          className=" w-72 h-10 border border-slate-600 "
          type="text"
          placeholder="Enter Blood Group"
        />
        <button className=" border h-10 bg-blue-200  border-slate-600 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
