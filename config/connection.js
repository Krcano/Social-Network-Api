const { connect, connection } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialnetDB";

connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
//   () => {
//     console.log("connected");
//   }
);

module.exports = connection;
