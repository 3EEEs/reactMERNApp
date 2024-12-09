import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true, min: 1 },
  weight: { type: Number, required: true, min: 1 },
  unit: { type: String, required: true, enum: ["kgs", "lbs"] },
  date: { type: String, required: true, match: /^\d{2}-\d{2}-\d{2}$/ },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
