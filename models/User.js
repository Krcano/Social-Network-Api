const { Schema, model } = require("mongoose");
const thoughtSchema = require('./Thought');


const userSchema = new Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    // need help with match validator 
  },
  // thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
  thoughts: [thoughtSchema],
  //friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  friends: [userSchema],
});

const User = model("user", userSchema);

module.exports = User;
