import React from "react";
import { range, sum } from "lodash";

import Header from "./Header";

const BIG_RANGE = range(0, 100);

const BigGrid = ({ number, numbers }) => {
  const bigRange = BIG_RANGE;
  numbers = numbers || [number];
  number = sum(numbers);

  return (
    <div>
      <Header text={`BigGrid + ${numbers.join(" + ")}`} />
      <div className="grid__body">
        {bigRange.map(m => (
          <div key={m}>
            {bigRange.map(n => (
              <span key={n}>{(n + number) % 9}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// export default React.memo(BigGrid);
export default BigGrid;
