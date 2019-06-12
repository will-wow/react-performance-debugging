import React from "react";
import { range } from "lodash";

const BIG_RANGE = range(0, 300);

const Grid = ({ number }) => {
  // const bigRange = [...BIG_RANGE];
  const bigRange = BIG_RANGE;

  return (
    <div>
      {bigRange.map(m => (
        <div>
          {bigRange.map(n => (
            <span>{n + number}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
