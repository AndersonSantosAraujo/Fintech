import React, { useState } from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [initial, setInitial] = useState("");
  const [final, setFinal] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
