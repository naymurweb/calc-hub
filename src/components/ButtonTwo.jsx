import React from 'react';

const ButtonTwo = ({children}) => {
    return (
        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#2827CC",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            display:'flex',
            margin:'20px'
          }}
        >
          {children}
        </button>
    );
};

export default ButtonTwo;