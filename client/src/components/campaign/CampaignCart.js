import React from "react";
import { useNavigate } from "react-router-dom";

const CampaignCart = ({ img, name, id}) => {
    const navigate = useNavigate();
  return <div className="border m-5 p-5" onClick={() => navigate(`/campaign/:${id}`) }>
    <img className="h-10 w-10" src={img} />
    <p className="text-2xl">{name}</p>
  </div>;
};

export default CampaignCart;
