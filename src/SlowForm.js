import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";

const SlowForm = ({}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  return (
    <div>
      <label>
        Name
        <input name="name" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Number
        <input name="number" value={number} onChange={event => setNumber(event.target.value)} />
      </label>
      <Grid number={number} />
    </div>
  );
};

SlowForm.propTypes = {
  className: PropTypes.string
};

SlowForm.defaultProps = {
  className: ""
};

export default SlowForm;
