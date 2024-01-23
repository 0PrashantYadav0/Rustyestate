import express from 'express';
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.congif();

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("conneded to mongoDB")
  })
  .catch(err => console.log(err));

const app = express();

app.listen(port, () => {
 console.log(`listing on port ${port}`); 
});

app.use('/api/v1')
