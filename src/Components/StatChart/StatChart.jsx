import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatChart = () => {
  const data = [
    { name: "Phones", Sold: 223, Stock: 400, amt: 2400 },
    { name: "Laptops", Sold: 172, Stock: 298, amt: 2210 },
    { name: "MacBooks", Sold: 445, Stock: 688, amt: 2290 },
    { name: "Iphones", Sold: 333, Stock: 508, amt: 2000 },
    { name: "Accessories", Sold: 532, Stock: 878, amt: 2181 },
    { name: "Smart Watches", Sold: 669, Stock: 730, amt: 2500 },
    
  ];

  

  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 1000]} />
          <Tooltip />
          <Legend />
          
          <Bar
            dataKey="Stock"
            fill="#9538E2"
            activeBar={(props) => <Rectangle {...props} fill="pink" stroke="#9538E2" />}
          />
          <Bar
            dataKey="Sold"
            fill="#BF87EE"
            activeBar={(props) => <Rectangle {...props} fill="gold" stroke="#BF87EE" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default StatChart;
