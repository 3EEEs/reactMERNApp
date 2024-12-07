import express from "express";
export const router = express.Router();

// Add your routes here
router.get("/", (req, res) => {
  res.json({ message: "Orders endpoint" });
});
