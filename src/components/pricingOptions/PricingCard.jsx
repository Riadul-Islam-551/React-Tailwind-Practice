import React from "react";
import Facility from "./Facility";

const PricingCard = ({ card }) => {
  const { membership, duration, price, description, facilities } = card;
  //   console.log(card);
  return (
    <div className="border rounded-2xl py-2 px-4 ">
      <h1 className="text-xl font-bold mb-3">{membership}</h1>
      <h4>{duration}</h4>
      <button className="btn btn-primary w-full">${price} / Month</button>
      <p className="my-3 text-sm text-justify px-3">{description}</p>
      <h3 className="font-bold mt-3">Facilities : </h3>
      <div>
        {facilities.map((facility) => (
          <Facility facility={facility}></Facility>
        ))}
      </div>
      <div className="mt-3 text-end">
        <button className="btn">Purches</button>
      </div>
    </div>
  );
};

export default PricingCard;
