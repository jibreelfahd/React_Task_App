import express from "express";
const app = express();

import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();

import connectDB from "./db/index.js";
import TaskRoutes from './src/routes/taskRoute.js';

app.use(cors('*'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const PORTS = process.env.PORT;
const dbURI = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(dbURI);
    app.listen(PORTS, () => console.log(`Server is running on port ${PORTS}`));
  } catch (error) {
    console.log(error);
  }
};

start();

app.use('/api' ,TaskRoutes);