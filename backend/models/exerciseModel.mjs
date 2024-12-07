const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, enum: ["kg", "lbs"], required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
