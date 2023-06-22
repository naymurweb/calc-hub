import React from "react";

const ButtonTwo = ({ children, handleRestore, id, restore }) => {
  return (
    <button
      disabled={restore.id === id}
      onClick={() => handleRestore(id)}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        // backgroundColor: "#383CC1",
        backgroundColor: restore.id === id ? '#207398' : '#383CC1',

        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        display: "flex",
        margin: "20px",
      }}
    >
      {children}
    </button>
  );
};

export default ButtonTwo;
