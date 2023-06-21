import React, { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import History from "./components/History";

const defaultField = {
  a: "",
  b: "",
};
const App = () => {
  // State management
  const [inputField, setInputField] = useState(defaultField);
  const [result, SetResult] = useState(0);

  // input-field handle
  const handleInputField = (event) => {
    if (event.target.value !== "number") {
    }
    setInputField({
      ...inputField,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  // operations handle
  const handleOperation = (operator) => {
    if (inputField.a && inputField.b !== "") {
      const resultHandle = new Function(
        "operator",
        `
      return ${inputField.a} ${operator} ${inputField.b}`
      );

      SetResult(resultHandle());
      // reset input field'
      setInputField(defaultField);
    } else {
      alert("Enter your valid number !");
      setInputField(defaultField);
    }
  };
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1 style={{ fontSize: "60px", textAlign: "center", color: "#E03B8B" }}>
        {result}
      </h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <InputField
          name="a"
          value={inputField.a}
          handleInputField={handleInputField}
        />
        <InputField
          name="b"
          value={inputField.b}
          handleInputField={handleInputField}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "40px 0",
        }}
      >
        <Button handleOperation={handleOperation} operator={"+"}>
          Addition +
        </Button>
        <Button handleOperation={handleOperation} operator={"-"}>
          Subtraction -
        </Button>
        <Button handleOperation={handleOperation} operator={"*"}>
          Multiplication *
        </Button>
        <Button handleOperation={handleOperation} operator={"/"}>
          Division /
        </Button>
      </div>
      <History />
    </div>
  );
};

export default App;
