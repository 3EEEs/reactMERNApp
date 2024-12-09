import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import exercisesRouter from "./routes/exercises.mjs";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_CONNECT_STRING = process.env.MONGODB_CONNECT_STRING;

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/exercises", exercisesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
