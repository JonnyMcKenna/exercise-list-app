import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [exerciseData, setExerciseData] = useState([]);
  const [gender, setGender] = useState('male');

  useEffect(() => {
    loadExerciseData();
  }, []);

  const loadExerciseData = async () => {
    const response = await fetch(
      "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
    );
    const data = await response.json();
    setExerciseData(data);
  };

  return (
    <div className="App">
      <h1>Exercise List</h1>

      <div class="btn-group btn-toggle gender">
        <input
          type="button"
          name="gender"
          class="btn btn-default"
          value="Male"
          checked={gender === "male"}
          onClick={() => {
            setGender("male");
          }}
        />
        <input
          type="button"
          name="gender"
          class="btn btn-primary active"
          value="Female"
          checked={gender === "female"}
          onClick={() => {
            setGender("female");
          }}
        />
      </div>

      <Table exercises={exerciseData.exercises} gender={gender} />
    </div>
  );
}

export default App;
