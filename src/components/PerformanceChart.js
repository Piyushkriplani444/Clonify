import * as React from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Tooltip,
  Customized,
  YAxis,
  Area,
  AreaChart,
} from "recharts";

const data = [
  {
    name: "Sun",
    index: "Sun",
    instagram: 380,
    facebook: 280,
  },
  {
    name: "Mon",
    index: "Mon",
    instagram: 180,
    facebook: 250,
  },
  {
    name: "Tue",
    index: "Tue",
    instagram: 110,
    facebook: 110,
  },
  {
    name: "Wed",
    index: "Wed",
    instagram: 380,
    facebook: 280,
  },
  {
    name: "Thur",
    index: "Thur",
    instagram: 50,
    facebook: 40,
  },
  {
    name: "Fri",
    index: "Fri",
    instagram: 270,
    facebook: 180,
  },
  {
    name: "Sat",
    index: "Sat",
    instagram: 380,
    facebook: 280,
  },
];

export default function PerformanceChart() {
  return (
    <div className="shadow-lg  m-2 p-10 ">
      <ResponsiveContainer width="95%" height={400}>
        <h4 className="pl-15 pb-1 m-1 font-bold text-lg">Performance</h4>
        <AreaChart
          data={data}
          // margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            padding="gap"
            tick={{
              fontSize: "1rem",
              color: "#8D8E92",
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            orientation="left"
            tick={{
              fontSize: "1rem",
              color: "#8D8E92",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="instagram"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="facebook"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
