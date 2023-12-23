import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO_CONN)
  .then(() => {
    console.log("Connected to MongoDB !!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Server Running On PORT:3000 !!");
});
