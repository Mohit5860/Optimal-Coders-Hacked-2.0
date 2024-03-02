import React, { useState } from "react";
import FetchCampaign from "../components/campaign/FetchCampaign";

const CampaignPage = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    const capitalizedCity = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    setCity(capitalizedCity);
  };

  const handleSubmit = () => {
    if (city.trim() === "") {
      setError("Please enter a city.");
      return;
    }

    setError(""); 
  };

  return (
    <div className="text-center m-5 p-5">
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Search
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <FetchCampaign city={city} />
    </div>
  );
};

export default CampaignPage;
