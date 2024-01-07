import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

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

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server Running On PORT:3000 !!");
});

app.use('/api/user', UserRouter);
app.use('/api/auth', AuthRouter);

app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  });
});











