import React from "react";
import { useData } from "../contexts/DataContext";

const buttonStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
  textAlign: "center",
};

const nameMonth = (n: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + n);

  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
};

const formatDate = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

const MonthBtn = ({ n }: { n: number }) => {
  const { setInitial, setFinal } = useData();

  const setMonth = (n: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInitial(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  };

  return (
    <button style={buttonStyle} onClick={() => setMonth(n)}>
      {nameMonth(n)}
    </button>
  );
};

export default MonthBtn;
