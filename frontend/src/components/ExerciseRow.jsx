import React from "react";

const ExerciseRow = ({ exercise }) => {
  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.calories}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default ExerciseRow;
