import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { User } from "./User";

type Post = Document & {
  content: String;
  author: String;
}

const PostSchema = new Schema({
  content: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: "Date", default: Date.now },
});

export default mongoose.model<Post>("Post", PostSchema);
