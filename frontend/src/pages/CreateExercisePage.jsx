import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import { createExercise } from "../api";

const CreateExercisePage = () => {
  const handleSave = (newExercise) => {
    createExercise(newExercise).then(() => {
      // redirect or show success message
    });
  };

  return (
    <div>
      <h1>Create Exercise</h1>
      <ExerciseForm onSave={handleSave} />
    </div>
  );
};

export default CreateExercisePage;
