const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    process.env.URL_connection,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to DB");
    }
  );
}

module.exports = connectDB;
