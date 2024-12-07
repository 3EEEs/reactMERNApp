import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateExercisePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    reps: "",
    weight: "",
    unit: "kgs",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/exercises", formData);
      alert("Exercise created successfully!");
      navigate("/");
    } catch (error) {
      alert("Error creating exercise!");
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

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateExercisePage;
