import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  accessToken: {
    type: String,
  },
});

const VehicleSchema = new Schema({
  model: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  user: userSchema,
});

export default mongoose.model("Vehicles", VehicleSchema);
