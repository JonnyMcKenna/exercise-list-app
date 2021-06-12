import "../App.css";
import { useState } from "react";

const TableData = (props) => {
  const [readMore, setReadMore] = useState(false);

  const {
    exercise: { name, male, female, transcript },
    gender,
  } = props;

  var extraContent = <div className="extraContent" dangerouslySetInnerHTML={{ __html: transcript }} />;

  return (
    <tr className="tableRow">
      <div className="firstAndSecondColumn">

        <div className="exerciseName">{name}</div>

        {gender === "male" && (
          <td className="maleName" data-title="Male Name">
            <img className="maleImageMobile" src={male.image} alt="Male" />
          </td>
        )}

        {gender === "female" && (
          <td className="femaleName" data-title="Female Name">
            <img className="femaleImageMobile" src={female.image} alt="Female" />
          </td>
        )}

        <a
          className="read-more-link"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <div className="viewInstructions">{"View Instructions"}</div>
        </a>

        {readMore && extraContent}
      </div>

      <div className="thirdColumn">

        {gender === "male" && (
          <td className="maleName" data-title="Male Name">
            <img className="maleImage" src={male.image} alt="Male" />
          </td>
        )}

        {gender === "female" && (
          <td className="femaleName" data-title="Female Name">
            <img className="femaleImage" src={female.image} alt="Female" />
          </td>
        )}
      </div>
    </tr>
  );
};

export default TableData;
