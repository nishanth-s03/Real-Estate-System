import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F180867%2Fprofile-circle&psig=AOvVaw3D3ty0hQjESIMcrLejdual&ust=1704556679971000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJj8j9TOxoMDFQAAAAAdAAAAABAD",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
