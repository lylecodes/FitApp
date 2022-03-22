const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  age: {
    type: Number,
  },
  sex: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
});


module.exports = Stats = mongoose.model("stats", StatsSchema);
