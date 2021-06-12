import "../App.css";
import * as constants from "../constants";

const Toggle = (props) => {
  const { setGender, gender } = props;

  return (
    <label className="switch">
      <input
        type="checkbox"
        id="togBtn"
        onClick={() => {
          setGender(
            gender === constants.MALE ? constants.FEMALE : constants.MALE
          );
        }}
      />
      <div className="slider round">
        <span className="male">Male</span>
        <span className="female">Female</span>
      </div>
    </label>
  );
};

export default Toggle;
