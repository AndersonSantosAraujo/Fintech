import { ISale } from "../contexts/DataContext";
import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

type IDaySale = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

const transformData = (data: ISale[]): IDaySale[] => {
  const days = data.reduce((acc: { [key: string]: IDaySale }, item) => {
    const day = item.data.split(" ")[0];

    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }

    acc[day][item.status] += item.preco;

    return acc;
  }, {});

  return Object.values(days).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
};

const SalesChart = ({ data }: { data: ISale[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformData(data)}>
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
