import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 128,
  },
  role: {
    type: String,
    default: ["subcriber"],
    emum: ["subcriber", "Instructor", "Admin"],
  },
  stripe_account_id: "",
  stripe_seller: {},
  stripeSession: {},
  timestamps: true,
});

export default model("User", Schema);
