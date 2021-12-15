const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (date)=>{
      //     return date.format("mm/dd/yy")
      // }
    },
    username: { type: String, required: true },
    // reactions: [{ type: Schema.Types.ObjectId, ref: "Reaction" }],
    reactions: [reactionSchema],
    // not too sure about reaction as an array of nested docs
  },
  {
    toJSON: {
      getters: true,
    },
    // getters method for date formatting?
  }
);
// Not sure about this date formatter!
// thoughtSchema.virtual("formatDate").get(function () {
//   let date = new Date(this.createdAt);
//   return date.format("m/dd/yy");
// });

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
// Model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
