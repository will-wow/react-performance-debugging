import React from "react";
import { range } from "lodash";

const BIG_RANGE = range(0, 10);

const Header = ({ text }) => {
  BIG_RANGE.forEach(n => console.log(n));

  return <h1>{text}</h1>;
};

export default Header;
