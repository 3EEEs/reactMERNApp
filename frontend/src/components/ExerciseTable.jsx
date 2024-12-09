import React from "react";
import ExerciseRow from "./ExerciseRow";

const ExerciseTable = ({ exercises }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Exercise</th>
          <th>Duration</th>
          <th>Calories Burned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map((exercise) => (
          <ExerciseRow key={exercise.id} exercise={exercise} />
        ))}
      </tbody>
    </table>
  );
};

export default ExerciseTable;
