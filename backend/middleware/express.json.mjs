import express from "express";
import exercises from "./routes/exerciseRoutes.mjs";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use("/exercises", exercises);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
