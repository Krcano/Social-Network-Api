const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reaction: [reactionSchema],
  // not too sure about reaction as an array of nested docs
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
