import React, { useState, useEffect } from "react";

const ExerciseForm = ({ exercise, onSave }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  useEffect(() => {
    if (exercise) {
      setName(exercise.name);
      setDuration(exercise.duration);
      setCalories(exercise.calories);
    }
  }, [exercise]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, duration, calories });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Exercise Name"
        required
      />
      <input
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (in minutes)"
        required
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories Burned"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ExerciseForm;
