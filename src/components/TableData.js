import "../App.css";
import { useState } from "react";
import * as constants from "../constants";
import ImageComponent from "./ImageComponent";

const TableData = (props) => {
  const [viewInstructions, setViewInstructions] = useState(false);

  const {
    exercise: { name, male, female, transcript },
    gender,
  } = props;

  var extraContent = (
    <div
      className="extraContent"
      dangerouslySetInnerHTML={{ __html: transcript }}
    />
  );

  return (
    <tr className="tableRow">
      <div className="firstColumn">
        <div className="exerciseName">{name}</div>

        <ImageComponent
          male={male}
          female={female}
          gender={gender}
          maleClassName={constants.MALE_IMAGE_MOBILE}
          femaleClassName={constants.FEMALE_IMAGE_MOBILE}
        />

        <a
          className="read-more-link"
          onClick={() => {
            setViewInstructions(!viewInstructions);
          }}
        >
          <div className="viewInstructions">View Instructions</div>
        </a>

        {viewInstructions && extraContent}
      </div>

      <div className="secondColumn">
        <ImageComponent
          male={male}
          female={female}
          gender={gender}
          maleClassName={constants.MALE_IMAGE}
          femaleClassName={constants.FEMALE_IMAGE}
        />
      </div>
    </tr>
  );
};

export default TableData;
