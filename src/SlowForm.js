import React, { useState } from "react";
import BigGrid from "./BigGrid";
import Header from "./Header";

const NumberForm = () => {
  const [formData, setFormData] = useState({
    name: "A Bunch of Numbers",
    firstNumber: 0,
    secondNumber: 0
  });

  const { name, firstNumber, secondNumber } = formData;

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = event => {
    const { name, value } = event.target;
    const number = value ? parseInt(value) : 0;
    setFormData({ ...formData, [name]: number });
  };

  const numbers = React.useMemo(() => [firstNumber, secondNumber], [firstNumber, secondNumber]);

  return (
    <div>
      <div className="fixed">
        <Header text={name} />

        <div className="inputs">
          <label>
            Name
            <input name="name" value={name} type="text" onChange={handleChange} />
          </label>

          <label>
            First Number To Add
            <input name="firstNumber" value={firstNumber} type="number" onChange={handleNumberChange} />
          </label>

          <label>
            Second Number To Add
            <input name="secondNumber" type="number" value={secondNumber} onChange={handleNumberChange} />
          </label>
        </div>
      </div>

      <BigGrid numbers={numbers} />
    </div>
  );
};

export default NumberForm;
