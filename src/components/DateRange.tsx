import React from "react";
import DateInput from "./DateInput";
import { useData } from "../contexts/DataContext";

const DateRange = () => {
  const { initial, setInitial, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={initial}
        onChange={({ target }) => setInitial(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
