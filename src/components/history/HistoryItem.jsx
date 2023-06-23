import propTypes from "prop-types";
import Button from "../ui/Button";

const HistoryItem = ({ data, handleRestore }) => {
  const style = {
    backgroundColor: "#4CAF50",
    padding: "5px 10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
    color: "#03203C",
    fontSize: "16px",
    fontWeight: "bold",
  };
  return (
    <div style={style}>
      <div style={{ fontSize: "20px" }}>
        <h4>Operation</h4>
        <p>{`${data.a} ${data.operator} ${data.b} = ${data.result}`}</p>
      </div>
      <Button text="restore @" handleBtn={handleRestore} value={data.id}></Button>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <p>Time: {data.time}</p>
          <p>Date: {data.date}</p>
        </div>
      </div>
    </div>
  );
};
HistoryItem.propTypes = {
  data: propTypes.object.isRequired,
  handleRestore: propTypes.func.isRequired,
};

export default HistoryItem;
