import "../App.css";
import * as constants from "../constants";

const ImageComponent = (props) => {
  const { male, female, gender, maleClassName, femaleClassName } = props;

  return (
    <div>
      {gender === constants.MALE && (
        <td className="maleName" data-title="Male Name">
          <img className={maleClassName} src={male.image} alt="Male" />
        </td>
      )}

      {gender === constants.FEMALE && (
        <td className="femaleName" data-title="Female Name">
          <img className={femaleClassName} src={female.image} alt="Female" />
        </td>
      )}
    </div>
  );
};

export default ImageComponent;
