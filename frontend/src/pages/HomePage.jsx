import React, { useEffect, useState } from "react";
import ExerciseTable from "../components/ExerciseTable";
import { fetchExercises } from "../api";

const HomePage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises().then((data) => setExercises(data));
  }, []);

  return (
    <div>
      <h1>Exercise Tracker</h1>
      <ExerciseTable exercises={exercises} />
    </div>
  );
};

export default HomePage;
