const { Schema, model, now, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    // Need help with REaction ID
    reactionId: {
      type: Schema.Types.ObjectId,
      default: function () {
        return new Types.ObjectId();
      },
    },
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      // get:
    },
  },
  {
    toJSON: {
      getters: true,
    },

    id: false,

    // getters method for date formatting?
  }
);
// Not sure about this date formatter!
// reactionSchema.virtual("format_date").get(function () {
//   let date = new Date(this.createdAt)
//   return date.format("m/dd/yy");
// });

module.exports = reactionSchema;
