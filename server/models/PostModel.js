const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
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
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    } ,
     comment: {
       type: String,
       default: ""
      }
  }],
  tags: [String],
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = Post = mongoose.model("posts", PostSchema);
