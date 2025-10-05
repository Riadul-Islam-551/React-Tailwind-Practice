import React from "react";

const Facility = ({ facility }) => {
  return (
    <div>
      <ul>
        <li className="bg-gray-200 mt-2 p-2 rounded text-sm">{facility}</li>
      </ul>
    </div>
  );
};

export default Facility;
