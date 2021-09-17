import mongoose from "mongoose";


mongoose.connect("mongodb//localhost:27017/easy_posts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
