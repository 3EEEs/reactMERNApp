// dbConnect.mjs
import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

export default dbConnect;
