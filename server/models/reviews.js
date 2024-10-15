/*
 UserName: req.body.UserName,
position: req.body.position,
rating: req.body.rating,
Review: req.body.Review,

*/
import { Schema, model } from "mongoose";


// create schema
const reviewSchema = new Schema({
  userName: { type: String, required: true },
  position: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true }, // Assuming WhatsApp numbers are unique
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

reviewSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default model("review", reviewSchema);
