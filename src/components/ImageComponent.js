import "../App.css";
import * as constants from "../constants";

const ImageComponent = (props) => {
  const {
    male = { image: "" },
    female = { image: "" },
    gender,
    maleClassName,
    femaleClassName,
  } = props;

  return (
    <div>
      {gender === constants.MALE && (
        <img className={maleClassName} src={male.image} alt="Male" />
      )}

      {gender === constants.FEMALE && (
        <img className={femaleClassName} src={female.image} alt="Female" />
      )}
    </div>
  );
};

export default ImageComponent;
