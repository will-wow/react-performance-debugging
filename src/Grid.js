import React from "react";
import { range } from "lodash";

import Header from "./Header";

const BIG_RANGE = range(0, 100);

const Grid = ({ number }) => {
  const bigRange = BIG_RANGE;

  return (
    <div>
      <Header text={`Grid + ${number}`} />
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

export default React.memo(Grid);
// export default Grid;
