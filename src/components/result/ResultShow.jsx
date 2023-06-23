import React from "react";
import propType from "prop-types";

const ResultShow = ({result}) => {
  const style={
    margin:'30px',
  }
  
  return (
  <div style={style}>
      <h1 style={{ fontSize: "70px", textAlign: "center", color: "#23C4ED" }}>
      {result}
    </h1>
  </div>
  );
};

ResultShow.propType={
  result:propType.string.isRequired
}

export default ResultShow;
