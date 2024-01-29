import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...rest }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} name={label} {...rest} />
    </div>
  );
};

export default DateInput;
