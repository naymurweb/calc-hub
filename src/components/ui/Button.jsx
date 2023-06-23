import propTypes from "prop-types";
const Button = ({ handleBtn, text, value, disabled }) => {
  const disabledStyle = {
    backgroundColor: "lightGray",
    cursor: "default",
  };
  const style = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#23C4ED",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    ...(disabled && disabledStyle),
  };
  return (
    <button style={style} disabled={disabled} onClick={() => handleBtn(value)}>
      {text}
    </button>
  );
};

Button.propTypes = {
  value: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  handleBtn: propTypes.func.isRequired,
  disabled: propTypes.object,
};
export default Button;
