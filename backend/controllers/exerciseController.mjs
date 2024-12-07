const Exercise = require("../models/exerciseModel");

// Get all exercises
const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercises", error });
  }
};

// Create a new exercise
const createExercise = async (req, res) => {
  const { name, reps, weight, unit, date } = req.body;
  try {
    const newExercise = await Exercise.create({
      name,
      reps,
      weight,
      unit,
      date,
    });
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(400).json({ message: "Error creating exercise", error });
  }
};

// Update an exercise
const updateExercise = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedExercise)
      return res.status(404).json({ message: "Exercise not found" });
    res.status(200).json(updatedExercise);
  } catch (error) {
    res.status(400).json({ message: "Error updating exercise", error });
  }
};

// Delete an exercise
const deleteExercise = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(id);
    if (!deletedExercise)
      return res.status(404).json({ message: "Exercise not found" });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: "Error deleting exercise", error });
  }
};

module.exports = {
  getAllExercises,
  createExercise,
  updateExercise,
  deleteExercise,
};
