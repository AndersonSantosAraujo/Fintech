import React from "react";
import { useData } from "../contexts/DataContext";
import SaleItem from "../components/SaleItem";

const Sales = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <ul>
      {data.map((sale, index) => (
        <li key={index}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
