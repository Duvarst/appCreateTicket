import mongoose from "mongoose";

const Ticket = new mongoose.Schema({
  id: { type: Number, required: true },
  state: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  comments: { type: Array },
  file: { type: Array },
});

export default mongoose.model("Ticket", Ticket);
