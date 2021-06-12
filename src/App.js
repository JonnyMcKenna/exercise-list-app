import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import Toggle from "./components/Toggle";
import * as constants from "./constants";

function App() {
  const [exerciseData, setExerciseData] = useState([]);
  const [gender, setGender] = useState(constants.MALE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadExerciseData();
  }, []);

  const loadExerciseData = async () => {
    const response = await fetch(constants.EXERCISE_API);
    const data = await response.json();
    setExerciseData(data);
    setInterval(setLoading(false), 3000);
  };

  return (
    <div className="App">
      <h1 className="title">Exercise List App</h1>

      <Toggle gender={gender} setGender={setGender} />

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Table exercises={exerciseData.exercises} gender={gender} />
      )}
    </div>
  );
}

export default App;
