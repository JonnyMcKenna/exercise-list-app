import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {

  const [exerciseData, setExerciseData] = useState([]);
  const [gender, setGender] = useState("male");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadExerciseData();
  }, []);

  const loadExerciseData = async () => {
    const response = await fetch(
      "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
    );
    const data = await response.json();
    setExerciseData(data);
    setInterval(setLoading(false), 3000);
  };

  return (
    <div className="App">
      <h1 className="title">Exercise List App</h1>

      <label className="switch">
        <input
          type="checkbox"
          id="togBtn"
          onClick={() => {
            setGender(gender === "male" ? "female" : "male");
          }}
        />
        <div className="slider round">
          <span
            className="male"
            onClick={() => {
              setGender("female");
            }}
          >
            Male
          </span>
          <span
            className="female"
            onClick={() => {
              setGender("male");
            }}
          >
            Female
          </span>
        </div>
      </label>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Table exercises={exerciseData.exercises} gender={gender} />
      )}
    </div>
  );
}

export default App;
