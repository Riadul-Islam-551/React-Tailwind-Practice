import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const marksData = [
  {
    id: 1,
    name: "Araf",
    mathematics: 85,
    physics: 78,
    chemistry: 82,
  },
  {
    id: 2,
    name: "Nusrat",
    mathematics: 91,
    physics: 89,
    chemistry: 94,
  },
  {
    id: 3,
    name: "Riad",
    mathematics: 76,
    physics: 81,
    chemistry: 79,
  },
  {
    id: 4,
    name: "Saba",
    mathematics: 88,
    physics: 85,
    chemistry: 90,
  },
  {
    id: 5,
    name: "Tamanna",
    mathematics: 92,
    physics: 95,
    chemistry: 89,
  },
  {
    id: 6,
    name: "Rakib",
    mathematics: 79,
    physics: 84,
    chemistry: 77,
  },
  {
    id: 7,
    name: "Sumaiya",
    mathematics: 83,
    physics: 80,
    chemistry: 85,
  },
  {
    id: 8,
    name: "Nahidul",
    mathematics: 87,
    physics: 91,
    chemistry: 88,
  },
  {
    id: 9,
    name: "Mim",
    mathematics: 90,
    physics: 93,
    chemistry: 96,
  },
  {
    id: 10,
    name: "Samiul",
    mathematics: 82,
    physics: 79,
    chemistry: 81,
  },
];

const MarksChart = () => {
  return (
    <div className="my-11">
      <h1 className="mt-9 mb-5 font-bold text-2xl text-center">Marks Chart</h1>
        <LineChart width={600} height={300} data={marksData} className="mx-auto">
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Line dataKey="mathematics"></Line>
          <Line dataKey="physics"></Line>
          <Line dataKey="chemistry"></Line>
        </LineChart>
    </div>
  );
};

export default MarksChart;
