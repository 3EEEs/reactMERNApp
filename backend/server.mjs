import express from "express";
import cors from "cors"; // Importing cors
import { router as ordersRouter } from "./routes/orders.mjs";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/orders", ordersRouter);

// Start the server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
