const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  caption: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    required: true,
  },
  CommentSection: {
    type: mongoose.Schema.Types.ObjectId,
    default: "https://i.stack.imgur.com/l60Hf.png",
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = Media = mongoose.model("Media", MediaSchema);
