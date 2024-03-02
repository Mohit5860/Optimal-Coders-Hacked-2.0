import React from "react";
import { useLocation } from "react-router-dom";
import HospitalCart from "./HospitalCart";

const Data = () => {
  const location = useLocation();
  const { formData, fetchedData } = location.state;
  console.log(fetchedData);
  const data = [
    {
      name: "a",
      blood: [
        {
          type: "A+",
          units: 10,
        },
      ],
      contact: 9093,
    },
  ];
  return (
    <div className="text-center">
      <span className="">
        Search results for City: {formData.city} and Blood Group:{" "}
        {formData.type}{" "}
      </span>
      <HospitalCart data={data} type={formData.bloodGroup} />
    </div>
  );
};

export default Data;
