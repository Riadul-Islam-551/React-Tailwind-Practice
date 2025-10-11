import React, { use } from "react";
import { Bar, Legend, BarChart, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const ResultChart = ({ chartDataPromis }) => {
  const chartArray = use(chartDataPromis);
  const chartData = chartArray.data;

  // ............modify the json data ...........
  const resultChartData = chartData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.mathematics,
    };
    return student;
  });
  console.log(resultChartData);

  return (
    <div>
      <h1 className="mt-9 mb-6 text-center font-bold text-2xl">Result Chart</h1>
      <BarChart width={700} height={300} data={resultChartData} className="mx-auto">
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="physics" fill="blue" barSize={5}></Bar>
        <Bar dataKey="chemistry" fill="green" barSize={5}></Bar>
        <Bar dataKey="math" fill="red" barSize={5}></Bar>
      </BarChart>
    </div>
  );
};

export default ResultChart;
