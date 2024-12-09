import React, { useState, useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm";
import { fetchExercise, updateExercise } from "../api";

const EditExercisePage = ({ match }) => {
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    fetchExercise(match.params.id).then((data) => setExercise(data));
  }, [match.params.id]);

  const handleSave = (updatedExercise) => {
    updateExercise(match.params.id, updatedExercise).then(() => {
      // redirect or show success message
    });
  };

  if (!exercise) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Exercise</h1>
      <ExerciseForm exercise={exercise} onSave={handleSave} />
    </div>
  );
};

export default EditExercisePage;
