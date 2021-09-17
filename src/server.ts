import mongoose from "mongoose";
import express, { NextFunction, Request, Response } from "express";


mongoose.connect("mongodb//localhost:27017/easy_posts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

//app.use(routes);

app.listen(4003, () => console.log("server is Running: http://localhost:4003/"));
