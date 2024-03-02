import React from "react";
const HospitalCart = ({ data, type, city }) => {
  return (
    <div className="mx-72 my-5 py-5">
      {data.length === 0 ? (
        <p>No hospitals or blood bank found</p>
      ) : (
        data.map((d) => (
          <div className="" key={d.name}>
            {d.city === city && d.blood.find((b) => b.type === type)? <div className="flex justify-between my-2 border p-2" >
              <p>Name: {d.name}</p>
            <p>Type: {type}</p>
            <p>Units: {d.blood.find((b) => b.type === type)?.units}</p>
            <p> City : {d.city}</p>
            <p>Contact: {d.contact}</p>
            </div> : (
              ""
            )}
            
          </div>
        ))
      )}
    </div>
  );
};

export default HospitalCart;
