import { use } from "react";
import React from "react";
import PricingCard from "./PricingCard";

const Pricingoptions = ({ pricingOption }) => {
  const pricingData = use(pricingOption);
  console.log(pricingData);
  return (
    <div className="mb-14">
      <h1 className="text-center font-bold mt-9 mb-4 text-2xl">Gym Plan</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 px-3 max-w-[1200px] mx-auto">
        {pricingData.map((card) => (
          <PricingCard key={card.id} card={card}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default Pricingoptions;
