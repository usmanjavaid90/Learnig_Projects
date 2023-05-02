import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  creator: String,
  title: String,
  body: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Story", storySchema);
