const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  CommentSection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommentSection",
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comment = mongoose.model("Comments", CommentSchema);
