import "../App.css";
import TableData from "./TableData";

const Table = (props) => {
  const { exercises, gender } = props;

  return (
    <table className="exercise-data">
      <tbody>
        {exercises &&
          exercises.map(function (exercise, index) {
            return (
              <TableData key={index} exercise={exercise} gender={gender} />
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
