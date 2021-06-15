import "../App.css";
import TableData from "./TableData";

const Table = (props) => {
  const { exercises, gender } = props;

  return (
    exercises.length !== 0 && (
      <table className="exercise-data">
        {exercises.map(function (exercise, index) {
          return <TableData key={index} exercise={exercise} gender={gender} />;
        })}
      </table>
    )
  );
};

export default Table;
