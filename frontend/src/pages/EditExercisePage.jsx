import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const EditExercisePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { exercise } = location.state;

  const [formData, setFormData] = useState(exercise);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/exercises/${formData._id}`, formData);
      alert("Exercise updated successfully!");
      navigate("/");
    } catch (error) {
      alert("Error updating exercise!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Reps:</label>
      <input
        name="reps"
        type="number"
        value={formData.reps}
        onChange={handleChange}
        required
      />

      <label>Weight:</label>
      <input
        name="weight"
        type="number"
        value={formData.weight}
        onChange={handleChange}
        required
      />

      <label>Unit:</label>
      <select name="unit" value={formData.unit} onChange={handleChange}>
        <option value="kgs">kgs</option>
        <option value="lbs">lbs</option>
      </select>

      <label>Date:</label>
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default EditExercisePage;
