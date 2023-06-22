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
  const [historyList, setHistoryList] = useState([]);
  const [restore, setRestore] = useState({});

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
      // operations
      const resultHandle = new Function(
        "operator",
        `
      return ${inputField.a} ${operator} ${inputField.b}`
      );

      SetResult(resultHandle);

      // history
      setHistoryList([
        ...historyList,
        {
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
          id: Math.random().toString(36).substr(2, 5),
          result: resultHandle(),
          ...inputField,
          operator,
        },
      ]);

      // reset input field'
      setInputField(defaultField);
    } else {
      alert("Enter your valid number !");
      setInputField(defaultField);
    }
  };

  // restore button handle
  const handleRestore = (id) => {
    const storeItem = historyList.find((item) => item.id === id);
    SetResult(storeItem.result);
    setInputField({
      a: storeItem.a,
      b: storeItem.b,
    });
    setRestore({
      ...storeItem,
    });
  };
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1 style={{ fontSize: "60px", textAlign: "center", color: "#2827CC" }}>
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
      <History
        historyList={historyList}
        handleRestore={handleRestore}
        restore={restore}
      />
    </div>
  );
};

export default App;
