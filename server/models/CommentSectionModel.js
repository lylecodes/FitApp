const mongoose = require("mongoose");

const CommentSectionSchema = new mongoose.Schema({
  Media: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Media",
    required: true,
  },
});

module.exports = CommentSection = mongoose.model(
  "CommentSections",
  CommentSectionSchema
);
