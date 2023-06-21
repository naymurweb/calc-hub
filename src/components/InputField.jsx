import React from 'react';

const InputField = () => {
    return (
        <input
        type="number"
        placeholder='Enter your value'
        style={{
          width: "300px",
          padding: "10px",
          border: "2px solid #6EC72D",
          borderRadius: "5px",
          fontSize: "16px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      />
    );
};

export default InputField;