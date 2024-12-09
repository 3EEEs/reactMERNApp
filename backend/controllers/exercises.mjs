import Exercise from "../models/exercise.mjs";
import asyncHandler from "express-async-handler";

// POST /exercises
export const createExercise = asyncHandler(async (req, res) => {
  const { name, reps, weight, unit, date } = req.body;
  if (!name || !reps || !weight || !unit || !date) {
    return res.status(400).json({ Error: "Invalid request" });
  }

  const exercise = new Exercise({ name, reps, weight, unit, date });
  await exercise.save();
  res.status(201).json(exercise);
});

// GET /exercises
export const getAllExercises = asyncHandler(async (req, res) => {
  const exercises = await Exercise.find();
  res.status(200).json(exercises);
});

// GET /exercises/:id
export const getExerciseById = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findById(req.params._id);
  if (!exercise) {
    return res.status(404).json({ Error: "Not found" });
  }
  res.status(200).json(exercise);
});

// PUT /exercises/:id
export const updateExercise = asyncHandler(async (req, res) => {
  const { name, reps, weight, unit, date } = req.body;
  if (!name || !reps || !weight || !unit || !date) {
    return res.status(400).json({ Error: "Invalid request" });
  }

  const exercise = await Exercise.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
  });
  if (!exercise) {
    return res.status(404).json({ Error: "Not found" });
  }
  res.status(200).json(exercise);
});

// DELETE /exercises/:id
export const deleteExercise = asyncHandler(async (req, res) => {
  const exercise = await Exercise.findByIdAndDelete(req.params._id);
  if (!exercise) {
    return res.status(404).json({ Error: "Not found" });
  }
  res.status(204).send();
});
