import React from "react";
import propTypes from "prop-types";

const InputField = ({ value, handleInputField, name }) => {
  const style = {
    width: "300px",
    padding: "10px",
    border: "2px solid #6EC72D",
    color: "#23C4ED",
    borderRadius: "5px",
    fontSize: "20px",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#03203C",
  };
  return (
    <input
      style={style}
      value={value}
      onChange={handleInputField}
      name={name}
      type="number"
      placeholder="Enter your number"
    />
  );
};

InputField.propTypes = {
  value: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  handleInputField: propTypes.func.isRequired,
};
export default InputField;
