import React from "react";
import { ISale } from "../contexts/DataContext";
import {
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const dataChart = [
  {
    data: "2024-01-03",
    pago: 3000,
    processando: 2000,
    falha: 1500,
  },
  {
    data: "2024-01-04",
    pago: 6000,
    processando: 2500,
    falha: 1000,
  },
  {
    data: "2024-01-54",
    pago: 1000,
    processando: 3500,
    falha: 900,
  },
];

const SalesChart = ({ data }: { data: ISale[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={dataChart}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#387908" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#fbcb21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#ff5533"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
