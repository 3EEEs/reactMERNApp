import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ExerciseRow = ({ exercise, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${exercise._id}`, { state: { exercise } });
  };

  return (
    <tr>
      <td>{exercise.name}</td>
      <td>{exercise.reps}</td>
      <td>{exercise.weight}</td>
      <td>{exercise.unit}</td>
      <td>{exercise.date}</td>
      <td>
        <FaEdit
          onClick={handleEdit}
          style={{ cursor: "pointer", marginRight: "10px" }}
        />
        <FaTrash
          onClick={() => onDelete(exercise._id)}
          style={{ cursor: "pointer" }}
        />
      </td>
    </tr>
  );
};

export default ExerciseRow;
