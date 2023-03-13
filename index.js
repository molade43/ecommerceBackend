const express = require("express");
const app = express();
const portNumber = 2000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connection sucessful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || portNumber, () => {
  console.log("testing");
});
