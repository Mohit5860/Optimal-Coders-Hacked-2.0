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
     <h1 className="text-3xl font-bold">Campaigns</h1>
      {error && <p className="text-red-500">{error}</p>}
      <FetchCampaign city={city} />
    </div>
  );
};

export default CampaignPage;
