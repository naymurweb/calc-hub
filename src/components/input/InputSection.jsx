import InputField from "../ui/InputField";
import propTypes from "prop-types";

const InputSection = ({ value, handleInputField }) => {
  const style = {
    display: "flex",
    justifyContent: "space-evenly",
  };
  return (
    <div style={style}>
      <InputField
        name="a"
        value={value.a}
        handleInputField={handleInputField}
      />
      <InputField
        name="b"
        value={value.b}
        handleInputField={handleInputField}
      />
    </div>
  );
};

InputSection.prototype = {
  value: propTypes.object,
  handleInputField: propTypes.func,
};
export default InputSection;
