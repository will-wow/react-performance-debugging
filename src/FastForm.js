import React from "react";
import Grid from "./Grid";
import MultiGrid from "./MultiGrid";
import Header from "./Header";

class NumberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "A Bunch of Numbers",
      firstNumber: 0,
      secondNumber: 0,
      numbers: [0, 0]
    };
  }

  setNumbers = () => {
    const { firstNumber, secondNumber } = this.state;

    this.setState({ numbers: [firstNumber, secondNumber] });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNumberChange = event => {
    const { name, value } = event.target;
    const number = value ? parseInt(value) : 0;
    this.setState({ [name]: number }, this.setNumbers);
  };

  render() {
    const { name, firstNumber, secondNumber, numbers } = this.state;

    return (
      <div>
        <div style={{ display: "flex" }}>
          <label>
            Name
            <input name="name" value={name} type="text" onChange={this.handleChange} />
          </label>

          <label>
            First Number To Add
            <input name="firstNumber" value={firstNumber} type="number" onChange={this.handleNumberChange} />
          </label>

          <label>
            Second Number To Add
            <input name="secondNumber" type="number" value={secondNumber} onChange={this.handleNumberChange} />
          </label>
        </div>

        <Header text={name} />

        <Grid number={firstNumber + secondNumber} />
        <MultiGrid numbers={numbers} />
      </div>
    );
  }
}

export default NumberForm;
