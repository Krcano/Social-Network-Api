const { Schema, model, now, Types } = require("mongoose");
const moment = require("moment");
const reactionSchema = new Schema(
  {
    // Need help with REaction ID
    reactionId: {
      type: Schema.Types.ObjectId,
      default: function(){
        return new Types.ObjectId
      }
      
    },
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => moment(time).format("MMM DD YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
    
  }
);

module.exports = reactionSchema;
