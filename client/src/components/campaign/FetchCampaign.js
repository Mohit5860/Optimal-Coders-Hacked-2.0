import React, { useEffect, useState } from "react";
import CampaignCart from "./CampaignCart";

const FetchCampaign = ({city}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http//localhost:5000/campaign/get");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    if (city && data) {
      const filteredData = data.filter((d) => city === d.city);
      setData(filteredData);
    }
  }, [city, data]);
  return (
    <div>
        
      {data?.map((d) => (
        <div className="flex flex-wrap">
          <CampaignCart name={d.name} img={d.img} />
        </div>
      ))}
    </div>
  );
};

export default FetchCampaign;
