import React, { useState } from "react";

import InputSection from "./components/input/InputSection";
import OperationSection from "./components/operations/OperationSection";
import HistorySection from "./components/history/HistorySection";
import ResultShow from "./components/result/ResultShow";

const defaultField = {
  a: 0,
  b: 0,
};
const App = () => {
  // State management
  const [inputField, setInputField] = useState(defaultField);
  const [result, setResult] = useState(0);
  const [historyList, setHistoryList] = useState([]);

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

      setResult(resultHandle);

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
    setResult(storeItem.result);
    setInputField({
      a: storeItem.a,
      b: storeItem.b,
    });
  };
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <ResultShow result={result} />
      <InputSection value={inputField} handleInputField={handleInputField} />
      <OperationSection handleOperation={handleOperation} />
      <HistorySection historyList={historyList} handleRestore={handleRestore} />
    </div>
  );
};

export default App;
