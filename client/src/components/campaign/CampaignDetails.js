import React from "react";
import { useNavigate } from "react-router-dom";

const CampaignDetails = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-5 p-5">
        {" "}
        Give Blood Save Life
      </h1>
      <div className="flex">
        <img
          className="m-10"
          src="https://imgs.search.brave.com/VjXUNEgdvM3Di6RW5w7CdSehSZnAV8vBj25MPBB9YQ0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5Lzk0/LzE3L2U5OTQxNzgw/ZDQ1YmE1Zjg3MjQ1/ZDMyMTVkNzVlMjg1/LmpwZw"
        ></img>
        <div className="flex-col">
          <div className="flex">
            <h2 className="text-2xl mx-20 my-10">
              Organised by : Jose Charles
            </h2>
            <h2 className="text-2xl mx-20 my-10">Date : 27 April</h2>
            <h2 className="text-2xl mx-20 my-10">Venue : Alexander Club</h2>
          </div>

          <div>
            <h2 className="text-2xl m-20">
              Discription : Join us for a life-saving opportunity at our blood
              donation camp. Your simple act of donating blood can make a
              significant difference and save lives in our community. Every drop
              counts!
            </h2>
            <h2 className="text-2xl m-20">
              Why Donate: Blood donations help patients undergoing surgeries,
              trauma victims, cancer patients, and individuals with chronic
              illnesses. By donating blood, you contribute to replenishing the
              blood supply and ensuring it is readily available for those in
              need. Your donation can make a direct impact and potentially save
              multiple lives.
            </h2>
            <button
              onclick={handleClick}
              className="border bg-blue-200 rounded-lg p-5 ml-96"
            >
              <p className="text-3xl">Register Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
