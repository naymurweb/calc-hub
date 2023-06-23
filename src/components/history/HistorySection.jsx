import HistoryItem from "./HistoryItem";
import propTypes from "prop-types";

const HistorySection = ({ historyList, handleRestore }) => {
    const style={
        border: "2px solid #4CAF50",
        height: "60vh",
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }
  return (
    <div style={style}>
      <h2 style={{ textAlign: "center", color: "#23C4ED", fontSize: "30px" }}>
        History
      </h2>
      {historyList.map((data) => (
        <HistoryItem key={data.id} data={data} handleRestore={handleRestore} />
      ))}
    </div>
  );
};
HistorySection.propTypes = {
  historyList: propTypes.array.isRequired,
  handleRestore: propTypes.func.isRequired,
};
export default HistorySection;
