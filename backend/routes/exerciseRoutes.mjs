const express = require("express");
const {
  getAllExercises,
  createExercise,
  updateExercise,
  deleteExercise,
} = require("../controllers/exerciseController");

const router = express.Router();

// GET /api/exercises - Get all exercises
router.get("/", getAllExercises);

// POST /api/exercises - Create a new exercise
router.post("/", createExercise);

// PUT /api/exercises/:id - Update an exercise
router.put("/:id", updateExercise);

// DELETE /api/exercises/:id - Delete an exercise
router.delete("/:id", deleteExercise);

module.exports = router;
