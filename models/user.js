import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  uid: {
    type: String,
    required: [true, "uid is required"],
  },
});

const User = (models && models.User) || model("User", userSchema);
export default User;
