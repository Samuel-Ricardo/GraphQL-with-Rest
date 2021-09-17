import mongoose, {Schema, Document} from "mongoose";

type User = {
  name: string;
  userName: string;
  createdAt: Date;
};

const UserSchema = new Schema({
  name: String,
  userName: String,
  createdAt: {
    type: "Date",
    default: Date.now,
  },
});

const User = mongoose.model<User>("User", UserSchema);

export { User };
