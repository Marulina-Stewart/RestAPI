const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config({ path: "./config/.env" });

app = express();

app.use(express.json());
connectDB();

app.use("/api/contact", require("./routes/userRoute"));

const port = 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log("The server is running, " + " Open browser", port);
});
