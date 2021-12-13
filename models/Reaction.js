const { Schema, model, now } = require("mongoose");

const reactionSchema = new Schema({
  //  reactionId:{type: Schema.Types.ObjectId, default: new ObjectId} Not too sure how to set this up
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
},
{
  // toJSON: {
  //   getters: true,
  // },
  // getters method for date formatting?
});

module.exports= reactionSchema;