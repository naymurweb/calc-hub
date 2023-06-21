import React from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import History from "./components/History";

const App = () => {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1 style={{ fontSize: "60px", textAlign: "center", color: "#E03B8B" }}>
        0
      </h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <InputField />
        <InputField />
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
