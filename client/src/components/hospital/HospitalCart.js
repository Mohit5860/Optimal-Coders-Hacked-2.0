import React from "react";
const HospitalCart = ({ data, type }) => {
  return (
    <div className="mx-72 my-5 py-5">
      {data.length === 0 ? (
        <p>No hospitals or blood bank found</p>
      ) : (
        data.map((d) => (
          <div className="flex justify-between my-2" key={d.name}>
            <p>Name: {d.name}</p>
            <p>Type: {type}</p>
            <p>Units: {d.blood.find((b) => b.type === type).units}</p>
            <p>Contact: {d.contact}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HospitalCart;
