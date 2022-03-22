const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
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

module.exports = Stats = mongoose.model("Stats", StatsSchema);
