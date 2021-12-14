const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [{ type: Schema.Types.ObjectId, ref: "Reaction" }],
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
thoughtSchema.virtual("format_date").get(function () {
  let date = new Date(this.createdAt);
  return date.format("m/dd/yy");
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
