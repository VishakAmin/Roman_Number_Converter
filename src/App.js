import "./styles.css";
import { useState } from "react";
import Button from "./Button";

export default function App() {
  const [value, setValue] = useState([]);
  const [ans, setAns] = useState();

  function handleChange(event) {
    setValue(event.target.value);
  }

  function onsubmit() {
    console.log(value);
    const val = {
      I: 1,
      V: 5,
      X: 10
    };
    let result = 0;
    for (let i = 0; i < value.length; i++) {
      const one = val[value[i]];
      const two = val[value[i + 1]];
      if (one < two) {
        result -= one;
      } else {
        result += one;
      }
      setAns(result);
    }
  }

  return (
    <div className="App">
      <h1>Hello MAC</h1>
      <input placeholder="Enter the Roman Figure" onChange={handleChange} />
      <Button buttonText="Submit" type="secondary" onClick={() => onsubmit()} />
      <h2>
        The Decimal Value of the {value} is {ans}
      </h2>
    </div>
  );
}
