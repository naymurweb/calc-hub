import React from "react";
import ButtonTwo from "./ButtonTwo";

const History = ({ historyList,handleRestore,restore}) => {
  return (
    <div
      style={{
        border: "2px solid #4CAF50",
        height: "60vh",
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2827CC", fontSize: "30px" }}>
        History
      </h2>

      {historyList.map((data) => (
        <div
          key={data.id}
          style={{
            backgroundColor: "#4CAF50",
            padding: "5px 10px",
            borderRadius: "5px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "15px 0",
            color: "#fff",
            fontSize: "16px",
          }}
        >
          <div style={{ fontSize: "20px" }}>
            <h4>Operation</h4>
            <p>{`${data.a} ${data.operator} ${data.b} = ${data.result}`}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <p>Time: {data.time}</p>
              <p>Date: {data.date}</p>
            </div>
            <div>
              <ButtonTwo handleRestore={handleRestore} id={data.id} restore={restore}>@Restore</ButtonTwo>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
