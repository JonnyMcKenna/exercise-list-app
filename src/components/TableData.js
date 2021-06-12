import "../App.css";
import { useState } from "react";

const TableData = (props) => {
  const [readMore, setReadMore] = useState(false);

  const {
    exercise: { name, male, female, transcript },
    gender,
  } = props;

  var extraContent = <div dangerouslySetInnerHTML={{ __html: transcript }} />;

  return (
    <tr className="tableRow">
      <div className="firstAndSecondColumn">
        <td className="exerciseName" data-title="Exercise Name">
          {name}
        </td>

        <a
          className="read-more-link"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <h2>{"Learn More"}</h2>
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
