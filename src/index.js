import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

const { PORT, MG_URI } = process.env;
console.log(PORT);
// destructuring

app.use(express.json());

mongoose.connect(MG_URI).then(() => {
  console.log("Connection established");
});

app.use("/", router);

// categories, comments, feedback, about, users, ....

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
