import React from "react";

const Button = ({ children }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        display:'flex',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
