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
    <tbody>
      <tr className="tableRow">
        <td className="firstColumn">
          <div className="exerciseName">{name}</div>

          <ImageComponent
            male={male}
            female={female}
            gender={gender}
            maleClassName={constants.MALE_IMAGE_MOBILE}
            femaleClassName={constants.FEMALE_IMAGE_MOBILE}
          />

          <button
            className="view-instructions-link"
            id="view-instructions-link-id"
            onClick={() => {
              setViewInstructions(!viewInstructions);
            }}
          >
            View Instructions
          </button>

          {viewInstructions && extraContent}
        </td>

        <td className="secondColumn">
          <ImageComponent
            male={male}
            female={female}
            gender={gender}
            maleClassName={constants.MALE_IMAGE}
            femaleClassName={constants.FEMALE_IMAGE}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default TableData;
