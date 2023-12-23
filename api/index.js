import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";

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
app.use(express.json());
app.listen(3000, () => {
  console.log("Server Running On PORT:3000 !!");
});

app.use('/api/user', UserRouter);
app.use('/api/auth', AuthRouter);