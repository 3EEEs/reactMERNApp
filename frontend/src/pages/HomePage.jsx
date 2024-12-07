import React, { useState, useEffect } from "react";
import ExerciseTable from "../components/ExerciseTable";
import axios from "axios";

const HomePage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await axios.get("/exercises");
      setExercises(response.data);
    } catch (error) {
      alert("Error fetching exercises!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/exercises/${id}`);
      setExercises(exercises.filter((exercise) => exercise._id !== id));
    } catch (error) {
      alert("Error deleting exercise!");
    }
  };

  return (
    <div>
      <h1>Exercise Tracker</h1>
      <ExerciseTable exercises={exercises} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
