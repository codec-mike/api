const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://" +
  process.env.MONGODB_USER +
  ":" +
  process.env.MONGODB_PASSWORD +
  "@" +
  process.env.MONGODB_CLUSTER +
  "/" +
  process.env.MONGODB_DATABASE +
  "?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log(`DB conectada a ${db.connection.host}`))
  .catch((err) => console.error(err));
