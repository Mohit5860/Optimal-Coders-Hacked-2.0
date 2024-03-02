import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BloodGroupDropdown = ({ onChange }) => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <select
      onChange={onChange}
      className="block appearance-none mx-5 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="">Select Blood Group</option>
      {bloodGroups.map((group, index) => (
        <option key={index} value={group}>
          {group}
        </option>
      ))}
    </select>
  );
};

const Search = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleChange = (e) => {
    setBloodGroup(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/hospital/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city, bloodGroup }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch hospitals");
      }

      const data = await response.json();
      navigate("/hospitals", {
        state: { formData: { city, bloodGroup }, fetchedData: data },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className=" my-3 p-5 text-center">
      <h1 className="text-2xl font-semibold">Search for blood</h1>
      <form onSubmit={handleSubmit} className="p-5 m-5 flex  justify-center">
        <input
          className=" p-2 border border-slate-600 "
          type="text"
          placeholder="City"
          value={city}
          onChange={handleCity}
        />
        <BloodGroupDropdown onChange={handleChange} />
        <button className=" border h-10 bg-blue-200  border-slate-600 p-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
