import React from "react";
import { useData } from "../contexts/DataContext";

const Header = () => {
  const { data } = useData();

  console.log(data);

  return <div>Header</div>;
};

export default Header;
