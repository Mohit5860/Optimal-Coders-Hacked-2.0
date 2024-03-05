import React from "react";
import { useLocation } from "react-router-dom";
import HospitalCart from "./HospitalCart";

const Data = () => {
  const location = useLocation();
  const { formData, fetchedData } = location.state;
  console.log(fetchedData);
  const data = [
    {
      name: "Metro",
      blood: [
        {
          type: "A+",
          units: 10,
        },
      ],
      contact: 9093839,
      city: "Delhi"
    },
    {
      name: "AIIMs",
      blood: [
        {
          type: "A+",
          units: 10,
        },
      ],
      contact: 9097863,
      city: "Delhi"
    },
    {
      name: "General",
      blood: [
        {
          type: "B+",
          units: 6,
        },
      ],
      contact: 93748844,
      city: "Delhi"
    },
    {
      name: "Public",
      blood: [
        {
          type: "O+",
          units: 8,
        },
      ],
      contact: 90935543,
      city: "Delhi"
    },
    {
      name: "ABC",
      blood: [
        {
          type: "A+",
          units: 8,
        },
      ],
      contact: 90935368,
      city: "Delhi"
    },
    {
      name: "Ram",
      blood: [
        {
          type: "A-",
          units: 4,
        },
      ],
      contact: 903883793,
      city: "Delhi"
    },
    {
      name: "XYZ",
      blood: [
        {
          type: "B-",
          units: 12,
        },
      ],
      contact: 90975853,
      city: "Faridabad"
    },
    {
      name: "Hospital",
      blood: [
        {
          type: "AB+",
          units: 15,
        },
      ],
      contact: 90747493,
      city: "Delhi"
    },
    {
      name: "Blood Bank",
      blood: [
        {
          type: "AB+",
          units: 10,
        },
      ],
      contact: 909487473,
      city: "Faridabad"
    },
    {
      name: "Bank",
      blood: [
        {
          type: "AB+",
          units: 3,
        },
      ],
      contact: 909363666,
      city: "Faridabad"
    },
  ];
  return (
    <div className="text-center">
      <span className="">
        Search results for City: {formData.city} and Blood Group:
        {formData.bloodGroup}
        {formData.type}{" "}
      </span>
      <HospitalCart data={data} type={formData.bloodGroup} city={formData.city}/>
    </div>
  );
};

export default Data;
