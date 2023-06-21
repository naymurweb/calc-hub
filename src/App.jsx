import React, { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import History from "./components/History";

const defaultField = {
  a: "",
  b: "",
};
const App = () => {
  const [inputField, setInputField] = useState(defaultField);

  // input-field handle
  const handleInputField = (event) => {
    setInputField({
      ...inputField,
      [event.target.name]: parseInt(event.target.value),
    });
  };
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1 style={{ fontSize: "60px", textAlign: "center", color: "#E03B8B" }}>
        32
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
        <Button>Addition +</Button>
        <Button>Subtraction -</Button>
        <Button>Multiplication *</Button>
        <Button>Division /</Button>
      </div>
      <History />
    </div>
  );
};

export default App;
