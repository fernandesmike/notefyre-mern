// Module imports
require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = (startApi) => {
  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => {
      // Only listen server requests when connection to database is succesfull
      console.log("Connection to database established!");
      startApi();
    })
    .catch((err) => {
      console.log("Connection failed!");
      console.log(err);
    });
};

module.exports = connectDb;
