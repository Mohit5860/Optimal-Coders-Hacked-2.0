import React from "react";
import { useNavigate } from "react-router-dom";

const CampaignCart = ({ img, name, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border border-slate-600"
      onClick={() => navigate(`/campaign-details`)}
    >
      <img className="h-96 w-64" src={img} />
    </div>
  );
};

export default CampaignCart;
