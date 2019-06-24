import React from "react";
import { range, sum } from "lodash";

import Header from "./Header";

const BIG_RANGE = range(0, 100);

const MultiGrid = ({ numbers }) => {
  const bigRange = BIG_RANGE;
  const number = sum(numbers);

  console.log(numbers.join());

  return (
    <div>
      <Header text={`Grid + ${numbers.join(" + ")}`} />
      <div className="grid__body">
        {bigRange.map(m => (
          <div key={m}>
            {bigRange.map(n => (
              <span key={n}>{n + number}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MultiGrid);
// export default MultiGrid;
