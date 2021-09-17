import mongoose from "mongoose";
import express, { NextFunction, Request, Response } from "express";


mongoose.connect("mongodb//localhost:27017/easy_posts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

//app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) return response.status(400).json(error.message);

    return response.status(500).json(error);
  }
)

app.listen(4003, () => console.log("server is Running: http://localhost:4003/"));
