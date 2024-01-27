import express from 'express';
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js"
import signupRoute from "./routes/auth.routes.js"
import connectDB from './db/index.js';

dotenv.config();

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log("Server is listening on port " + process.env.PORT);
  })
})
.catch((err) => {
  console.log("MongoDB connection error: " + err)
})

const app = express();

app.use(express.json());



app.use('/api/user', userRouter);
app.use('/api/auth', signupRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal error';
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message
  });
})
