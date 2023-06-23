import propTypes from "prop-types";
import Button from "../ui/Button";
const OperationSection = ({ handleOperation }) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "40px 0",
  };
  return (
    <div style={style}>
      <Button text="+" handleBtn={handleOperation} value="+" />
      <Button text="-" handleBtn={handleOperation} value="-" />
      <Button text="*" handleBtn={handleOperation} value="*" />
      <Button text="/" handleBtn={handleOperation} value="/" />
      <Button text="%" handleBtn={handleOperation} value="%" />
    </div>
  );
};
OperationSection.prototype = {
  handleOperation: propTypes.func,
};
export default OperationSection;
