/* jshint ignore:start */

const mongoose = require("mongoose");

const textSchema = mongoose.Schema({
  markdown: String,
  file: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
});

module.exports = mongoose.model("Text", textSchema);
